import { Metadata, Viewport } from "next";
import { WebSite, WithContext } from "schema-dts";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "chakkun1121",
    template: "%s | chakkun1121",
  },
  description: "個人で開発をしているchakkun1121のホームページです。 ",
  authors: {
    name: "chakkun1121",
    url: "https://chakkun1121.github.io/",
  },
  metadataBase: new URL("https://chakkun1121.github.io/"),
  alternates: { canonical: "/" },
  verification: {
    // cspell: disable-next-line
    google: "rfKiLBvqtBkqwBWnhRbMVxM5srANIl73OuriqZd24-A",
  },
};
export const viewport: Viewport = {
  themeColor: "#fefbe6",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "chakkun1121",
    url: "https://chakkun1121.github.io/",
  };
  return (
    <html lang="ja">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
