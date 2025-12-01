import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL ?? process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"),
  title: "Timo Kaiser - Ernährungs- und Gesundheitscoach",
  description: "Ganzheitliches Ernährungscoaching für Verdauung, Unverträglichkeiten und natürliche Gesundheit. Zurück zum Ursprung mit echten Lebensmitteln.",
  keywords: "Ernährungsberatung, Gesundheitscoach, Verdauungsprobleme, Unverträglichkeiten, natürliche Ernährung, ganzheitlich, Mönchengladbach",
  authors: [{ name: "Timo Kaiser" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Timo Kaiser - Ernährungs- und Gesundheitscoach",
    description: "Ganzheitliches Ernährungscoaching für Verdauung, Unverträglichkeiten und natürliche Gesundheit. Zurück zum Ursprung mit echten Lebensmitteln.",
    type: "website",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
