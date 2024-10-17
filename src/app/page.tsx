import { createPost } from "@/actions/post.action";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  // const posts = await prisma.post.findMany({
  //   // where: { published: true },
  //   orderBy: { createdAt: "desc" },
  //   select: { id: true, title: true, slug: true },
  //   take: 10,
  //   skip: 0,
  // });

  // const postCount = await prisma.post.count();

  const user = await prisma.user.findUnique({
    where: { id: "1ddd9f28-174e-4ac8-885d-02333cb1654f" },
    include: { posts: true },
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-semibold">
          All Posts({user?.posts.length})
        </h1>

        <ul className="border-t border-b border-black/20 py-5 leading-8">
          {user?.posts.map((post) => (
            <li
              key={post.id}
              className="flex items-center justify-between px-5"
            >
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>

        <form action={createPost} className="flex flex-col gap-y-5 w-[300px]">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="text-black"
          />
          <textarea
            name="content"
            rows={5}
            placeholder="Content"
            className="px-2 py-1 rounded-sm text-black"
          />
          <button
            type="submit"
            className="bg-blue-500 py-2 text-white rounded-sm"
          >
            Create Post
          </button>
        </form>
      </main>
    </div>
  );
}
