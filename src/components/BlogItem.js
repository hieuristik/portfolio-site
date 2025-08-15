import Link from "next/link";

export default function BlogItem({ blog }) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="min-w-[300px] max-w-[300px] rounded-xl shadow-md p-4 bg-white hover:scale-105 transition-transform">
        <img src={blog.image} alt={blog.title} className="rounded-md mb-3" />
        <h3 className="font-semibold text-lg mb-1">{blog.title}</h3>
        <p className="text-sm text-gray-600">{blog.description}</p>
      </div>
    </Link>
  );
}
