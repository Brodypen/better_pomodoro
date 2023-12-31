import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { TASK_STATUS } from "@prisma/client";
import { cookies } from "next/headers";
import { Button } from "./ui/button";
import Card from "./Card";

const getData = async () => {
  const user = await getUserFromCookie(cookies());
  const tasks = await db.task.findMany({
    where: {
      ownerId: user.id,
      NOT: {
        status: TASK_STATUS.COMPLETED,
        deleted: false,
      },
    },
    take: 3,
    orderBy: {
      due: "asc",
    },
  });

  return tasks;
};
const TaskCard = async ({ title, tasks }) => {
  const data = tasks || (await getData());

  return (
    <Card className="">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-3xl">{title}</span>
        </div>
        <div>
          <Button className="text-violet-600">
            + Create New
          </Button>
        </div>
      </div>
      <div>
        {data && data.length ? (
          <div>
            {data.map((task) => (
              <div className="py-2 " key={task.id}>
                <div>
                  <span className="">{task.name}</span>
                </div>
                <div>
                  <span className="text-sm">
                    {task.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>no tasks</div>
        )}
      </div>
    </Card>
  );
};

export default TaskCard;