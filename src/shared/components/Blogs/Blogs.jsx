import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { LiaComments } from "react-icons/lia";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { BlogData } from "../../data/BlogData";

const Blogs = () => {
  return (
    <div id="blogs" className="container">
      <div className="mx-auto my-10 w-[72px] border-b-[3px] border-[#55E6C1] text-2xl font-semibold md:w-[90px] md:text-3xl">
        <h1 className="text-center text-gray-300">Blogs</h1>
      </div>

      <div className="relative grid grid-cols-1 gap-10 pb-20 pt-5 md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {BlogData.map((data) => (
          <div
            key={data.id}
            className="rounded-sm border-b-2 border-[#55E6C1] flex flex-col"
          >
            <img
              className="w-full rounded-t-sm object-cover"
              src={data.img}
              alt=""
              style={{ aspectRatio: "16/9" }} // Maintains aspect ratio
            />
            <div className="bg-[#252425] px-3 flex flex-col justify-between">
              <div>
                <h1 className="py-5 text-[21px] text-gray-300">{data.title}</h1>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-300">
                    <MdOutlineDateRange />
                    <h2 className="text-[14px]">{data.date}</h2>
                  </div>
                  <div className="flex items-center gap-1 text-gray-300">
                    <LiaComments />
                    <h2 className="text-[14px]">{data.comments} Comments</h2>
                  </div>
                </div>
                <hr className="my-5" />
                <p className="mt-2 text-justify text-gray-200 line-clamp-4">
                  {data.desc}
                </p>
              </div>
              <div>
                <Link
                  to={data.live_link}
                  target="_blank"
                  className="mt-3 flex items-center gap-2 pb-5 text-[#55E6C1] transition-all hover:translate-x-1"
                >
                  Read More <IoMdArrowRoundForward />
                </Link>
              </div>
              <h1 className="absolute top-7 rounded-sm bg-[#55E6C1] px-2 font-semibold text-black">
                {data.category}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
