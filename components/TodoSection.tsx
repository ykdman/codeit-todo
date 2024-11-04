"use client";
import { useEffect, useState } from "react";
import { TaskStatus } from "@/config/enum";
import { Todo } from "@/types";
import EmptyTodoSvg from "@/public/empty-todo.svg";
import EmptyDoneSvg from "@/public/empty-done.svg"
import EmptyTodoMiniSvg from "@/public/empty-todo-mini.svg";
import EmptyDoneMiniSvg from "@/public/empty-done-mini.svg";
import Label from "./Label";
import TodoItem from "./TodoItem";
import clsx from "clsx";



export default function TodoSection ({ taskTodos , taskStatus} : {taskTodos : Todo[], taskStatus : TaskStatus}) {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 375);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const emptyImage = taskStatus === TaskStatus.todo 
  ? isSmallScreen ? <EmptyTodoMiniSvg /> :<EmptyTodoSvg /> 
  : isSmallScreen ? <EmptyDoneMiniSvg /> : <EmptyDoneSvg />;

  return (
    <section className={clsx(
      {
        "col-start-1 -col-end-7" : taskStatus === TaskStatus.todo,
        "col-start-7 -col-end-1" : taskStatus === TaskStatus.done
      }
    )}>
      <Label title={taskStatus} />
      {
        taskTodos && taskTodos.length > 0 &&
        <ul className="flex flex-col justify-center items-start mt-4">
          {
            taskTodos.map((todo) => <TodoItem todo={todo} key={todo.id}/>)
          }
        </ul>  
      }

      {
        !taskTodos || taskTodos.length === 0 &&
        <div className="flex flex-col justify-center items-center">
          {emptyImage}
        </div>
      }
      

      
      

    </section>
  )
}