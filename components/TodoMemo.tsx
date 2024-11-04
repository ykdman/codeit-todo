"use client";

import { Todo } from "@/types";

export default function TodoMemo ({changeHandler, currentTodo} : {changeHandler : (e : React.ChangeEvent<HTMLTextAreaElement>) => void, currentTodo : Todo | null}) {

  return (
    <div className="desktop:w-4/6 h-80  bg-amber-100 flex flex-col items-center rounded-3xl ">

        <span className="font-bold text-amber-800 mt-6 mb-4">
          Memo
        </span>

        <textarea className="w-full bg-transparent resize-none outline-none px-2" onChange={changeHandler} value={currentTodo?.memo ?? ""} rows={10}/>
        
    </div>
  )
}