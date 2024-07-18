import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";
import React from "react";

// static metaData

export const metadata = {
  title: "About Me",
  description: `Here are some details about my self.`,
};

const AboutPages = () => {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:p-10 sm:p-12 md:p-16 lg:p-20  lg:mx-20 text-dark dark:text-light dark:font-normal">
        Have a project in mind? Reach out to me 📞 from{" "}
        <Link href="/contact" className="!underline underline-offset-2">
          here
        </Link>{" "}
        and let's make it happen.
      </h2>
    </>
  );
};

export default AboutPages;
