import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Fade } from "react-awesome-reveal";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./public/data/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="my-20">
      <Fade direction="up">
        <h2 className="font-bold text-3xl">
          Lates <span className="text-[#5CAF90]">Blogs</span>
        </h2>
        <p className="text-[#878787] my-3">
          We tackle interesting topics everyday in 2025.
        </p>
      </Fade>

      <Fade direction="up">
        <div className="grid grid-cols-5 gap-5">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </Fade>
    </div>
  );
}

export default Blogs;
