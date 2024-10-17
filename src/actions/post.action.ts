"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      slug: (formData.get("title") as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
      published: false,
      author: {
        connect: {
          id: "1ddd9f28-174e-4ac8-885d-02333cb1654f",
        },
      },
    },
  });

  revalidatePath("/");
}

export async function editPost(formData: FormData, id: string) {
  await prisma.post.update({
    where: {
      id,
    },
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      slug: (formData.get("title") as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
    },
  });
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: {
      id,
    },
  });
}
