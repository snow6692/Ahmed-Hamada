import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "react-hot-toast";

// Load the Inter font
const inter = Inter({ subsets: ["latin"] });

// Metadata type for Next.js
export const metadata = {
  title: "Ahmed Hamada - Fullstack Developer Portfolio",
  description:
    "Explore the portfolio of Ahmed Hamada, a passionate fullstack developer specializing in Next.js, TypeScript, and AI integrations.",
  keywords:
    "Ahmed Hamada, fullstack developer, Next.js, TypeScript, AI integration, portfolio, web development",
  authors: [{ name: "Ahmed Hamada", url: "https://yourwebsite.com" }],
  creator: "Ahmed Hamada",
  themeColor: "#000000", // Matches dark theme
  openGraph: {
    title: "Ahmed Hamada - Fullstack Developer",
    description:
      "Check out my portfolio showcasing modern web applications and AI-driven projects.",
    url: "https://yourwebsite.com",
    siteName: "Ahmed Hamada Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Hamada Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.creator} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width.toString()}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height.toString()}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ahmed Hamada",
              url: "https://yourwebsite.com",
              jobTitle: "Fullstack Developer",
              description:
                "A passionate fullstack developer specializing in Next.js, TypeScript, and AI integrations.",
              sameAs: [
                "https://github.com/snow6692",
                "https://www.linkedin.com/in/ahmed-hamada-a83309239/",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
