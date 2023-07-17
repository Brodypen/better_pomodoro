import { createNewProject } from "@/lib/api";
import { useState } from "react";
import { revalidatePath } from "next/cache";
import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { getUserFromCookie } from "@/lib/auth";
const NewProject = () => {
    async function addProject(data: FormData) {
        "use server";
        const user = await getUserFromCookie(cookies());
    const name = data.get("name") as string;
  await db.project.create({
    data: {
      name: name,
      ownerId: user?.id,
    },
  });
    revalidatePath("/home")
}

    return (
        <div className="w-full">
            <form action={addProject}>
                <input type="text" name="name" />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
export default NewProject;