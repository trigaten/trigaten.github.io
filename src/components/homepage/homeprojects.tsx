import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../projects/projectCard";
import { homePageProjects } from "@/app";

export default function HomeProjects() {
  return (
    <div className="container mx-auto px-8 md:px-4 ">
      <div className="flex items-center justify-center w-full py-4 mt-4 md:mt-24">
        <div className="flex flex-col w-full max-w-7xl">
          <div className="w-full pr-0 md:pr-8 mb-8 md:mb-0">
            {homePageProjects.map((project, index) => (
              <div
                key={index}
                className={
                  homePageProjects.length - 1 === index ? "mb-0" : "mb-24"
                }
              >
                <ProjectCard
                  title={project.title}
                  stack={project.stack}
                  date={project.date}
                  link={project.link}
                  description={project.description}
                  image={project.image}
                  research={project.research}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <Link href="/projects-research" passHref>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 font-skModernBold">
            View More Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
