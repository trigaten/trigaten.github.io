"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { podcasts } from "@/app";

export default function Talks() {
  const [selectedPodcast, setSelectedPodcast] = useState(podcasts[0]);
  const visitPodcast = (link: string) => {
    window.open(link, "_blank");
  };

  const TARGET_HEIGHT = 200;
  const ROW_GAP = 32; // matches gap-8

  const rows = useMemo(() => {
    if (podcasts.length <= 2) {
      return [podcasts];
    }

    const midpoint = Math.ceil(podcasts.length / 2);
    return [podcasts.slice(0, midpoint), podcasts.slice(midpoint)];
  }, []);

  const processedRows = useMemo(() => {
    return rows.map((row) => {
      const items = row.map((podcast) => {
        const originalHeight = (podcast.Image as any)?.height ?? TARGET_HEIGHT;
        const originalWidth = (podcast.Image as any)?.width ?? TARGET_HEIGHT;
        const width = Math.round((originalWidth / originalHeight) * TARGET_HEIGHT);
        return { podcast, width };
      });
      const totalWidth =
        items.reduce((sum, item) => sum + item.width, 0) + Math.max(items.length - 1, 0) * ROW_GAP;
      const maxRowWidth = 1100; // fallback for large screens
      const scaleFactor = totalWidth > maxRowWidth ? maxRowWidth / totalWidth : 1;
      const rowHeight = Math.round(TARGET_HEIGHT * scaleFactor);

      const scaledItems = items.map((item) => ({
        podcast: item.podcast,
        width: Math.round(item.width * scaleFactor),
      }));

      const scaledTotalWidth =
        scaledItems.reduce((sum, item) => sum + item.width, 0) +
        Math.max(scaledItems.length - 1, 0) * ROW_GAP;

      return { items: scaledItems, height: rowHeight, totalWidth: scaledTotalWidth };
    });
  }, [rows]);

  return (
    <div className="container mx-auto px-4 py-2">
      <h1 className="text-4xl font-bold mb-4 font-skModernBold text-black text-center">
        Talks & Podcasts
      </h1>
      <p className="text-base md:text-lg text-gray-600 font-skModernRegular text-center mb-10">
        I frequently speak at conferences and on popular tech podcasts about my research and work.
      </p>

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
      <div className="flex flex-col gap-12">
        {processedRows.map(({ items, height, totalWidth }, rowIndex) => (
          <div
            key={`podcast-row-${rowIndex}`}
            className="flex flex-nowrap gap-8 justify-center"
            style={{ width: totalWidth, maxWidth: "100%", margin: "0 auto" }}
          >
            {items.map(({ podcast, width }, index) => (
              <div
                key={`${podcast.title}-${index}`}
                className="cursor-pointer transform transition-transform hover:scale-105"
                style={{ width }}
                onClick={() => {
                  setSelectedPodcast(podcast);
                  visitPodcast(podcast.AudioLink);
                }}
              >
                <Image
                  src={podcast.Image}
                  alt={podcast.title}
                  height={height}
                  width={width}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 object-contain"
                  placeholder="blur"
                />
                <div className="mt-3" style={{ width }}>
                  <h4 className="text-sm font-semibold font-skModernBold text-center text-black">
                    {podcast.title}
                  </h4>
                  <p className="mt-1 text-xs text-gray-600 text-center">
                    {podcast.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
