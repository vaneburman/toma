import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacible.vanesaburman.com.ar"),
  title: "Jev en simple | Guía visual y técnica de HACIBLE",
  description: "Una guía visual y técnica para entender Jev, diseñar decisiones tipadas y evaluar casos de uso reales.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jev en simple | Guía visual y técnica",
    description: "24 páginas para pasar de la novedad al criterio técnico.",
    type: "website",
    locale: "es_AR",
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
