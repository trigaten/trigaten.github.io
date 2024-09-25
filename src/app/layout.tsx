import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });
const skModernBold = localFont({
  src: "../../public/fonts/hinted-Sk-Modernist-Bold.ttf",
  variable: "--font-sk-modern-bold",
});

const skModernRegular = localFont({
  src: "../../public/fonts/hinted-Sk-Modernist-Regular.ttf",
  variable: "--font-sk-modern-regular",
});

const skModernLight = localFont({
  src: "../../public/fonts/hinted-Sk-Modernist-Light.ttf",
  variable: "--font-sk-modern-light",
});

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://sander-schulhoff.vercel.app"
    : "http://localhost:3000";

export const metadata: Metadata = {
  title:
    "Sander Schulhoff | NLP Researcher, LearnPrompting.com Founder & CS Student at UMD",
  description:
    "Sander Schulhoff is a Computer Science student at the University of Maryland, specializing in Natural Language Processing research at CLIP. He is also the founder of LearnPrompting.com. Explore his work in NLP, reinforcement learning, and UI creation.",
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
      "Sander Schulhoff | NLP Researcher, LearnPrompting.com Founder & CS Student",
    description:
      "Computer Science student at UMD, NLP researcher, and founder of LearnPrompting.com. Explore Sander's work in NLP, reinforcement learning, and UI creation.",
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
      "Sander Schulhoff | NLP Researcher, LearnPrompting.com Founder & CS Student",
    description:
      "Computer Science student at UMD, NLP researcher, and founder of LearnPrompting.com. Explore Sander's work in NLP, reinforcement learning, and UI creation.",
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
