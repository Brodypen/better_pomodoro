"use server";

import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { getUserFromCookie } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function addProject(data: FormData) {

  const user = await getUserFromCookie(cookies());
  const name = data.get("name") as string;
  if (!user || !name) return;
  await db.project.create({
    data: {
      name: name,
      ownerId: user?.id,
    },
  });
          revalidatePath("/home");
  
}
