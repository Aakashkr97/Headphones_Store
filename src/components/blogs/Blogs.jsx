import React from "react";
import Blogs1 from "../../assets/blogs/blog1.jpg";
import Blogs2 from "../../assets/blogs/blog2.jpg";
import Blogs3 from "../../assets/blogs/blog3.jpg";
import Blogs4 from "../../assets/blogs/blog4.jpg";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const BlogsData = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam deleniti fuga earum quis dignissimos dolor. Laudantium molestias eos expedita?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam deleniti fuga ",
    link: "#",
    img: Blogs1,
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam deleniti fuga earum quis dignissimos dolor. Laudantium molestias eos expedita?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam deleniti fuga ",
    link: "#",
    img: Blogs2,
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam deleniti fuga earum quis dignissimos dolor. Laudantium molestias eos expedita?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam deleniti fuga ",
    link: "#",
    img: Blogs3,
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam deleniti fuga earum quis dignissimos dolor. Laudantium molestias eos expedita?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam deleniti fuga ",
    link: "#",
    img: Blogs4,
  },
];

const Blogs = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center font-poppins pb-8">
            Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {BlogsData.map((data) => {
              return (
                <UpdateFollower
                  key={data.id}
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 999,
                    followSpeed: 1.5,
                    textFontSize: "3px",
                    scale: 5,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative flex flex-col items-center justify-center gap-6
                      p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:shadow-2xl 
                      hover:translate-y-[-10px] duration-300"
                  >
                    <img
                      src={data.img}
                      alt="Blog"
                      className="rounded-t-md w-full object-cover"
                    />
                    <div className="space-y-2">
                      <h1 className="text-xl font-bold line-clamp-2">
                        {data.title}
                      </h1>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {data.desc}
                      </p>
                    </div>
                    <motion.a
                      href={data.link}
                      whileHover={{ scale: 1.1 }}
                      className="absolute inset-0 flex items-center justify-center 
                        opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-md 
                        text-white font-semibold text-lg transition-opacity duration-300"
                    >
                      Read More
                    </motion.a>
                  </motion.div>
                </UpdateFollower>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
