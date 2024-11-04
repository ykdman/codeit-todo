"use client";

import EditTodoButton from "@/components/EditTodoButton";
import ImageItem from "@/components/ImageItem";
import TodoMemo from "@/components/TodoMemo";
import { Todo } from "@/types";
import { useState } from "react";

export default function DetailWidget({todo} : {todo : Todo}) {
  const [currentTodo, setCurrentTodo] = useState<Todo>(todo);

  const changeMemoHandler = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
    if(currentTodo){
      setCurrentTodo({
        ...currentTodo,
        memo : e.target.value
      })
    }
  }

  return(
    <>
    <div className="w-full flex flex-row justify-center items-center mt-6 tablet:flex-col">
    <ImageItem />          
    <TodoMemo currentTodo={currentTodo} changeHandler={changeMemoHandler}/>
    </div>
    <div className="w-full my-6 flex desktop:justify-end items-center tablet:justify-center mobile:justify-center">
      <EditTodoButton isEdit={true} isComplete={todo.isCompleted}/>
      <EditTodoButton isEdit={false} isComplete={todo.isCompleted}/>
    </div>
    </>
  
  )
}