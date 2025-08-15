import BLOG_DATA from "@/data/blogData";

export default function BlogPage({ params }) {
  const blog = BLOG_DATA.find((b) => b.slug === params.slug);

  if (!blog) return <div className="p-10">Blog not found</div>;

  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="rounded-xl mb-4" />
      <p className="text-lg">{blog.description}</p>
      {/* Add more content as needed */}
    </div>
  );
}
