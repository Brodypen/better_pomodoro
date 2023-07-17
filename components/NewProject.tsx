"use client";
import { createNewProject } from "@/lib/api";
import { addProject } from "@/pages/api/action";
import { useState } from "react";

const NewProject = () => {
    const [name, setName] = useState("");

    return (
        <div className="w-full">
            <form action={addProject}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
export default NewProject;