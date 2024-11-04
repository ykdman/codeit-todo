"use client";

import CheckSvg from "@/public/edit-check.svg"
import clsx from "clsx";

export default function EditTodoButton({isEdit, isComplete} : {isEdit : boolean, isComplete : boolean}) {
  
  return (
    <button className={clsx("flex justify-center items-center w-40 h-14  rounded-3xl search-shadow border-2 border-black font-bold",
      {
        "bg-lime-300" : isEdit && isComplete,
        "bg-slate-200" : isEdit && !isComplete,
        "bg-rose-500" : !isEdit
      }
    )}>
      <CheckSvg />
      <span className="ml-1 font-bold">
        {isEdit && "수정 완료"}
        {!isEdit && "삭제하기"}
      </span>
    </button>
    
  )
}