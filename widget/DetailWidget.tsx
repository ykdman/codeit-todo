"use client";

import EditTodoButton from "@/components/EditTodoButton";
import ImageItem from "@/components/ImageItem";
import TodoMemo from "@/components/TodoMemo";
import { Todo } from "@/types";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DetailWidget({ todo }: { todo: Todo }) {
  const [currentTodo, setCurrentTodo] = useState<Todo>(todo);

  const router = useRouter();

  const changeMemoHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (currentTodo) {
      setCurrentTodo({
        ...currentTodo,
        memo: e.target.value,
      });
    }
  };

  const patchMemoHandler = async () => {
    if (!currentTodo.memo) {
      return;
    }

    if (currentTodo.id) {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${currentTodo.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({ ...currentTodo }),
      });

      router.refresh();
    }
  };

  const deleteTodoHandler = async () => {
    if (currentTodo.id) {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${currentTodo.id}`, {
        method: "DELETE",
      });

      router.push("/");
    }
  };

  return (
    <>
      <div
        className={clsx(
          "mt-6 flex w-full items-center justify-center tablet:border-2",
          "desktop:flex-row tablet:flex-col mobile:flex-col",
        )}
      >
        <ImageItem />
        <TodoMemo currentTodo={currentTodo} changeHandler={changeMemoHandler} />
      </div>
      <div
        className={clsx(
          "my-6 flex w-full items-center justify-end",
          "desktop:justify-end tablet:justify-center mobile:justify-center",
        )}
      >
        <div className="flex justify-items-end">
          <EditTodoButton
            isEdit={true}
            isComplete={todo.isCompleted}
            patchHandler={patchMemoHandler}
          />
          <EditTodoButton
            isEdit={false}
            isComplete={todo.isCompleted}
            deleteHandler={deleteTodoHandler}
          />
        </div>
      </div>
    </>
  );
}
