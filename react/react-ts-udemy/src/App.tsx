import Input from "./AdvanceComponents/Input";
import Button from "./AdvanceComponents/Button";
import Container from "./AdvanceComponents/Container";
import { useRef, useEffect, useState } from "react";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import { get } from "./util/http";

type DataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default function App() {
  const ref = useRef<HTMLInputElement>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string>();
  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = (await get(
          "https://jsonplaceholder.typicode.com/posts"
        )) as DataBlogPost[];
        const blogPosts: BlogPost[] = data.map((post) => {
          return {
            id: post.id,
            title: post.title,
            text: post.body,
          };
        });
        setPosts(blogPosts);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    }
    fetchPosts();
  }, []);
  return (
    <main>
      <Input id="name" label="Your Name" type="text" ref={ref} />
      <Input id="name" label="Your Name" type="number" />
      <p>
        <Button type="button">Button</Button>
      </p>
      <p>
        <Button type="link" href="https://www.google.com">
          Link
        </Button>
      </p>
      <Container as={Button}>Click me</Container>
      {error ? <p>Failed to fetch</p> : <BlogPosts posts={posts} />}
    </main>
  );
}
