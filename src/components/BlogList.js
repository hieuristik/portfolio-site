"use client";

import BLOG_DATA from "@/data/blogData";
import BlogItem from "./BlogItem";

export default function BlogList() {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-6 px-2 py-4 w-max">
        {BLOG_DATA.map((blog) => (
          <BlogItem key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}
