import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import JsonLd from "../components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://nethmihapuarachchi.com"),
  title: {
    default: "Nethmi Hapuarachchi | Software Engineer & Developer",
    template: "%s | Nethmi Hapuarachchi",
  },
  description:
    "Nethmi Hapuarachchi is a software engineer and developer passionate about building beautiful, functional web and mobile applications. Explore her portfolio, projects, and experience.",
  keywords: [
    "Nethmi Hapuarachchi",
    "software engineer",
    "web developer",
    "full stack developer",
    "portfolio",
    "React",
    "Next.js",
    "Sri Lanka",
  ],
  authors: [{ name: "Nethmi Hapuarachchi", url: "https://nethmihapuarachchi.com" }],
  creator: "Nethmi Hapuarachchi",
  alternates: {
    canonical: "https://nethmihapuarachchi.com",
  },
  openGraph: {
    type: "website",
    url: "https://nethmihapuarachchi.com",
    title: "Nethmi Hapuarachchi | Software Engineer & Developer",
    description:
      "Explore the portfolio of Nethmi Hapuarachchi — software engineer specialising in modern web and mobile development.",
    siteName: "Nethmi Hapuarachchi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nethmi Hapuarachchi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nethmi Hapuarachchi | Software Engineer & Developer",
    description:
      "Explore the portfolio of Nethmi Hapuarachchi — software engineer specialising in modern web and mobile development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "zVPGsPzAfZRO2MnEk-lnQzpBGtsuhCpw9ZusZ3sIFwU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
