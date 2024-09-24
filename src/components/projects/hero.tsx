import React from "react";
import Image from "next/image";
import projectBg from "@/../public/projectBg.png";

export default function ProjectsHero() {
  return (
    <header className="relative w-full md:h-[380px] h-80 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={projectBg}
          alt="Project background"
          className="brightness-[.65]"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <h1 className="text-4xl font-skModernRegular text-white py-8 md:px-20 px-6">
          Projects & Research
        </h1>
      </div>
    </header>
  );
}
