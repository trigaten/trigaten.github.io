import React from "react";
import Image from "next/image";
import ProjectsHero from "@/components/projects/hero";
import projectBg from "@/../public/project.jpg";
import Navbar from "@/components/navbar/navbar";
import ProjectSection from "@/components/projects/projectSection";
import ProjectCard from "@/components/projects/projectCard";
import projectsResearch from "..";
import Garden from "@/components/homepage/garden";
import { gardenImagesProjects } from "..";

export default function Projects() {
  // Group projects by year
  const projectsByYear = projectsResearch.reduce((acc: any, project: any) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {});

  // Sort years in descending order
  const sortedYears = Object.keys(projectsByYear).sort(
    (a: any, b: any) => b - a
  );

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-10">
        <Navbar variant="dark" />
      </div>
      <ProjectsHero />
      <div className="py-8 md:px-20 px-6">
        <div>
          {sortedYears.map((year) => (
            <React.Fragment key={year}>
              <ProjectSection year={year} />
              <div className="grid grid-cols-1 gap-4">
                {projectsByYear[year].map((project: any, index: number) => (
                  <div
                    key={index}
                    className={
                      projectsByYear.length - 1 === index ? "mb-0" : "mb-20"
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
            </React.Fragment>
          ))}
        </div>
        <Garden images={gardenImagesProjects} />
      </div>
    </div>
  );
}
