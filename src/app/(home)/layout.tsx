import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Sander Schulhoff",
  description: "San Schulhoff's personal website",
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar variant="light" />
      {children}
    </>
  );
}
