"use client";

import React from "react";
import Image from "next/image";
import sanderGif from "@/../public/sanderGif.gif";
import Link from "next/link";

const researchAnchors = [
  { sup: "1", href: "#research-hackaprompt", label: "HackAPrompt" },
  { sup: "2", href: "#research-gymnasium", label: "Gymnasium" },
  { sup: "3", href: "#research-minerl", label: "MineRL BEDD/BASALT" },
];

export default function Hero() {
  return (
    <div className="col-span-1 md:col-span-2 flex items-center justify-center md:p-4 py-4 px-8 mt-2 md:mt-4">
      <div className="flex flex-col md:flex-row w-full max-w-7xl items-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0 h-fit">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-skModernBold text-black">
            Hi, I'm Sander Schulhoff — 
          </h1>
          <h2 className="text-xl md:text-2xl font-skModernRegular text-black mb-4">
            I'm an award-winning AI researcher
            <sup>
              {researchAnchors.map(({ sup, href, label }, idx) => (
                <React.Fragment key={sup}>
                  <Link
                    href={href}
                    className="text-emerald-600 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-sm"
                    aria-label={`Jump to ${label}`}
                  >
                    {sup}
                  </Link>
                </React.Fragment>
              ))}
            </sup>
            , entrepreneur, and part-time botanist 🌱
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-skModernRegular mb-4">
          👉 I wrote the first guide on prompt engineering (LearnPrompting.org) 📚, ran the first ever GenAI red-teaming competition (HackAPrompt) 🤖, and I'm currently building a stealth startup 🚀.
          </p>
          <p className="text-lg md:text-xl text-gray-600 font-skModernRegular mb-4">
          👉 I’m based in <s>Maryland</s> <s>San Francisco</s> <s>Berkeley</s> London, but will move to San Francisco permanently soon.
            </p>
            <p className="text-lg md:text-xl text-gray-600 font-skModernRegular">
          👉 If you would like to chat about research, plant & mushroom foraging, or anything else, please reach out.
            </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="p-4">
            <Image
              src={sanderGif}
              alt="Hero image"
              width={500}
              height={300}
              className="w-full h-auto"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <p className="font-mono mt-4 text-black text-lg">
              ENMLP2023 Best Theme Paper Presentation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
