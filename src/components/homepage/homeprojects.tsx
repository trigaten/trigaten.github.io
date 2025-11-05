import React from "react";
import Image from "next/image";
import Link from "next/link";
import hackAPrompt from "@/../public/projects/2023/hackaPrompt.png";
import thePromptReport from "@/../public/projects/2023/thePromptReport.png";

export default function HomeProjects() {
  return (
    <div className="container mx-auto px-6 md:px-4 lg:px-0">
      <div className="flex items-center justify-center w-full py-8 md:py-16">
        <div className="flex flex-col w-full max-w-6xl space-y-24">
          <article className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-gray-500 font-skModernRegular">
                <span>Spring 2023</span>
                <span className="inline-flex h-1 w-8 bg-green-500" aria-hidden="true" />
                <span className="text-green-600">Research</span>
              </div>
              <h3 className="mt-4 text-3xl md:text-4xl font-skModernBold text-black">
                HackAPrompt
              </h3>
              <p className="mt-6 text-base md:text-lg text-gray-600 font-skModernRegular leading-relaxed">
                Ran the first competition on Generative AI red-teaming ever.
                <br />
                Raised $40K in sponsorship from companies like OpenAI, HuggingFace, and Scale. 
                <br />
                Published the largest dataset of prompt injections (600K+ adversarial prompts) and developed the first taxonomical ontology of prompt hacking. The paper won Best Theme Paper at EMNLP 2023
                <span className="relative inline-flex items-center group">
                  <span className="ml-1 text-sm font-semibold text-gray-400">+</span>
                  <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 translate-y-1 rounded-md bg-gray-900 px-3 py-2 text-xs text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                    I was the youngest person and second ever undergrad to win this. ~20,000 papers were submitted that year.
                  </span>
                </span>
                .
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://paper.hackaprompt.com/"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-emerald-700 transition-colors duration-300 text-base md:text-lg font-skModernRegular"
                >
                  Read the paper
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden rounded-3xl shadow-[0_25px_45px_-20px_rgba(16,185,129,0.35)]">
                <Image
                  src={hackAPrompt}
                  alt="HackAPrompt competition overview"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </article>

          <article className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-center">
            <div className="order-2">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-gray-500 font-skModernRegular">
                <span>Spring 2023</span>
                <span className="inline-flex h-1 w-8 bg-green-500" aria-hidden="true" />
                <span className="text-green-600">Research</span>
              </div>
              <h3 className="mt-4 text-3xl md:text-4xl font-skModernBold text-black">
                The Prompt Report
              </h3>
              <p className="mt-6 text-base md:text-lg text-gray-600 font-skModernRegular leading-relaxed">
                Ran the largest study on prompting ever conducted. Led a team of 32 researchers across UMD, OpenAI, Microsoft, Princeton, Stanford, and more. Surveyed over 1,500 papers to create a systematic literature review with comprehensive taxonomies covering hundreds of prompting techniques.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://arxiv.org/pdf/2311.16119"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-emerald-700 transition-colors duration-300 text-base md:text-lg font-skModernRegular"
                >
                  Read the paper
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-[0_25px_45px_-20px_rgba(34,197,94,0.3)]">
                <Image
                  src={thePromptReport}
                  alt="The Prompt Report publication"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="flex justify-center pt-12 pb-4">
        <Link href="/projects-research" passHref>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 font-skModernBold">
            View More Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
