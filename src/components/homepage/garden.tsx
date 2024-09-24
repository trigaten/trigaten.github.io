"use client";
import React, { useState } from "react";
import Image from "next/image";
import { gardenImagesHome } from "@/app";

interface GardenImage {
  default: string;
  src: string;
  height: number;
  width: number;
  blurDataURL: string;
  blurWidth: number;
  blurHeight: number;
}

type GardenImageData = [GardenImage, string, string, string];

interface ImageCardProps {
  image: GardenImageData;
  index: number;
  className: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, index, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className} group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image[0]}
        alt={image[1]}
        className="transition-transform duration-300 ease-in-out group-hover:scale-110"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          maxWidth: "100%",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex flex-col justify-center items-center text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        <h3 className="text-xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          {image[1]}
        </h3>
        <p className="text-sm italic mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-in-out delay-75">
          {image[2]}
        </p>
        <p className="text-sm text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-in-out delay-150">
          {image[3]}
        </p>
      </div>
    </div>
  );
};

export default function Garden({ images }: any) {
  return (
    <div className="flex items-center justify-center w-full md:p-4 py-4 px-8 ">
      <div className="flex flex-col w-full max-w-7xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 font-skModernBold text-black">
          The Garden 🪴
        </h1>
        {/* <p className="text-md md:text-xl text-black mb-6 font-skModernRegular leading-relaxed">
          Dive into Sander's plant pictures! 🌿✨ These are living testaments to
          Sander's passion for plant research and his deep-rooted love for
          botany. Each leaf, petal, and stem tells a story of curiosity,
          discovery, and the intricate dance between science and nature.
        </p> */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-100 p-6 rounded-xl mb-8 shadow-lg border border-green-200">
          <p className="text-lg md:text-xl text-emerald-800 font-skModernRegular leading-relaxed">
            Here are a few pictures from plants I've foraged, grown, or found. I do impromptu botanical research in my free time 🌿✨ 
            {/* These are living testaments
            to Sander's passion for plant research and his deep-rooted love for
            botany. Each leaf, petal, and stem tells a story of curiosity,
            discovery, and the intricate dance between science and nature. */}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ImageCard
            image={images[0] as GardenImageData}
            index={0}
            className="col-span-2 md:col-span-2 h-96"
          />
          <ImageCard
            image={images[1] as GardenImageData}
            index={1}
            className="col-span-1 md:col-span-1 h-96"
          />
          <ImageCard
            image={images[2] as GardenImageData}
            index={2}
            className="col-span-1 md:col-span-1 h-96"
          />
          <ImageCard
            image={images[3] as GardenImageData}
            index={3}
            className="col-span-1 md:col-span-1 h-64"
          />
          <ImageCard
            image={images[4] as GardenImageData}
            index={4}
            className="col-span-1 md:col-span-1 h-64"
          />
          <ImageCard
            image={images[5] as GardenImageData}
            index={5}
            className="col-span-2 md:col-span-2 h-64"
          />
          <ImageCard
            image={images[6] as GardenImageData}
            index={6}
            className="col-span-2 md:col-span-2 h-80"
          />
          <ImageCard
            image={images[7] as GardenImageData}
            index={7}
            className="col-span-1 md:col-span-1 h-80"
          />
          <ImageCard
            image={images[8] as GardenImageData}
            index={8}
            className="col-span-1 md:col-span-1 h-80"
          />
        </div>
      </div>
    </div>
  );
}
