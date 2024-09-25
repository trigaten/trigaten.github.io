import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import { blogPosts } from "@/app";
import "./blog.css";

const tagColors: { [key: string]: string } = {
  "AI/ML": "bg-purple-600 text-white",
  "Web Development": "bg-blue-600 text-white",
  "Data Science": "bg-green-600 text-white",
  Cybersecurity: "bg-red-600 text-white",
  "Cloud Computing": "bg-orange-600 text-white",
  Python: "bg-yellow-600 text-white",
};

function BlogHero({ blogPost }: { blogPost: (typeof blogPosts)[0] }) {
  return (
    <header className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={blogPost.image}
          alt={blogPost.title}
          className="brightness-[.65]"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="flex flex-col py-4 sm:py-6 md:py-8 gap-y-2 sm:gap-y-3 md:gap-y-4 px-4 sm:px-6 md:px-20 w-full">
          <div className="flex w-full md:w-[55%]">
            <span
              className={`${
                tagColors[blogPost.tag] || "bg-gray-600"
              } rounded-full px-3 py-1 text-xs sm:text-sm text-white font-skModernRegular`}
            >
              {blogPost.tag}
            </span>
          </div>
          <div className="w-full md:w-[55%]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-skModernBold text-white leading-tight">
              {blogPost.title}
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-y-2 sm:gap-y-0">
            <p className="text-sm sm:text-base md:text-xl font-skModernRegular text-white w-full md:w-[55%] text-left">
              {blogPost.blurbs}
            </p>
            <p className="text-sm sm:text-base md:text-xl font-skModernLight text-white w-full md:w-[55%] text-left sm:text-right">
              {blogPost.date}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

function BlogContent({ content }: { content: any }) {
  return (
    <article className="prose lg:prose-xl mx-auto py-8 text-lg font-skModernRegular text-black px-20">
      <div dangerouslySetInnerHTML={{ __html: content }} className="viewer" />
    </article>
  );
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const id = parseInt(params.slug, 10);
  const blogPost = blogPosts.find((post) => post.id === id);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-10">
        <Navbar variant="dark" />
      </div>
      <BlogHero blogPost={blogPost} />
      <BlogContent content={blogPost.content} />
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id.toString(),
  }));
}
