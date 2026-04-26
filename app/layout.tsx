import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import SmoothScrollProvider from "@/components/effects/SmoothScrollProvider";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: "Hsu Yati Zaw (Lia) | Full Stack Developer Portfolio",
  description:
    "Modern dark sci-fi portfolio showcasing projects, skills, and system engineering work.",
  keywords: [
    "developer portfolio",
    "full stack developer",
    "system engineering",
    "dark sci-fi design",
    "Graphic designer",
    "UI/UX designer",
    "Hsu Yati Zaw",
    "Lia",
  ],
  openGraph: {
    title: "Hsu Yati Zaw(Lia)",
    description: "Dark sci-fi developer portfolio",
    siteName: "Hsu Yati Zaw Portfolio",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} ${display.variable}`}
    >
      <body className="min-h-screen text-[#E6F1FF] antialiased font-sans overflow-x-hidden">
        <SmoothScrollProvider>
          <main className="w-full overflow-x-hidden">{children}</main>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#020B14",
                color: "#00E6FF",
                border: "1px solid #00E6FF",
                boxShadow: "0 0 12px #00E6FF",
                fontFamily: "monospace",
              },
              success: {
                iconTheme: {
                  primary: "#00E6FF",
                  secondary: "#020B14",
                },
              },
              error: {
                iconTheme: {
                  primary: "#ff2bd6",
                  secondary: "#020B14",
                },
              },
            }}
          />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
