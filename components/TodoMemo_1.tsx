"use client";

import { useState } from "react";
import EditCheckSvg from "@/public/edit-check.svg";



export default function TodoMemo ({memo} : {memo : string}) {
  const [todoMemo, setTodoMemo] = useState<string>("");

  const changeMemoHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodoMemo(e.target.value);
  }

  return (
    <div className="w-full desktop:col-start-6 desktop:col-end-12 tablet:col-start-1 tablet:-col-end-1 mobile:col-start-1 mobile:-col-end-1 desktop:row-start-3 tablet:row-start-4 mobile:row-start-4 h-80  bg-amber-100 flex flex-col items-center tablet:mt-6 mobile:mt-6">

        <span className="font-bold text-amber-800 mt-6 mb-4">
          Memo
        </span>

        <textarea className="w-full bg-transparent resize-none outline-none px-2" onChange={changeMemoHandler} value={todoMemo} rows={10}/>
        <div>
             <button>
            <EditCheckSvg />
            수정완료
             </button>
        </div>
    </div>
  )
}