import Image from "next/image";
import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="group inline-block overflow-hidden rounded-xl">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full
        bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-10
        "
      />
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className="w-full h-full object-cover object-center rounded-xl group-hover:scale-105 transition-all ease duration-300 cursor-pointer"
        sizes="(max-width:1180px) 100vw, 50vw"
        priority
      />
      {/* blog category*/}
      <div className="absolute bottom-0  p-4 xs:p-6 sm:p-10 z-20 w-full">
        <Tag
          link={`/categories/${blog.tags[0]}`}
          name={blog.tags[0]}
          className="px-6 py-1 sm:py-2 text-xs sm:text-sm !border"
        />
        {/* blog title */}
        <Link href={blog.url} className="mt-6">
          <h2 className="font-bold capitalize  text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            <span
              className="bg-gradient-to-tr from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50  bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom
              bg-no-repeat transition-[background-size] duration-500
              "
            >
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
