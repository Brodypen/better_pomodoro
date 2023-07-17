"use client";
import { useState } from "react";
import { addProject } from "@/app/_actions";
import { useRef } from "react";

const NewProject = () => {
    const formRef = useRef<HTMLFormElement>(null);

    async function action(data: FormData){
        await addProject(data);

        formRef.current?.reset();
    }

    return (
        <div className="w-full">
            <form ref={formRef} action={action}>
                <input type="text" name="name" />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
export default NewProject;