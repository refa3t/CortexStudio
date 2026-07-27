import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cortex-studio.netlify.app"),
  title: "Cortex Studio — Software for the messy middle",
  description: "Independent Egyptian software studio designing operational products for restaurants, retail and industry.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Cortex Studio — Software for the messy middle",
    description: "Operational software, designed around the real work.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Cortex Studio — Where intelligence meets operations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortex Studio — Software for the messy middle",
    description: "Operational software, designed around the real work.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
