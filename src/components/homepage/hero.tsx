import React from "react";
import Image from "next/image";
import sanderGif from "@/../public/sanderGif.gif";

export default function Hero() {
  return (
    <div className="col-span-1 md:col-span-2 flex items-center justify-center md:p-4 py-4 px-8 mt-12 md:mt-20">
      <div className="flex flex-col md:flex-row w-full max-w-7xl items-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0 h-fit">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 font-skModernBold text-black">
            Hi, I'm Sander Schulhoff. I am the CEO of LearnPrompting.org, 
            the first guide on Prompt Engineering.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-skModernRegular">
            I also do research in Deep RL and NLP, most recently publishing 
            massive scale studies in the fields 
            of <a href="https://trigaten.github.io/Prompt_Survey_Site/">prompting</a> and <a href="https://paper.hackaprompt.com">prompt security</a>.
            I have worked variously on the boardgame Diplomacy, Deep RL in Minecraft, Event Camera Video Classification, 
            Plant Identification, Wetland Mitigation Banking, and Prompt Engineering/Hacking.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <Image
              src={sanderGif}
              alt="Hero image"
              width={500}
              height={300}
              className="rounded-lg shadow-md w-full h-auto"
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
