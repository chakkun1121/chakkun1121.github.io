import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 mb-4 flex items-center gap-4 bg-background bg-opacity-85 p-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/user-icon.png"
        alt="icon"
        width={50}
        height={50}
        className="aspect-square h-auto rounded-full"
      />
      <Link href="/" prefetch={false}>
        <h1 className="text-3xl">chakkun1121</h1>
      </Link>
    </header>
  );
}
