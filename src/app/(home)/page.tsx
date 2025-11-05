"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Hero from "@/components/homepage/hero";
import LearnPrompting from "@/components/homepage/lp";
import HackAPrompt from "@/components/homepage/hackaprompt";
import Garden from "@/components/homepage/garden";
import Talks from "@/components/homepage/podcasts";
import projectsResearch, { gardenImagesHome } from "..";

const Section = ({ children }: { children: any }) => (
  <section className="mt-32 first:mt-0">{children}</section>
);

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{ src: StaticImageData; alt: string } | null>(
    null,
  );

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedImage]);

  const openImage = (image: StaticImageData, alt: string) => {
    setSelectedImage({ src: image, alt });
  };

  const closeImage = () => setSelectedImage(null);

  return (
    <div className="container mx-auto px-4">
      <Section>
        <Hero />
      </Section>
      <section
        className="mt-16 w-screen"
        style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}
      >
        <div className="px-2 md:px-8">
          <h2 className="text-3xl md:text-4xl font-skModernBold text-center mb-12">Recent Research</h2>
          {(() => {
            const projectMap = new Map(projectsResearch.map((proj: any) => [proj.title, proj]));
            const featuredTitles = [
              "HackAPrompt",
              "The Prompt Report",
              "Gymnasium",
              "The Attacker Moves Second",
              "MineRL BEDD/BASALT",
            ];

            const featuredProjects = featuredTitles
              .map((title) => projectMap.get(title))
              .filter((proj): proj is (typeof projectsResearch)[number] => Boolean(proj));

            const fallbackProjects = projectsResearch.filter((proj: any) => proj.research);

            const projectsToDisplay =
              featuredProjects.length > 0 ? featuredProjects : fallbackProjects;

            const descriptionBlock = (
              <div
                className="flex flex-col items-start p-6 bg-gray-50 shadow-md rounded-lg dark:bg-gray-800 col-span-1"
                key="bio"
              >
                <p className="text-md md:text-lg text-gray-700 dark:text-gray-300 font-skModernRegular">
                  My background is in <strong>natural language processing</strong> and <strong>deep reinforcement learning</strong>. I got started in AI research with the board game <em>Diplomacy</em>, training bots to deceive each other and human players using natural language.
                  <br />
                  My current research centers on adversarial robustness and prompt engineering.
                  <br />I have also worked on deep RL in Minecraft, event cameras, and quite separately botany &amp; wetland mitigation banking.
                  <br />
                  I have performed research in collaboration with all major AI companies, and published at the most prestigious AI conferences in the world, including <strong>EMNLP</strong> (Empirical Methods in Natural Language Processing), <strong>NeurIPS</strong> (Neural Information Processing Systems), <strong>ICLR</strong> (International Conference on Learning Representations), and <strong>ICML</strong> (International Conference on Machine Learning).
                  <br />
                  If you would like to see more of my research, check out my
                  <Link
                    href="https://scholar.google.com/citations?user=6poCJVkAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-emerald-700 hover:text-emerald-500"
                  >
                    Google Scholar profile
                  </Link>
                  .
                </p>
              </div>
            );

            const buildCard = (proj: any, key: string) => (
              <div
                key={key}
                id={proj.anchor ? String(proj.anchor) : undefined}
                className="flex h-full flex-col bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 scroll-mt-32"
              >
                <h3 className="text-xl md:text-2xl font-skModernBold text-black dark:text-white mb-4">
                  {proj.title}
                </h3>
                {proj.image && (
                  <div className="w-full h-auto mb-4">
                    <button
                      type="button"
                      onClick={() => openImage(proj.image, proj.title)}
                      className="group w-full focus:outline-none"
                      aria-label={`Expand ${proj.title} image`}
                    >
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        className="rounded-md w-full h-auto transition-transform duration-300 group-hover:scale-[1.02] cursor-zoom-in"
                        width={400}
                        height={250}
                      />
                    </button>
                  </div>
                )}
                <div
                  className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-skModernRegular mb-4"
                  dangerouslySetInnerHTML={{ __html: proj.description }}
                />
                <div className="mt-auto flex flex-col gap-4">
                  {(Array.isArray(proj.awards) && proj.awards.length > 0) || proj.award ? (
                    <div className="flex flex-col items-start gap-1">
                      {Array.isArray(proj.awards) &&
                        proj.awards.map((award: any, idx: number) => {
                          const label = award?.label || award;
                          const tooltip = award?.tooltip;
                          const content = (
                            <span
                              className={`inline-flex items-center gap-1 ${
                                tooltip ? "relative group" : ""
                              }`}
                            >
                              <span>{label}</span>
                              {tooltip && (
                                <>
                                  <span className="text-sm font-semibold text-gray-400">+</span>
                                  <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 translate-y-1 rounded-md bg-gray-900 px-3 py-2 text-xs text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                                    {tooltip}
                                  </span>
                                </>
                              )}
                            </span>
                          );

                          return award?.href ? (
                            <Link
                              key={`${proj.title}-award-${idx}`}
                              href={award.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-base text-gray-600 font-skModernRegular hover:text-blue-600 transition-colors"
                            >
                              {content}
                            </Link>
                          ) : (
                            <span
                              key={`${proj.title}-award-${idx}`}
                              className="text-base text-gray-600 font-skModernRegular"
                            >
                              {content}
                            </span>
                          );
                        })}
                      {proj.award && (
                        <span className="text-base text-gray-600 font-skModernRegular">
                          {proj.award}
                        </span>
                      )}
                    </div>
                  ) : null}
                  {Array.isArray(proj.logos) && proj.logos.length > 0 && (
                    <div className="flex flex-wrap items-center gap-4">
                      {proj.logos.map((logo: any, idx: number) => {
                        const image = (
                          <Image
                            src={logo.src}
                            alt={logo.alt || `${proj.title} sponsor ${idx + 1}`}
                            width={40}
                            height={40}
                            className="h-8 w-8 object-contain opacity-80 transition-opacity hover:opacity-100"
                          />
                        );

                        return logo.href ? (
                          <Link
                            key={`${proj.title}-logo-${idx}`}
                            href={logo.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${proj.title} sponsor: ${logo.alt || `Logo ${idx + 1}`}`}
                            className="inline-flex"
                          >
                            {image}
                          </Link>
                        ) : (
                          <div key={`${proj.title}-logo-${idx}`} className="inline-flex">
                            {image}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <Link
                    href={proj.link}
                    className="text-green-600 hover:text-emerald-700 transition-colors duration-300 text-base md:text-lg font-skModernRegular"
                    target="_blank"
                  >
                    Paper
                  </Link>
                </div>
              </div>
            );

            const researchCards = [
              descriptionBlock,
              ...projectsToDisplay.slice(0, 5).map((proj, i) => buildCard(proj, `proj-${i}`)),
            ];

            return (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-full mx-auto">
                {researchCards.slice(0, 6)}
              </div>
            );
          })()}
        </div>
      </section>
      <Section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-skModernBold text-center mb-12">Work</h2>
        </div>
        <LearnPrompting />
        <HackAPrompt />
      </Section>
      <Section>
        <Talks />
      </Section>
      <Section>
        <Garden images={gardenImagesHome} />
      </Section>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.alt} expanded view`}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeImage}
              className="absolute top-4 right-4 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close expanded image"
            >
              ✕
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.src.width}
              height={selectedImage.src.height}
              className="w-full h-auto rounded-2xl shadow-2xl"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}