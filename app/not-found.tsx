import { Metadata } from "next";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1>404 ページが見つかりません</h1>
      <Link href="/">ホームページへ戻る</Link>
    </div>
  );
}
export const metadata: Metadata = {
  title: "404",
};
