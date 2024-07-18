import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    // The cx utility function combines clsx and tw-merge. This enables you to construct className strings conditionally without having to worry about Tailwind CSS style conflicts.
    <Link
      href={link}
      className={cx(
        "inline-block py-1.5 md:py-2 px-6 md:px-10 rounded-full font-medium border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-2",
        props.className,
        active
          ? "bg-dark text-light dark:bg-light dark:text-dark"
          : "bg-light text-dark dark:bg-dark dark:text-light"
      )}
    >
      {name}
    </Link>
  );
};

export default Category;
