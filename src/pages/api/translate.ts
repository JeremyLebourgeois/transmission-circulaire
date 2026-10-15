export const prerender = false;

import type { APIRoute } from 'astro';
import { getSupabaseServerClient } from '../../lib/supabase-server';
import { env } from 'cloudflare:workers';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    // 1. Vérification de l'authentification (seuls les membres connectés avec rôle peuvent traduire)
    const supabase = getSupabaseServerClient(cookies);
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (!user || authError) {
      return new Response(JSON.stringify({ error: "Non autorisé. Vous devez être connecté pour utiliser l'outil de traduction." }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Récupération de la clé API DeepL (Cloudflare Workers, process.env, import.meta.env, globalThis)
    let apiKey = '';
    try {
      if (typeof env !== 'undefined' && env) {
        apiKey = env.DEEPL_API_KEY || (env as any).deepl_api_key || '';
      }
    } catch (e) {}

    if (!apiKey) {
      apiKey = 
        (globalThis as any)?.DEEPL_API_KEY || 
        (globalThis as any)?.env?.DEEPL_API_KEY ||
        import.meta.env.DEEPL_API_KEY || 
        process.env.DEEPL_API_KEY || 
        '';
    }

    if (!apiKey || !apiKey.trim()) {
      return new Response(JSON.stringify({ 
        error: "Clé DeepL manquante : veuillez ajouter la variable DEEPL_API_KEY dans vos paramètres Cloudflare (Settings > Variables and Secrets), puis redéployer le projet." 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 3. Extraction du corps de la requête
    const body = await request.json();
    let textsToTranslate: string[] = [];

    if (Array.isArray(body.texts)) {
      textsToTranslate = body.texts;
    } else if (typeof body.text === 'string') {
      textsToTranslate = [body.text];
    } else {
      return new Response(JSON.stringify({ error: "Paramètre 'text' ou 'texts' manquant ou invalide." }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Ne pas envoyer de chaînes vides à DeepL
    const cleanTexts = textsToTranslate.map(t => (t ? t.trim() : ''));
    if (cleanTexts.every(t => t === '')) {
      return new Response(JSON.stringify({ translations: cleanTexts }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 4. Appel de l'API DeepL (détection auto Free vs Pro)
    const cleanKey = apiKey.trim();
    const isFreePlan = cleanKey.endsWith(':fx');
    const deeplEndpoint = isFreePlan 
      ? 'https://api-free.deepl.com/v2/translate' 
      : 'https://api.deepl.com/v2/translate';

    const deeplResponse = await fetch(deeplEndpoint, {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${cleanKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: cleanTexts,
        target_lang: body.target_lang || 'EN-US',
        source_lang: body.source_lang || 'FR'
      })
    });

    if (!deeplResponse.ok) {
      const errorText = await deeplResponse.text();
      return new Response(JSON.stringify({ 
        error: `Erreur DeepL (${deeplResponse.status}) : ${errorText}` 
      }), {
        status: deeplResponse.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await deeplResponse.json();
    const translations = (data.translations || []).map((item: any) => item.text);

    return new Response(JSON.stringify({ translations }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error("Erreur serveur API /api/translate:", error);
    return new Response(JSON.stringify({ error: `Erreur serveur interne : ${error?.message || error}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
