import Image from "next/image";
import React from "react";
import Hero from "@/components/homepage/hero";
import LearnPrompting from "@/components/homepage/lp";
import Garden from "@/components/homepage/garden";
import HomeProjects from "@/components/homepage/homeprojects";
import { gardenImagesHome } from "..";

const Section = ({ children }: { children: any }) => (
  <section className="mt-32 first:mt-0">{children}</section>
);

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Section>
        <Hero />
      </Section>
      <section className="mt-16">
        <LearnPrompting />
        </section>
      <Section>
        <HomeProjects />
      </Section>
      <Section>
        <Garden images={gardenImagesHome} />
      </Section>
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </div>
  );
}
