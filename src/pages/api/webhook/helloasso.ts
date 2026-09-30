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
    const email = payload?.data?.payer?.email;
    
    if (!email) {
      return new Response('No email found in payload, ignored', { status: 200 });
    }

    // 3. Initialiser Supabase et appeler la fonction sécurisée
    const supabase = getSupabaseServerClient(cookies);
    
    const { data, error } = await supabase.rpc('grant_adhesion_by_email', {
      payer_email: email.toLowerCase().trim(),
      secret_token: 'tc_webhook_secret_2026'
    });

    if (error) {
      console.error('Erreur lors de la mise à jour du rôle (RPC):', error);
      return new Response('Database error', { status: 500 });
    }

    if (data === false) {
      console.log(`Webhook HelloAsso : ${email} a payé, mais ne possède pas de compte sur le site.`);
    } else {
      console.log(`Webhook HelloAsso : Succès ! ${email} est maintenant adhérent pour 1 an.`);
    }

    // Il faut toujours répondre 200 OK à HelloAsso pour qu'ils arrêtent d'envoyer le webhook
    return new Response('Webhook processed successfully', { status: 200 });
  } catch (error) {
    console.error('Erreur serveur (Webhook HelloAsso):', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
