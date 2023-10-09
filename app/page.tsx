import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <header>
        <h1>chakkun1121</h1>
      </header>
      <main>
        <section className="works">
          <h2>制作物↓</h2>
          <ul>
            <li>
              <a href="/view-english">和訳表示サイト</a>
            </li>
            <li>
              <a href="https://quizexam.vercel.app/" target="_target">
                QuizExam - 一問一答形式のクイズで試験本番の練習をしよう!
              </a>
            </li>
            <li>
              <a href="/dataURL">ファイルをdataURLに変換</a>
            </li>
            <li>
              <a href="/blog">chakkun1121のブログ</a>
            </li>
            <li>
              <a href="/tools">
                webアプリ(上記以外の制作物はこのページにあります。)
              </a>
            </li>
            <li>
              <a href="https://forms.gle/kLKCQx5WzDCVVM4Y9" target="_blank">
                お問い合わせフォーム
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
