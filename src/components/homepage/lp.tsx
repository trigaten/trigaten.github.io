import React from "react";
import Image5 from "@/../public/LP/image5.png";
import Image6 from "@/../public/LP/image6.png";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/../public/LP/image1.png";

export default function LearnPrompting() {
  const images = [Image5, Image6, image1];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {images.map((img, index) => (
          <Link
            href="https://learnprompting.org/"
            target="_blank"
            key={index}
            className="block w-full"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={img}
                alt={`Learn Prompting image ${index + 1}`}
                className="transition-transform duration-300 hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-2 font-skModernBold text-black">
            Learn Prompting
          </h1>
          <div className="flex items-center mb-4">
            <h2 className="text-md text-gray-500 font-skModernRegular mr-1">
              December 2022 -
            </h2>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-[0.4rem] mt-1"></div>
              <span className="text-lg font-skModernRegular text-green-600">
                Present
              </span>
            </div>
          </div>
          <h3 className="text-md font-skModernRegular text-black mb-4">
            Co-Founder and CEO
          </h3>
          <Link
            href="https://learnprompting.org/"
            className="inline-block pt-3 text-green-600 hover:text-emerald-700 transition-colors duration-300 text-lg rounded font-skModernRegular"
            target="_blank"
          >
            Website
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg md:text-xl text-gray-600 font-skModernRegular">
            Learn Prompting is a comprehensive guide to understanding and
            mastering the art of prompt engineering. It covers various
            techniques and strategies to effectively communicate with AI models,
            helping you get the most out of AI-powered tools and applications.
            Whether you're a beginner or an experienced user, this resource will
            enhance your skills in crafting prompts for optimal results.
          </p>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import Image5 from "@/../public/LP/image5.png";
// import Image from "next/image";
// import Link from "next/link";
// import image1 from "@/../public/LP/image1.png";

// export default function LearnPrompting() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-12">
//         <Link
//           href="https://learnprompting.org/"
//           target="_blank"
//           className="block w-full max-w-3xl mx-auto"
//         >
//           <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <Image
//               src={image1}
//               alt="Learn Prompting main image"
//               className="transition-transform duration-300 hover:scale-105"
//               fill
//               sizes="(max-width: 768px) 100vw, 66vw"
//               style={{
//                 objectFit: "cover",
//               }}
//             />
//           </div>
//         </Link>
//       </div>
//       <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
//         <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
//           <h1 className="text-3xl font-bold mb-2 font-skModernBold text-black">
//             Learn Prompting
//           </h1>
//           <div className="flex items-center mb-4">
//             <h2 className="text-md text-gray-500 font-skModernRegular mr-1">
//               December 2022 -
//             </h2>
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-green-600 rounded-full mr-[0.4rem] mt-1"></div>
//               <span className="text-lg font-skModernRegular text-green-600">
//                 Present
//               </span>
//             </div>
//           </div>
//           <h3 className="text-md font-skModernRegular text-black mb-4">
//             Co-Founder and CEO
//           </h3>
//           <Link
//             href="https://learnprompting.org/"
//             className="inline-block pt-3 text-green-600 hover:text-emerald-700 transition-colors duration-300 text-lg rounded font-skModernRegular"
//             target="_blank"
//           >
//             Website
//           </Link>
//         </div>
//         <div className="w-full md:w-1/2">
//           <p className="text-lg md:text-xl text-gray-600 font-skModernRegular">
//             Learn Prompting is a comprehensive guide to understanding and
//             mastering the art of prompt engineering. It covers various
//             techniques and strategies to effectively communicate with AI models,
//             helping you get the most out of AI-powered tools and applications.
//             Whether you're a beginner or an experienced user, this resource will
//             enhance your skills in crafting prompts for optimal results.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
