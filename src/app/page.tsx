import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-2 h-screen w-screen relative">
      <div className="absolute center-absolute">
        <h2 className="text-5xl text-white">matterlandson.com</h2>
      </div>
      <div className="no-scrollbar overflow-y-auto">
        <Image
          src="/img_1.jpg"
          width={4032}
          height={3024}
          alt="Picture of the author"
        />
        <Image
          src="/img_2.jpg"
          width={4032}
          height={3024}
          alt="Picture of the author"
        />
        <Image
          src="/img_5.jpg"
          width={4032}
          height={3024}
          alt="Picture of the author"
        />
      </div>
      <div className="no-scrollbar overflow-y-auto">
        <Image
          src="/img_3.jpg"
          width={3024}
          height={4032}
          alt="Picture of the author"
        />
        <Image
          src="/img_4.jpg"
          width={1125}
          height={1407}
          alt="Picture of the author"
        />
      </div>
    </main>
  );
}
