import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Eric Dominic Momo | Full-Stack Developer & Design Associate",
  description: "Personal Portfolio of Eric Dominic Momo — IT Graduate, Full-Stack Web Developer, and Design Associate based in Cebu City, Philippines.",
  keywords: ["Eric Dominic Momo", "Web Developer", "Design Associate", "Cebu City", "Node.js", "React", "PostgreSQL", "MentorLog", "ChronoNav"],
  authors: [{ name: "Eric Dominic Momo" }],
  openGraph: {
    title: "Eric Dominic Momo | Full-Stack Developer & Design Associate",
    description: "Personal Portfolio of Eric Dominic Momo — IT Graduate, Full-Stack Web Developer, and Design Associate based in Cebu City, Philippines.",
    url: "https://github.com/EricMomo2957",
    siteName: "Eric Dominic Momo Portfolio",
    images: [
      {
        url: "/images/daddy_manhwa.jpg",
        width: 800,
        height: 800,
        alt: "Eric Dominic Momo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Dominic Momo | Full-Stack Developer & Design Associate",
    description: "Personal Portfolio of Eric Dominic Momo — IT Graduate, Full-Stack Web Developer, and Design Associate based in Cebu City, Philippines.",
    images: ["/images/daddy_manhwa.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}