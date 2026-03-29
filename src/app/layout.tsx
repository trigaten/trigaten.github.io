import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

const skModernBold = Montserrat({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sk-modern-bold",
});

const skModernRegular = Montserrat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sk-modern-regular",
});

const skModernLight = Montserrat({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-sk-modern-light",
});

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://sander-schulhoff.vercel.app"
    : "http://localhost:3000";

export const metadata: Metadata = {
  title:
    "Sander Schulhoff | Award-Winning AI Researcher, Entrepreneur & Botanist",
  description:
    "Im an award-winning AI researcher, entrepreneur, and part-time botanist. Author of the first guide on prompt engineering, organizer of the first GenAI red-teaming competition, and currently building a stealth startup.",
  keywords: [
    "Sander Schulhoff",
    "Natural Language Processing",
    "NLP",
    "LearnPrompting.com",
    "Computer Science",
    "University of Maryland",
    "CLIP",
    "Reinforcement Learning",
    "UI Creation",
    "Machine Learning",
  ],
  authors: [{ name: "Sander Schulhoff" }],
  openGraph: {
    title:
      "Sander Schulhoff | Award-Winning AI Researcher, Entrepreneur & Botanist",
    description:
      "Award-winning AI researcher, entrepreneur, and part-time botanist. Author of the first guide on prompt engineering, organizer of the first GenAI red-teaming competition, and currently building a stealth startup.",
    url: baseUrl,
    siteName: "Sander Schulhoff Portfolio",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sander Schulhoff | Award-Winning AI Researcher, Entrepreneur & Botanist",
    description:
      "Award-winning AI researcher, entrepreneur, and part-time botanist. Author of the first guide on prompt engineering, organizer of the first GenAI red-teaming competition, and currently building a stealth startup.",
    images: [`${baseUrl}/og-image.png`],
  },
  verification: {
    google: "google-site-verification-code",
    // yandex: 'yandex-verification-code',
    // bing: 'bing-verification-code',
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en bg-white">
      <head>
        <meta httpEquiv="refresh" content="0; url=https://sanderschulhoff.com" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(){
  var p = window.location.pathname;
  var dest = 'https://sanderschulhoff.com';
  if (p === '/projects-research' || p.startsWith('/projects-research/')) {
    dest = 'https://sanderschulhoff.com/research';
  }
  window.location.replace(dest);
})();`
        }} />
      </head>
      <body
        className={`${skModernBold.variable} ${skModernRegular.variable} ${skModernLight.variable} ${inter.className}`}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
