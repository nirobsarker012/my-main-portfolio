import { motion, useAnimation } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const AboutInfo = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // I can use false then it show Inifinte the animation When I Scroll up and down.
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    } else {
      // Optional: reset when not in view
      controls.start({ opacity: 0, scale: 0 });
    }
  }, [inView, controls]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={controls}
      className="container px-3.5"
    >
      <h1 className="text-justify text-[18px] text-gray-200">
        Hello!, I'm{" "}
        <span className="font-semibold text-[#55E6C1]">Nirob Sarker</span> a
        Jr.Front-End Developer based in Bangladesh. I have well knowledge of
        Fullstack development.
      </h1>
      <div className="my-10 text-justify text-[16px] text-gray-300">
        <p>
          👋 Hey there! I'm a 23-year-old self-motivated programmer on a journey
          to become a versatile front-end web developer. My passion for
          programming drives me to dedicate 6 to 8 hours each day to coding,
          constantly learning, and exploring new technologies.
        </p>
        <p className="mt-3">
          🚀 Currently, I have a solid foundation in Frontend Development and
          possess basic knowledge of the MERN stack. My goal is to elevate my
          skills daily, ensuring that I stay at the forefront of web development
          trends.
        </p>
        <p className="mt-3">
          🌐 As a GitHub open-source contributor, I'm committed to enhancing my
          skills and delivering high-quality projects. If you're curious about
          my work, feel free to explore my GitHub for an in-depth look at the
          projects I've been involved in. Still, I'm developing my skills daily
          and enjoying my life with programming.
        </p>
      </div>

      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="flex gap-5 text-[18px]">
            <span className="text-[#55E6C1]">Name:</span>{" "}
            <span className="text-white">Nirob Sarker</span>
          </div>
          <div className="my-1 flex gap-5 text-[18px]">
            <span className="text-[#55E6C1]">Phone:</span>
            <span className="text-white">+8801854433053</span>
          </div>
          <div className="flex gap-5 text-[18px]">
            <span className="text-[#55E6C1]">Nationality:</span>
            <span className="text-white">Bangladeshi </span>
          </div>
        </div>
        <div>
          <div className="flex gap-5 text-[18px]">
            <span className="text-[#55E6C1]">Age:</span>{" "}
            <span className="text-white">23</span>
          </div>
          <div className="my-1 flex gap-5 text-[18px]">
            <span className="text-[#55E6C1]">Address:</span>{" "}
            <span className="text-white">Mirpur 2, Dhaka, Bangladesh</span>
          </div>
          <div className="flex gap-5 text-[18px]">
            <span className="mb-5 text-[#55E6C1] sm:mb-0">Language:</span>
            <span className="text-white">Bengali, English</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutInfo;
