import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kodenri | Enterprise AI & Software Development Solutions",
    template: "%s | Kodenri",
  },
  description: "Kodenri delivers world-class software development, custom AI integration, cloud infrastructure, mobile applications, and premium UI/UX design.",
  keywords: [
    "Software Development",
    "AI Integration",
    "Enterprise AI Solutions",
    "Web Development",
    "Mobile Apps",
    "Cloud & DevOps",
    "UI/UX Design",
    "Kodenri",
  ],
  authors: [{ name: "Kodenri Team" }],
  creator: "Kodenri",
  metadataBase: new URL("https://kodenri.com"),
  openGraph: {
    title: "Kodenri | Enterprise AI & Software Development Solutions",
    description: "Enterprise-grade custom AI, web, mobile, and cloud software engineering.",
    url: "https://kodenri.com",
    siteName: "Kodenri",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kodenri | Enterprise AI & Software Development Solutions",
    description: "Enterprise-grade custom AI, web, mobile, and cloud software engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground antialiased selection:bg-primary/35 selection:text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col overflow-hidden">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
