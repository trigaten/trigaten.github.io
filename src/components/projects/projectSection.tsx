import React from "react";

interface ProjectsProps {
  year: string;
}

export default function ProjectSection({ year }: ProjectsProps) {
  return (
    <div className="flex items-center mb-8">
      <p className="font-skModernBold text-3xl text-gray-700 text-left">
        {year}
      </p>
      <span className="ml-2 text-gray-700" style={{ color: "#4A4A4A" }}>
        ▼
      </span>
    </div>
  );
}
