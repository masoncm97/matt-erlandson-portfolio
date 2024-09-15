"use client";

import { CldImage } from "next-cloudinary";

export default function RightScroll() {
  return (
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
  </div>)
}
