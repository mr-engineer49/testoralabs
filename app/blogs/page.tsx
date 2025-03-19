import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    description: "Exploring how artificial intelligence is shaping modern web development.",
    image: "/ai-web.jpg",
    category: "Technology",
  },
  {
    id: 2,
    title: "Top 10 Next.js Features for 2025",
    description: "A deep dive into the most powerful features coming to Next.js.",
    image: "/nextjs-features.jpg",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Why ShadCN is a Game-Changer for UI Components",
    description: "Discover how ShadCN simplifies styling and component design in modern React apps.",
    image: "/shadcn-ui.jpg",
    category: "UI/UX Design",
  },
  {
    id: 4,
    title: "The Rise of Server Components in React",
    description: "Understanding how server components enhance performance and scalability.",
    image: "/server-components.jpg",
    category: "React",
  },
];

export default function Blogs() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Latest Blog Posts</h1>
        <input placeholder="Search posts..." className="w-1/3" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow rounded-xl">
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <Badge className="mb-2">{post.category}</Badge>
              <CardTitle className="text-md font-semibold">{post.title}</CardTitle>
              <p className="text-xs text-gray-500 mt-2">{post.description}</p>
              <Link href={`/blogs/${post.id}`} passHref>
                <Button variant="outline" className="mt-4 w-full">Read More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
