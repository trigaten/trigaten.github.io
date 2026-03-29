"use client";

import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    window.location.replace("https://sanderschulhoff.com/research");
  }, []);

  return null;
}
