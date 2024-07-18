import Image from "next/image";
import React from "react";
import Link from "next/link";
import { format } from "date-fns";

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-dark dark:text-light">
      <Link
        href={blog.url}
        className="col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300 cursor-pointer"
          sizes="(max-width:640px) 100vw,(max-width:1024) 50vw,33vw"
          priority
        />
      </Link>
      {/* blog category*/}
      <div className=" col-span-12 lg:col-span-8 w-full">
        <span className=" inline-block w-full uppercase text-accent font-semibold text-xs sm:text-sm dark:text-accentDark">
          {blog.tags[0]}
        </span>
        {/* blog title */}
        <Link href={blog.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-base sm:text-lg">
            <span
              className="bg-gradient-to-tr from-accent/50 to-accent/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom
              bg-no-repeat transition-[background-size] duration-500 dark:from-accentDark/50 dark:to-accentDark/50
              "
            >
              {blog.title}
            </span>
          </h2>
        </Link>
        {/* date */}
        <span className=" inline-block w-full capitalize text-dark/50 font-semibold text-xs sm:text-base dark:text-light/50">
          {format(new Date(blog.publishedAt), "MMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
