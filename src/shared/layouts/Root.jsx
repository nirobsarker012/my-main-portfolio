import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
  // const cursor = useRef();
  const scrollToTopRef = useRef();

  useEffect(() => {
    // window.addEventListener("mousemove", (e) => {
    //   if (!cursor.current) return;

    //   const x = e.clientX;
    //   const y = e.clientY;

    //   cursor.current.classList.remove("scale-0");

    //   cursor.current.style.top = `${y}px`;
    //   cursor.current.style.left = `${x}px`;

    //   const bigCursor = e.target.closest(".ns-big-cursor");
    //   if (bigCursor) {
    //     cursor.current.classList.add("scale-150");
    //   } else {
    //     cursor.current.classList.remove("scale-150");
    //   }
    // });

    window.addEventListener("scroll", (e) => {
      const scrollToTop = scrollToTopRef.current;
      if (!scrollToTop) return;

      scrollToTop.classList.toggle("translate-y-full", window.scrollY < 400);
      scrollToTop.classList.toggle("scale-0", window.scrollY < 400);

      const middleScreen = document.documentElement.scrollHeight / 2;

      scrollToTop.classList.toggle("rotate-180", middleScreen > window.scrollY);
    });
  }, []);

  const handleScrollToTop = () => {
    const middleScreen = document.documentElement.scrollHeight / 2;

    if (middleScreen > window.scrollY) {
      window.scrollTo(0, document.documentElement.scrollHeight);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {/* <div
        ref={cursor}
        className="fixed top-0 left-0 w-10 mix-blend-difference aspect-square pointer-events-none rounded-full bg-white z-[999999] -translate-1/2 duration-[50ms] scale-0"
      ></div> */}
      <button
        onClick={handleScrollToTop}
        ref={scrollToTopRef}
        className="bg-gray-50 w-12 aspect-square rounded-full rotate-180 flex justify-center items-center fixed bottom-5 right-2 z-[99999] duration-300 translate-y-full scale-0"
      >
        <img
          src="/up-arrow.png"
          alt=""
          className="w-8 max-h-full object-contain"
        />
      </button>
      <div className="w-full overflow-hidden">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
