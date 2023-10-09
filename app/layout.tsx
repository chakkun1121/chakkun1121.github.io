import { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "chakkun1121",
    template: "%s | chakkun1121",
  },
  description: "個人で開発をしているchakkun1121のホームページです。 ",
  metadataBase: new URL("https://chakkun1121.github.io/"),
  alternates: { canonical: "/" },
  verification: {
    google: [
      "svqjA4XgnRTswxTionwJmwRATDC7VSywlA7QPYrfUL4",
      "rfKiLBvqtBkqwBWnhRbMVxM5srANIl73OuriqZd24-A",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="p-2">{children}</body>
    </html>
  );
}
