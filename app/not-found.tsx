import Header from "@/components/elements/header";
import { Metadata } from "next";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="p-2 text-center">
        <h1 className="text-2xl">404 ページが見つかりません</h1>
        <Link href="/">ホームページへ戻る</Link>
      </main>
    </>
  );
}
export const metadata: Metadata = {
  title: "404",
  robots: {
    index: false,
  },
};
