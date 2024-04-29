import Image from "next/image";
import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import deved from "./dev-ed-wave.png";

function Hero() {
  return (
    <>
      <section className="py-10 px-10 md:px-20 lg:px-40">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="mb-3 text-8xl font-bold text-teal-600 dark:text-teal-400">
            CoffinS
          </h2>
          <h3 className="py-2 text-5xl font-semibold dark:text-white">
            FullStack Developer
          </h3>
          <p className="mb-8 max-w-sm py-5 text-2xl font-medium leading-8 text-gray-800 dark:text-gray-200">
            Learning anything about web flow. Follow me down below!
          </p>
        </div>
        <div className="flex justify-center gap-20 text-6xl text-gray-600 dark:text-gray-400">
          <AiFillInstagram />
          <AiFillFacebook />
          <AiFillYoutube />
        </div>
        <div className="relative mx-auto mt-20 h-80 w-80 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 md:h-96 md:w-96">
          <Image src={deved} className="object-cover" fill alt="Deved Image" />
        </div>
      </section>
    </>
  );
}

export default Hero;
