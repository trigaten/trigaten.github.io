"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.location.replace("https://sanderschulhoff.com");
  }, []);

  return null;
}
