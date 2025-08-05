import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const works = [
  {
    name: "VocabPhrase",
    description: "英文、英単語専用の単語帳アプリ",
    url: "https://vocab-phrase.vercel.app",
    image: "https://vocab-phrase.vercel.app/ogp.png",
  },
  {
    name: "WebPDF Studio",
    description: "webブラウザでPDFを編集する無料アプリ",
    url: "/WebPDF-Studio/",
  },
  {
    name: "ファイルをdataURLに変換",
    description: "",
    url: "/dataURL/",
  },
  {
    name: "chakkun1121のブログ",
    description: "",
    url: "/blog/",
  },
  {
    name:"chakkun1121 オンライン美術館",
    description:"",
    url:"/online-museum/"
  },
  {
    name:"FoodTruck Financier",
    description:"このアプリは屋台の総合会計アプリです。レジ打ち、注文管理、在庫管理、売上管理などができます。",
    url:"https://github.com/chakkun1121/food-truck-financier"
  }
  {
    name: "webアプリ",
    description: "上記以外の制作物はこのページにあります。",
    url: "/tools/",
  },
];
export default function Works() {
  return (
    <section className="space-y-4 py-8">
      <h2 className="text-2xl">制作物</h2>
      <div className="space-y-2">
        {works.map((work) => (
          <Link href={work.url} key={work.url} className="block">
            <Card>
              <CardHeader>
                <CardTitle>{work.name}</CardTitle>
                <CardDescription>{work.description}</CardDescription>
              </CardHeader>
              {work.image ? (
                <CardContent>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={work.image}
                    alt={work.name}
                    className="w-full rounded"
                  />
                </CardContent>
              ) : null}
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
