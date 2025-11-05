import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HackAPrompt() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-2 font-skModernBold text-black">
            HackAPrompt
          </h1>
          <div className="mb-4" />
          <h3 className="text-md font-skModernRegular text-black mb-4">
            Co-Founder and CEO
          </h3>
          <Link
            href="https://hackaprompt.com/"
            className="inline-block pt-3 text-green-600 hover:text-emerald-700 transition-colors duration-300 text-lg rounded font-skModernRegular"
            target="_blank"
          >
            Website
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg md:text-xl text-gray-600 font-skModernRegular">
            HackAPrompt is an AI red-teaming crowdsourcing platform that runs regular competitions
            where people all over the world can attempt to trick AIs into doing bad things. This
            includes CBRNE elicitation, agentic harms, and more. HackAPrompt has given away
            $100,000+ in prizes to its community of 20,000+ participants. HackAPrompt partners with
            artificial intelligence providers such as OpenAI to evaluate and improve the robustness
            of their models.
          </p>
        </div>
      </div>
    </div>
  );
}

