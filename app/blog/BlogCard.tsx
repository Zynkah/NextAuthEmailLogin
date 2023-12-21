import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { BlogProps } from "@/data/blog";

export default function BlogCard(props: BlogProps) {
  const blogData = props.blogData;
  return (
    <div>
      {blogData.map((blog, index) => (
        <Card key={index} className="my-5">
          <CardHeader>
            <CardTitle>{blog.header}</CardTitle>
            <CardDescription>{blog.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{blog.content}</p>
          </CardContent>
          <CardFooter>
            <p>
              {blog.footer}{' '}
              <Link
                className="text-slate-400 hover:underline"
                href="https://nextjs.org/"
              >
                {blog.link}
              </Link>
              .
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
