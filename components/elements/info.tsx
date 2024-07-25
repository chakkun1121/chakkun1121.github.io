import CopyButton from "./copyButton";

export default function Info() {
  return (
    <section className="mx-auto max-w-2xl space-y-12 p-4">
      <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/user-icon.png"
          alt="icon"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div className="flex">
          <p className="text-2xl">chakkun1121</p>
          <CopyButton />
        </div>
      </div>
      <p>個人で開発をしているchakkun1121のホームページです。</p>
    </section>
  );
}
