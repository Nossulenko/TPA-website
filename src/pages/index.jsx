import React from "react";
import Navbar from "../components/Navbar";
import ElevatingIdea from "../components/ElevatingIdea/index";
import WhatWeDo from "../components/WhatWeDo/index";
import HowWeOperate from "../components/HowWeOperate/index";
import Articles from "../components/Articles/index";
import LetsTalk from "../components/LetsTalk/index";
import { Roboto, Space_Grotesk } from "next/font/google";
import TextContext from "../TextContext";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const space_Grotesk = Space_Grotesk({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const fontClasses = [space_Grotesk.className, roboto.className];
  const myText = "The Product Architects";

  return (
    <TextContext.Provider value={myText}>
      <main className={space_Grotesk.className}>
        <Navbar fonts={fontClasses} />
        <ElevatingIdea />
        <WhatWeDo />
        <HowWeOperate />
        <Articles />
        <LetsTalk />
        <div className="text-red-500">index</div>
      </main>
    </TextContext.Provider>
  );
}
