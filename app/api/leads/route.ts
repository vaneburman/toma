import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DOWNLOAD_URL = "/downloads/Guia_visual_y_tecnica_de_Jev_Vanesa_Burman.pdf";
const SUPABASE_URL = process.env.SUPABASE_URL ?? "https://fizuadlwxcmqsyolqyay.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  process.env.SUPABASE_PUBLISHABLE_KEY ?? "sb_publishable_KpJJdy1KaFKs92bKTMtL-Q_BkwMTM-l";

function optionalText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) || null : null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = typeof body.name === "string" ? body.name.trim().replace(/\s+/g, " ") : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const consent = body.consent === true;
    const source = typeof body.source === "string" ? body.source.trim().slice(0, 60) : "jev-guide";
    const website = typeof body.website === "string" ? body.website.trim() : "";

    if (website) return NextResponse.json({ downloadUrl: DOWNLOAD_URL });
    if (name.length < 2 || name.length > 80) {
      return NextResponse.json({ error: "Ingresá un nombre válido." }, { status: 400 });
    }
    if (email.length > 160 || !EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: "Ingresá un email válido." }, { status: 400 });
    }
    if (!consent) {
      return NextResponse.json({ error: "Necesitamos tu consentimiento para enviarte la guía." }, { status: 400 });
    }

    const supabaseResponse = await fetch(`${SUPABASE_URL}/rest/v1/rpc/capture_lead`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        p_name: name,
        p_email: email,
        p_consent: consent,
        p_source: source,
        p_utm_source: optionalText(body.utmSource, 120),
        p_utm_medium: optionalText(body.utmMedium, 120),
        p_utm_campaign: optionalText(body.utmCampaign, 160),
        p_utm_content: optionalText(body.utmContent, 160),
        p_utm_term: optionalText(body.utmTerm, 160),
        p_referrer: optionalText(body.referrer, 300),
      }),
      cache: "no-store",
    });

    if (!supabaseResponse.ok) {
      console.error("Supabase lead capture failed", supabaseResponse.status, await supabaseResponse.text());
      return NextResponse.json({ error: "No pudimos guardar tus datos. Intentá otra vez." }, { status: 502 });
    }

    return NextResponse.json({ downloadUrl: DOWNLOAD_URL });
  } catch (error) {
    console.error("Lead capture failed", error);
    return NextResponse.json({ error: "No pudimos guardar tus datos. Intentá otra vez." }, { status: 500 });
  }
}
