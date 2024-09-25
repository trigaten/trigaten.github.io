import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  stack: string[];
  date: string;
  link: string;
  description: string;
  image: any;
  research: boolean;
  home?: boolean;
}

const techColors: { [key: string]: string } = {
  Python: "bg-yellow-600 text-white",
  HTML: "bg-orange-600 text-white",
  PyTorch: "bg-red-600 text-white",
  CNN: "bg-blue-600 text-white",
  GRU: "bg-purple-600 text-white",
  "Reinforcement Learning": "bg-green-600 text-white",
  Botany: "bg-emerald-600 text-white",
  "CI Pipelines": "bg-gray-600 text-white",
  Julia: "bg-pink-600 text-white",
  Jekyll: "bg-red-700 text-white",
  Liquid: "bg-blue-400 text-white",
  CSS: "bg-blue-500 text-white",
  JavaScript: "bg-yellow-400 text-white",
  TypeScript: "bg-blue-700 text-white",
  React: "bg-cyan-500 text-white",
  Vue: "bg-green-500 text-white",
  Angular: "bg-red-500 text-white",
  Node: "bg-green-600 text-white",
  Express: "bg-gray-700 text-white",
  MongoDB: "bg-green-700 text-white",
  SQL: "bg-blue-800 text-white",
  "Machine Learning": "bg-indigo-600 text-white",
  "Deep Learning": "bg-purple-700 text-white",
  TensorFlow: "bg-orange-500 text-white",
  Keras: "bg-red-600 text-white",
  Scikit: "bg-orange-600 text-white",
  Pandas: "bg-blue-500 text-white",
  NumPy: "bg-cyan-700 text-white",
  "Data Science": "bg-teal-600 text-white",
  "Natural Language Processing": "bg-green-500 text-white",
  "Computer Vision": "bg-purple-600 text-white",
  "Neural Networks": "bg-red-700 text-white",
  "Transfer Learning": "bg-yellow-700 text-white",
  "Time Series": "bg-blue-600 text-white",
  "Genetic Algorithms": "bg-green-700 text-white",
  Docker: "bg-blue-600 text-white",
  Kubernetes: "bg-blue-700 text-white",
  AWS: "bg-orange-600 text-white",
  GCP: "bg-red-500 text-white",
  Azure: "bg-blue-500 text-white",
};

const defaultColor = "bg-gray-500 text-white";

export default function ProjectCard({
  title,
  stack,
  date,
  link,
  description,
  image,
  research,
  home,
}: ProjectCardProps) {
  home = home !== false;

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-20 items-start justify-center mb-8">
      <div className="flex flex-col space-y-2 order-2 md:order-1">
        <h3 className="text-2xl md:text-3xl font-skModernBold text-black">
          {title}
        </h3>
        <p className="text-sm md:text-md text-gray-500 font-skModernRegular pb-1">
          {date}
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <span
              key={index}
              className={`${
                techColors[tech] || defaultColor
              } rounded-full px-2 py-1 text-xs md:text-sm font-skModernRegular`}
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="pt-2 font-skModernRegular text-black text-sm md:text-base">
          {description}
        </p>
        <Link
          href={link}
          className="pt-3 text-green-600 hover:text-emerald-700 transition-colors duration-300 text-base md:text-lg rounded font-skModernRegular"
          target="_blank"
        >
          {research ? "Paper" : "Link"}
        </Link>
      </div>
      <div className="order-1 md:order-2 w-full">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg w-full h-auto"
        />
      </div>
    </div>
  );
}
