import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const url: string = "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Streamify - Collaborative Music Streaming",
    template: "%s | Streamify",
  },
  description:
    "Transform music into a shared social experience with Streamify. Create virtual rooms, listen together in real-time with friends, and enjoy synchronized playback across all devices. Chat, react, and connect through music.",
  keywords: [
    "music streaming",
    "collaborative listening",
    "synchronized playback",
    "virtual music rooms",
    "social music",
    "group listening",
    "real-time music",
    "music chat",
    "shared playlists",
    "music together",
    "streaming platform",
    "music social network",
  ],
  authors: [{ name: "Streamify Team" }],
  creator: "Streamify",
  publisher: "Streamify",
  applicationName: "Streamify",
  category: "Music & Entertainment",
  classification: "Music Streaming Platform",

  // Open Graph metadata
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: url,
  //   siteName: "Streamify",
  //   title: "Streamify - Listen Together, Stay Connected",
  //   description:
  //     "Create virtual music rooms and enjoy synchronized listening with friends worldwide. Real-time chat, reactions, and seamless playbook control.",
  //   images: [
  //     {
  //       url: "/web-app-manifest-512x512.png",
  //       width: 512,
  //       height: 512,
  //       alt: "Streamify - Collaborative Music Streaming Platform",
  //     },
  //     {
  //       url: "/web-app-manifest-192x192.png",
  //       width: 192,
  //       height: 192,
  //       alt: "Streamify App Icon",
  //     },
  //   ],
  // },

  // Twitter Card metadata
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@streamify",
  //   creator: "@streamify",
  //   title: "Streamify - Collaborative Music Streaming",
  //   description:
  //     "Listen together in real-time. Create rooms, invite friends, and enjoy synchronized music experiences.",
  //   images: ["/web-app-manifest-512x512.png"],
  // },

  // App-specific metadata
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Streamify",
    startupImage: [
      {
        url: "/web-app-manifest-192x192.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/web-app-manifest-512x512.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
  },

  /*
  // Verification and security
  verification: {
    google: "google-site-verification-code", 
  },
*/
  // Robots directive
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

  // Additional metadata
  alternates: {
    canonical: url,
  },

  other: {
    "mobile-web-app-capable": "yes",
    "theme-color": "#000000",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Streamify" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/web-app-manifest-192x192.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/web-app-manifest-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/web-app-manifest-512x512.png"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
