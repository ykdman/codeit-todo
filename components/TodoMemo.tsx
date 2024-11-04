"use client";

import { Todo } from "@/types";

export default function TodoMemo({
  changeHandler,
  currentTodo,
}: {
  changeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  currentTodo: Todo | null;
}) {
  return (
    <div className="flex h-80 flex-col items-center rounded-3xl bg-amber-100 mobile:w-full tablet:w-full desktop:w-4/6">
      <span className="mb-4 mt-6 font-bold text-amber-800">Memo</span>

      <textarea
        className="w-full resize-none bg-transparent px-2 outline-none"
        onChange={changeHandler}
        value={currentTodo?.memo ?? ""}
        rows={10}
      />
    </div>
  );
}
