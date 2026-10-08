import type { APIRoute } from 'astro';
import { getSupabaseServerClient } from '../../../lib/supabase-server';

export const prerender = false;

export const POST: APIRoute = async ({ request, url, cookies }) => {
  try {
    // 1. Vérification basique de l'URL pour éviter le spam ou les requêtes non autorisées
    const secret = url.searchParams.get('secret');
    if (secret !== 'tc_webhook_secret_2026') {
      return new Response('Unauthorized', { status: 401 });
    }

    // 2. Récupérer les données envoyées par HelloAsso
    const payload = await request.json();
    
    // HelloAsso place généralement l'email dans data.payer.email
    const dataInfo = payload?.data;
    const email = dataInfo?.payer?.email;
    
    if (!email) {
      return new Response('No email found in payload, ignored', { status: 200 });
    }

    const formSlug = dataInfo?.formSlug || '';
    
    // 3. Traiter l'adhésion si c'est la campagne d'adhésion
    const isMembership = 
      formSlug === 'devenir-adherent' || 
      dataInfo?.formType === 'Membership' || 
      JSON.stringify(payload).includes('devenir-adherent');

    const supabase = getSupabaseServerClient(cookies);

    if (isMembership) {
      const { data, error } = await supabase.rpc('grant_adhesion_by_email', {
        payer_email: email.toLowerCase().trim(),
        secret_token: 'tc_webhook_secret_2026'
      });

      if (error) {
        console.error('Erreur RPC (Adhésion):', error);
      } else if (data === false) {
        console.log(`Webhook: ${email} a payé l'adhésion, mais pas de compte trouvé.`);
      } else {
        console.log(`Webhook: Succès ! ${email} est maintenant adhérent.`);
      }
    } else {
      // 4. Si ce n'est pas une adhésion, on tente de valider un paiement d'événement
      // Le formSlug correspondra potentiellement à un ticket_url d'un événement
      if (formSlug) {
        const { data, error } = await supabase.rpc('confirm_event_payment', {
          payer_email: email.toLowerCase().trim(),
          event_form_slug: formSlug,
          secret_token: 'tc_webhook_secret_2026'
        });

        if (error) {
          console.error('Erreur RPC (Événement):', error);
        } else if (data === false) {
          console.log(`Webhook: Aucun événement correspondant trouvé pour le slug '${formSlug}' ou aucun inscrit pour '${email}'.`);
        } else {
          console.log(`Webhook: Succès ! Paiement de l'événement validé pour ${email}.`);
        }
      } else {
        console.log(`Webhook ignoré : Paiement reçu mais aucun formSlug défini.`);
      }
    }

    // Il faut toujours répondre 200 OK à HelloAsso pour qu'ils arrêtent d'envoyer le webhook
    return new Response('Webhook processed successfully', { status: 200 });
  } catch (error) {
    console.error('Erreur serveur (Webhook HelloAsso):', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
