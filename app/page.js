"use client";

import Script from "next/script";
import React, { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function Page() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const html = document.querySelector("html");
    if (!darkMode) {
      localStorage.theme = "dark";
      html.classList.add("dark");
      return setDarkMode(true);
    }
    localStorage.theme = "light";
    html.classList.remove("dark");
    setDarkMode(false);
  };
  return (
    <>
      <Script id="dark">{`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}`}</Script>
      <main className="dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar darkMode={darkMode} setDark={toggleDarkMode} />
          <Hero />
          <Services />
          <Portfolio />
        </section>
      </main>
    </>
  );
}

export default Page;
