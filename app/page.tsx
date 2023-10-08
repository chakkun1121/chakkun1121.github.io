import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="google-site-verification"
        content="svqjA4XgnRTswxTionwJmwRATDC7VSywlA7QPYrfUL4"
      />
      <meta
        name="google-site-verification"
        content="rfKiLBvqtBkqwBWnhRbMVxM5srANIl73OuriqZd24-A"
      />
      <meta
        name="description"
        content="個人で開発をしているchakkun1121のホームページです。 "
      />
      <link rel="canonical" href="https://chakkun1121.github.io/" />
      <title>chakkun1121</title>
      {/* Google tag (gtag.js) */}
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
export const metadata: Metadata = {
  
}