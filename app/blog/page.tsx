import { blogData } from "@/data/blog";
import BlogCard from "./BlogCard";

export default function Blog() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="my-10">
          <BlogCard blogData={blogData.blog} />
        </div>
      </main>
    );
}