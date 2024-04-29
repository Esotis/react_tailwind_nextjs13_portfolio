import Image from "next/image";
import React from "react";
import code from "./code.png";
import consulting from "./consulting.png";
import design from "./design.png";

function Services() {
  return (
    <>
      <section className="px-10 py-10 md:px-20 lg:px-40">
        <div>
          <h3 className="py-4 text-4xl font-semibold dark:text-white">
            {" "}
            My Services{" "}
          </h3>
          <p className="py-2 text-2xl font-medium leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my studies, I've felt many{" "}
            <span className="text-red-500">errors</span> and{" "}
            <span className="text-teal-500">new things</span>, but I can solve
            it with many tutorials and helps from many people and content
            creators.
          </p>
          <p className="py-4 text-2xl font-medium leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including making web,
            programming, and teaching.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 md:items-center md:justify-center md:gap-4 xl:grid-cols-3">
          <div className="my-10 flex flex-col items-center justify-center rounded-xl p-10 text-center shadow-xl dark:bg-gray-100">
            <Image src={design} width={100} height={100} alt="Design" />
            <h3 className="pt-8 pb-2 text-3xl font-semibold">
              Beautiful Design
            </h3>
            <p className="py-2 text-xl">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-2xl font-medium text-teal-600">
              Design tools used
            </h4>
            <p className="py-1 text-xl text-gray-800 ">Photoshop</p>
            <p className="py-1 text-xl text-gray-800">Illustrator</p>
            <p className="py-1 text-xl text-gray-800">Figma</p>
          </div>
          <div className="my-10 flex flex-col items-center justify-center rounded-xl p-10 text-center shadow-xl dark:bg-gray-100">
            <Image src={code} width={100} height={100} alt="Design" />
            <h3 className="pt-8 pb-2 text-3xl font-semibold">
              Beautiful Design
            </h3>
            <p className="py-2 text-xl">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className=" py-4 text-2xl font-medium text-teal-600">
              Design tools used
            </h4>
            <p className="py-1 text-xl text-gray-800 ">Photoshop</p>
            <p className="py-1 text-xl text-gray-800">Illustrator</p>
            <p className="py-1 text-xl text-gray-800">Figma</p>
          </div>
          <div className="my-10 flex flex-col items-center justify-center rounded-xl p-10 text-center shadow-xl dark:bg-gray-100">
            <Image src={consulting} width={100} height={100} alt="Design" />
            <h3 className="pt-8 pb-2 text-3xl font-semibold">
              Beautiful Design
            </h3>
            <p className="py-2 text-xl">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-2xl font-medium text-teal-600">
              Design tools used
            </h4>
            <p className="py-1 text-xl text-gray-800 ">Photoshop</p>
            <p className="py-1 text-xl text-gray-800">Illustrator</p>
            <p className="py-1 text-xl text-gray-800">Figma</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
