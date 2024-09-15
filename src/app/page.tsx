"use client";

import LeftScroll from "./left-scroll"; 
import RightScroll from "./right-scroll";
import Logo from "./logo";

export default function Home() {
  return (
    <main className="grid grid-cols-2 h-screen w-screen relative">
      <Logo/>
      <LeftScroll/>
      <RightScroll/>
    </main>
  );
}
