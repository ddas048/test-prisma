import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const initialPosts: Prisma.PostCreateInput[] = [
  {
    title: "Hello World 1",
    content: "Hello World 1",
    slug: "hello-world",
    published: true,
    author: {
      connectOrCreate: {
        where: {
          email: "a@a.io",
        },
        create: {
          email: "a@a.io",
          hashedPassword: "hello",
          name: "Hello World",
        },
      },
    },
  },
  {
    title: "Hello World 2",
    content: "Hello World 2",
    slug: "hello-world-2",
    published: true,
    author: {
      connectOrCreate: {
        where: {
          email: "a@a.io",
        },
        create: {
          email: "a@a.io",
          hashedPassword: "hello",
          name: "Hello World",
        },
      },
    },
  },
  {
    title: "Hello World 3",
    content: "Hello World 3",
    slug: "hello-world-3",
    published: true,
    author: {
      connectOrCreate: {
        where: {
          email: "a@a.io",
        },
        create: {
          email: "a@a.io",
          hashedPassword: "hello",
          name: "Hello World",
        },
      },
    },
  },
  {
    title: "Hello World 4",
    content: "Hello World 4",
    slug: "hello-world-4",
    published: true,
    author: {
      connectOrCreate: {
        where: {
          email: "b@b.io",
        },
        create: {
          email: "b@b.io",
          hashedPassword: "hello",
          name: "Hello World",
        },
      },
    },
  },
  {
    title: "Hello World 5",
    content: "Hello World 5",
    slug: "hello-world-5",
    published: true,
    author: {
      connectOrCreate: {
        where: {
          email: "b@b.io",
        },
        create: {
          email: "b@b.io",
          hashedPassword: "hello",
          name: "Hello World",
        },
      },
    },
  },
];

async function main() {
  console.log("👋 Seeding...");

  for (const post of initialPosts) {
    const newPost = await prisma.post.create({ data: post });

    console.log(`👉 Created post: ${newPost.title}`);
  }

  console.log("👋 Seeding done!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
