import Header from "@/components/elements/header";
import Info from "@/components/elements/info";
import Links from "@/components/elements/links";
import Works from "@/components/elements/works";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-2">
        <Info />
        <div className="mx-auto max-w-4xl justify-center gap-12 md:flex">
          <div className="flex-1">
            <Links />
          </div>
          <div className="flex-1">
            <Works />
          </div>
        </div>
      </main>
    </>
  );
}
