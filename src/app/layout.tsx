import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/global/theme-provider";
import { ContactButton } from "@/components/global/contact-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Om Raval is a Software Engineer",
    description: "I make software for people",
    icons: {
        icon:
            "https://ik.imagekit.io/omraval18/O%20m%20(3)_6tfP8VKB_h.svg?updatedAt=1718547796125",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body className={inter.className}>
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
