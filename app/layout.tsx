import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "./components/Analytics";
import StructuredData from "./components/StructuredData";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhargava Kishore Tsavatapalli — Node.js Backend Developer",
  description:
    "Portfolio of Bhargava Kishore Tsavatapalli, a Node.js backend developer based in Hyderabad, building scalable REST APIs, event-driven microservices, and cloud-native systems.",
  metadataBase: new URL("https://bhargavnaidu-af38d.web.app"),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Bhargava Kishore Tsavatapalli" }],
  creator: "Bhargava Kishore Tsavatapalli",
  keywords: [
    "Bhargava Kishore Tsavatapalli",
    "Node.js Backend Developer",
    "Backend Developer Hyderabad",
    "TypeScript",
    "REST APIs",
    "Microservices",
    "AWS",
    "RabbitMQ",
    "PostgreSQL",
    "Portfolio",
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Bhargava Kishore Tsavatapalli — Node.js Backend Developer",
    description:
      "Selected work, experience, and engineering practice of a Node.js backend developer based in Hyderabad.",
    type: "website",
    url: "/",
    siteName: "Bhargava Kishore Tsavatapalli",
    locale: "en_IN",
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhargava Kishore Tsavatapalli — Node.js Backend Developer",
    description:
      "Selected work, experience, and engineering practice of a Node.js backend developer based in Hyderabad.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSans.variable} ${jetbrains.variable}`}
    >
      <head>
        <StructuredData />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
