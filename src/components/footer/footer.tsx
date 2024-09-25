import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-700 font-skModernRegular mb-4 md:mb-0">
            © {new Date().getFullYear()} Sander Schulhoff. All rights reserved. Identified one of the plants on my website? Want to chat prompting or ML? Reach out on one of these socials:
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/trigaten"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#783FC7] transition-colors duration-300"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sander-schulhoff/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#0B66C2] transition-colors duration-300"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="mailto:sanderschulhoff@gmail.com"
              className="text-gray-600 hover:text-emerald-700 transition-colors duration-300"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
