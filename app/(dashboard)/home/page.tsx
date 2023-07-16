import Greetings from "@/components/Greetings";
import GreetingsSkeleton from "@/components/GreetingsSkeleton";
// import NewProject from "@/components/NewProject";
import ProjectCard from "@/components/ProjectCard";
import TaskCard from "@/components/TaskCard";
// import TaskCard from "@/components/TaskCard";
import { delay } from "@/lib/async";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";
import { cookies } from "next/headers";
import Link from "next/link";
import React, { Suspense } from "react";

const getData = async () => {
    await delay(1000);
    const user = await getUserFromCookie(cookies());
    const projects = await db.project.findMany({
        where: {
        ownerId: user?.id,
        },
        include: {
        tasks: true,
        },
    });

    return { projects };
};

export default async function Page() {
  const {projects} = await getData();
  
  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      <div className=" h-full  items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex">
          <Suspense fallback={<GreetingsSkeleton />}>
  <Greetings />
</Suspense>
        </div>
        <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 ">
          {
            projects.map((project) => (
              <div key={project.id} className="w-1/3 p-3">
                <Link href={`/projects/${project.id}`}>
                  <div>
                    <ProjectCard project={project} />
                  </div>
                </Link>
              </div>
            ))
          }
          <div className="w-1/3 p-3">{/* new project here */}</div>
        </div>
        <div className="mt-6 flex-2 grow w-full flex">
          <div className="w-full">
            <div className="mt-6 flex-2 grow w-full flex">
  <div className="w-full">
    <TaskCard title=""/>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}