import prisma from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  const posts = await prisma.post.findMany({
    // where: { published: true },
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true, slug: true },
    take: 10,
    skip: 0,
  });

  const psotCount = await prisma.post.count();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-semibold">All Posts({psotCount})</h1>

        <ul className="border-t border-b border-black/20 py-5 leading-8">
          {posts.map((post) => (
            <li
              key={post.id}
              className="flex items-center justify-between px-5"
            >
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
