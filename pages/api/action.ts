`use server`
import { createNewProject } from "@/lib/api";

export async function addProject(data) {
    console.log({data})
    await createNewProject(data.name)
}