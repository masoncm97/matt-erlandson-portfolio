"use client";

import { CldImage } from "next-cloudinary";

export default function Home() {
  return (
    <main className="grid grid-cols-2 h-screen w-screen relative">
      <div className="absolute center-absolute">
        <h2 className="text-5xl text-blue-500 underline">matterlandson.com</h2>
      </div>
      <div className="no-scrollbar overflow-y-auto">
        <CldImage
          src={"qxebrqrmmky3jqorj53w"}
          loading="eager"
          width={3000}
          height={3000}
          alt={"sample"}
        />
        <CldImage
          src={"cld-sample-2"}
          loading="eager"
          width={1870}
          height={1250}
          alt={"sample"}
        />
      </div>
      <div className="no-scrollbar overflow-y-auto">
        <CldImage
          src={"cld-sample-3"}
          loading="eager"
          width={1870}
          height={1250}
          alt={"sample"}
        />
        <CldImage
          src={"cld-sample-5"}
          loading="eager"
          width={1870}
          height={1250}
          alt={"sample"}
        />
      </div>
    </main>
  );
}
