import React from "react";
import Image from "next/image";
import { blogPosts } from "@/app";
import Link from "next/link";

export default function BlogsHero() {
  return (
    <Link href={`/post/${blogPosts[0].id}`} className="block">
      <header className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden group">
        <div className="absolute inset-0">
          <Image
            src={blogPosts[0].image}
            alt="Project background"
            className="brightness-[.65] group-hover:brightness-75 transition-all duration-300"
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
          <div className="flex flex-col py-4 sm:py-6 md:py-8 gap-y-2 sm:gap-y-3 md:gap-y-4 px-4 sm:px-6 md:px-20 w-full">
            <div className="flex w-full md:w-[55%]">
              <span className="bg-[#4545a3] rounded-full px-3 py-1 text-xs sm:text-sm text-white font-skModernRegular">
                {blogPosts[0].tag}
              </span>
            </div>
            <div className="w-full md:w-[55%]">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-skModernBold text-white leading-tight">
                {blogPosts[0].title}
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-y-2 sm:gap-y-0">
              <p className="text-sm sm:text-base md:text-xl font-skModernRegular text-white w-full md:w-[55%] text-left">
                {blogPosts[0].blurbs}
              </p>
              <p className="text-sm sm:text-base md:text-xl font-skModernLight text-white w-full md:w-[55%] text-left sm:text-right">
                {blogPosts[0].date}
              </p>
            </div>
            <span className="text-emerald-400 group-hover:text-emerald-200 transition-colors duration-300 text-md font-skModernRegular">
              Read More
            </span>
          </div>
        </div>
      </header>
    </Link>
  );
}
