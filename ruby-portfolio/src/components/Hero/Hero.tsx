import { useEffect, useState } from "react";

export const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="h-[200vh] w-full">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-8 mb-12">
        <h2 className="font-serif !text-[60px] font-normal !leading-[120px] !text-gray-400">
          <span className="-ml-72">Let's build something</span><br />
          <em
            className={`text-[#473472] inline-block transition-all duration-700 ease-out
            ${scrolled ? "scale-125 text-[240px]" : "scale-100 text-[200px]"}`}
          >
            together
          </em>
        </h2>
        <p className="absolute bottom-0 text-xl text-gray-500">
            Full-stack developer passionate about creating intuitive and engaging websites.
        </p>
      </div>
    </section>
  );
};