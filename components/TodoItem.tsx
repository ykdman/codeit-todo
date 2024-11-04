 "use client";

import TodoBoxSvg from "@/public/todo-box.svg"
import DoneBoxSvg from "@/public/done-box.svg"
import { Todo } from "@/types";
import clsx from "clsx";
import Link from "next/link";

 export default function TodoItem({todo} : {todo : Todo}) {
    return (
        <li className="flex justify-start items-center w-full border-2 border-black rounded-3xl px-3 h-[50px] mb-4">
          
            <div>
            {todo.isCompleted ? <DoneBoxSvg /> : <TodoBoxSvg />}
            </div>
            <Link href={`/items/${todo.id}`} className={clsx(
              "text-lg mx-4 py-2",
              {"line-through" : todo.isCompleted}
            )}>
              {todo.name}
            </Link>
          
        </li>
    )
 }