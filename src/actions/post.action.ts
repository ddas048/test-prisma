"use server";

import prisma from "@/lib/db";

export async function createPost(formData: FormData) {
  return await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      slug: (formData.get("title") as string).replace(/\s+/g, "-").toLowerCase(),
      published: false,
    },
  });
}