import { Cursor, Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <div className="my-2 text-2xl font-semibold md:text-4xl">
      <span className="text-3xl font-semibold md:text-5xl text-gray-300">
        I'm a
      </span>
      <span className="ml-2 text-3xl text-[#0fb9b1]   xl:text-4xl">
        <Typewriter
          words={["Frontend Developer.", "Full Stack Developer."]}
          loop={0}
          typeSpeed={120}
          deleteSpeed={80}
        />
        <Cursor cursorStyle="|" />
      </span>
    </div>
  );
};

export default TypeWriter;
