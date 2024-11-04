"use client";

import TodoBoxSvg from "@/public/todo-box.svg"
import DoneBoxSvg from "@/public/done-box.svg"
import { Todo } from "@/types";
import { useRouter } from "next/navigation";


export default function TodoItemDetail ({todo} : {todo : Todo}) {

  const router = useRouter();

  const changeCompleteHander = async () => {
    const updateTodo = {
      ...todo,
      isCompleted : !todo.isCompleted,
      imageUrl : todo.imageUrl && todo.imageUrl.length > 0 ? todo.imageUrl : "",
      memo : todo.memo && todo.memo.length > 0 ? todo.memo : "",
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${todo.id}`, {
      method: "PATCH",
      headers : {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({...updateTodo}),
    })
    const data = await res.json();
    console.log(data)
    router.refresh();
  }

  return (
    <div className="w-full border-2 border-black h-16 rounded-3xl mt-6 flex justify-center items-center desktop:col-start-2 desktop:col-end-12 row-start-2 tablet:col-start-1 tablet:-col-end-1 mobile:col-start-1 mobile:-col-end-1">
      <button onClick={changeCompleteHander}>
        {/* {checkSvg} */}
        {todo.isCompleted ? <DoneBoxSvg /> : <TodoBoxSvg />}
      </button>
      <span className="ml-4 text-xl underline">
        {todo?.name}
      </span>
    </div>
  )
}