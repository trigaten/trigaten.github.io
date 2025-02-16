"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { podcasts } from "@/app";

export default function Podcasts() {
  const [selectedPodcast, setSelectedPodcast] = useState(podcasts[0]);
  const visitPodcast = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-2">
      <h1 className="text-4xl font-bold mb-8 font-skModernBold text-black text-center">
        Podcasts
      </h1>

      {/* <div className="bg-gray-100 rounded-lg p-6 mb-8 shadow-lg text-center">
        <div className="relative mx-auto w-32 h-32 sm:w-48 sm:h-48 overflow-hidden rounded-lg shadow-md">
          <Image
            src={selectedPodcast.Image}
            alt={selectedPodcast.title}
            fill
            sizes="100px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <h2 className="mt-4 text-2xl font-bold text-black">
          {selectedPodcast.title}
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          {selectedPodcast.description}
        </p>
        <Link href={selectedPodcast.AudioLink}>
          <h1 className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300">
            Listen Now
          </h1>
        </Link>
      </div> */}

      {/* Podcast List */}
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {podcasts.map((podcast, index) => (
            <div
              key={index}
              className="cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => {
                setSelectedPodcast(podcast);
                visitPodcast(podcast.AudioLink);
              }}
            >
              <div className="relative w-full aspect-square sm:w-32 sm:h-32 mx-auto overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={podcast.Image}
                  alt={podcast.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 128px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h4 className="mt-3 text-sm font-semibold font-skModernBold text-center text-black">
                {podcast.title}
              </h4>
              <p className="mt-1 text-xs text-gray-600 text-center px-2">
                {podcast.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
