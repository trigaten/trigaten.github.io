"use client";

import { useEffect } from "react";

export default function BlogPostPage() {
  useEffect(() => {
    window.location.replace("https://sanderschulhoff.com");
  }, []);

  return null;
}

export async function generateStaticParams() {
  return [{ slug: "0" }, { slug: "1" }];
}
