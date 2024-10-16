import prisma from "@/lib/db";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-y-5  pt-25 text-center">
        <h1 className="text-3xl font-semibold">{post?.title}</h1>
        <p className="">{post?.content}</p>
      </main>
    </div>
  );
}
