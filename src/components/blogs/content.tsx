import React from "react";

export default function Content() {
  return (
    <div className=" inset-0 flex items-end bg-gradient-to-t ">
      <div className="flex flex-col py-4 sm:py-6 md:py-8 gap-y-2 sm:gap-y-3 md:gap-y-4 px-4 sm:px-6 md:px-20 w-full">
        <div className="flex w-full md:w-[55%]">
          <h1 className="text-black font-skModernRegular text-3xl">Blog</h1>
        </div>
        <p className="text-base text-gray-700 font-skModernRegular">
          Hello, welcome to my technical blog. I wrote some posts to provide
          more details about some of my more in-depth projects
        </p>
      </div>
    </div>
  );
}
