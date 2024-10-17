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

export async function editPost(formData: FormData, id: string) {
  return await prisma.post.update({
    where: {
      id,
    },
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      slug: (formData.get("title") as string).replace(/\s+/g, "-").toLowerCase(),
    },
  });
}

export async function deletePost(id: string) {
  return await prisma.post.delete({
    where: {
      id
    }
  });
}