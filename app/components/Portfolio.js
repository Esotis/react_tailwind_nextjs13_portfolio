import React from "react";

function Portfolio() {
  return (
    <>
      <section className="px-10 py-10 md:px-20 lg:px-40">
        <div>
          <h3 className="py-4 text-4xl font-semibold dark:text-white">
            Portfolio
          </h3>
          <p className="py-2 text-2xl font-medium leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my studies, I've felt many
            <span className="text-red-500"> errors</span> and
            <span className="text-teal-500"> new things</span>, but I can solve
            it with many tutorials and helps from many people and content
            creators.
          </p>
          <p className="py-4 text-2xl font-medium leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including making web,
            programming, and teaching.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="lg:h-[350px] lg:flex-1 lg:basis-1/3">
            <img
              src="/web1.png"
              className="h-full w-full rounded-lg object-cover object-center"
              alt="Portfolio "
            />
          </div>
          <div className="lg:h-[350px] lg:flex-1 lg:basis-1/3">
            <img
              src="/web2.png"
              className="h-full w-full rounded-lg object-cover object-center"
              alt="Portfolio "
            />
          </div>
          <div className="lg:h-[350px] lg:flex-1 lg:basis-1/3">
            <img
              src="/web3.png"
              className="h-full w-full rounded-lg object-cover object-center"
              alt="Portfolio "
            />
          </div>
          <div className="lg:h-[350px] lg:flex-1 lg:basis-1/3">
            <img
              src="/web4.png"
              className="h-full w-full rounded-lg object-cover object-center"
              alt="Portfolio "
            />
          </div>
          <div className="lg:h-[350px] lg:flex-1 lg:basis-1/3">
            <img
              src="/web5.png"
              className="h-full w-full rounded-lg object-cover object-center"
              alt="Portfolio "
            />
          </div>
          <div className="lg:h-[350px] lg:flex-1 lg:basis-1/3">
            <img
              src="/web6.png"
              className="h-full w-full rounded-lg object-cover object-center"
              alt="Portfolio "
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
