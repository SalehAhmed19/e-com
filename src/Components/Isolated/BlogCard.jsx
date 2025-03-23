import React from "react";

function BlogCard({ blog }) {
  return (
    <div>
      <img className="rounded-sm" src={blog.img} alt="" />
      <div>
        <p className="text-[#878787] text-sm my-5">{blog.date}</p>
        <h3 className="text-xl font-bold">{blog.title}</h3>
        <a href="#" className="text-sm font-bold">
          Read More
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
