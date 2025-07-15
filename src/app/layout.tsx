import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/global/theme-provider";
import { ContactButton } from "@/components/global/contact-button";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Om Raval is a Software Engineer",
  description: "I make software for people",
  icons: {
    icon: "https://ik.imagekit.io/omraval18/O%20m%20(3)_6tfP8VKB_h.svg?updatedAt=1718547796125",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bricolage.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ContactButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
