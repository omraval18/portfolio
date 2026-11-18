import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, profile } from "@/lib/resume";
import { ThemeProvider } from "@/components/global/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const title = "Om Raval — AI & Backend Engineer";
const description =
  "I build AI agents and the systems underneath them. Software engineer in Ahmedabad working across AI, backend and infrastructure. Open to remote roles.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s · Om Raval" },
  description,
  applicationName: "Om Raval",
  authors: [{ name: "Om Raval", url: SITE_URL }],
  creator: "Om Raval",
  keywords: ["Om Raval", "AI engineer", "backend engineer", "AI agents", "RAG", "Rust", "TypeScript", "Ahmedabad", "software engineer"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "profile", url: SITE_URL, siteName: "Om Raval", title, description, firstName: "Om", lastName: "Raval" },
  twitter: { card: "summary", title, description },
  icons: {
    icon: "https://ik.imagekit.io/omraval18/O%20m%20(3)_6tfP8VKB_h.svg?updatedAt=1718547796125",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: SITE_URL,
  jobTitle: profile.role,
  description,
  email: "mailto:omrawal111@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressCountry: "IN" },
  sameAs: profile.socials.filter((s) => s.href.startsWith("https")).map((s) => s.href),
  knowsAbout: ["AI agents", "Retrieval-augmented generation", "Distributed systems", "Backend engineering", "Rust", "TypeScript", "Payments infrastructure"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${bricolage.variable} ${mono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
