"use client";

import { CldImage } from "next-cloudinary";

export default function LeftScroll() {
  return (
      <div className="no-scrollbar overflow-y-auto border border-green-500">
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
      </div>)
}
