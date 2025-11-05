"use client";
import React, { useState } from "react";
import { Menu, X, GraduationCap, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function Navbar({ variant }: { variant: "light" | "dark" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-50 col-span-1 md:col-span-2 flex items-center justify-center md:p-4 py-4 px-8 mt-6">
      <div className="flex flex-wrap justify-between items-center w-full max-w-7xl">
        <div className="flex items-center space-x-4 text-lg font-skModernRegular">
          {[
            {
              href: "https://scholar.google.com/citations?user=6poCJVkAAAAJ&hl=en",
              label: "Google Scholar",
              Icon: GraduationCap,
              hoverClass: "hover:text-indigo-600",
            },
            {
              href: "https://www.linkedin.com/in/sander-schulhoff/",
              label: "LinkedIn",
              Icon: Linkedin,
              hoverClass: "hover:text-[#0B66C2]",
            },
            {
              href: "https://twitter.com/sanderschulhoff",
              label: "Twitter",
              Icon: Twitter,
              hoverClass: "hover:text-sky-500",
            },
            {
              href: "mailto:sanderschulhoff@gmail.com",
              label: "Email",
              Icon: Mail,
              hoverClass: "hover:text-emerald-700",
            },
          ].map(({ href, label, Icon, hoverClass }) => {
            const baseColor = variant === "light" ? "text-gray-600" : "text-gray-300";
            const isExternal = href.startsWith("http");

            return (
              <a
                key={label}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={label}
                className={`${baseColor} ${hoverClass} transition-colors duration-300`}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <button className="md:hidden text-lg z-50" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X size={24} color={variant === "light" ? "black" : "white"} />
          ) : (
            <Menu size={24} color={variant === "light" ? "black" : "white"} />
          )}
        </button>

        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
            isMenuOpen ? "block" : "hidden"
          } md:hidden`}
          onClick={toggleMenu}
        >
          <div
            className={`absolute right-0 top-0 h-full w-64 p-4 ${
              variant === "light" ? "bg-white" : "bg-gray-800"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col space-y-4 mt-16">
              {["Projects & Research", "Resume", "Blog", "The Garden 🪴"].map(
                (item, index) => (
                  <li key={index} className="text-lg font-skModernRegular">
                    <a
                      href={
                        item === "Resume"
                          ? "/sander_resume.pdf"
                          : `/${item
                              .toLowerCase()
                              .replace(/ & /g, "-")
                              .replace(/ /g, "-")}`
                      }
                      target={item === "Resume" ? "_blank" : "_self"}
                      rel={item === "Resume" ? "noopener noreferrer" : ""}
                      className={`${
                        variant == "light"
                          ? "hover:text-green-700 text-black"
                          : "hover:text-emerald-400 text-white"
                      } transition-colors duration-300`}
                      onClick={(e) => {
                        if (item === "The Garden 🪴") {
                          e.preventDefault();
                          window.scrollTo({
                            top: document.documentElement.scrollHeight,
                            behavior: "smooth",
                          });
                          toggleMenu();
                        }
                      }}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="hidden md:flex md:items-center">
          <ul className="flex flex-row space-x-8">
            {["Projects & Research", "Resume", "Blog", "The Garden 🪴"].map(
              (item, index) => (
                <li key={index} className="text-lg font-skModernRegular">
                  <a
                    href={
                      item === "Resume"
                        ? "/sander_resume.pdf"
                        : `/${item
                            .toLowerCase()
                            .replace(/ & /g, "-")
                            .replace(/ /g, "-")}`
                    }
                    target={item === "Resume" ? "_blank" : "_self"}
                    rel={item === "Resume" ? "noopener noreferrer" : ""}
                    className={`${
                      variant == "light"
                        ? "hover:text-green-700 text-black"
                        : "hover:text-emerald-400 text-white"
                    } transition-colors duration-300`}
                    onClick={(e) => {
                      if (item === "The Garden 🪴") {
                        e.preventDefault();
                        window.scrollTo({
                          top: document.documentElement.scrollHeight,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
