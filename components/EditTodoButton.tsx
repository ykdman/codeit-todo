"use client";

import CheckSvg from "@/public/edit-check.svg";
import clsx from "clsx";

export default function EditTodoButton({
  isEdit,
  isComplete,
  patchHandler,
  deleteHandler,
}: {
  isEdit: boolean;
  isComplete: boolean;
  patchHandler?: () => void;
  deleteHandler?: () => void;
}) {
  return (
    <button
      className={clsx(
        "search-shadow flex h-14 w-40 items-center justify-center rounded-3xl border-2 border-black font-bold",
        {
          "bg-lime-300": isEdit && isComplete,
          "bg-slate-200": isEdit && !isComplete,
          "bg-rose-500": !isEdit,
        },
      )}
      onClick={isEdit ? patchHandler : deleteHandler}
    >
      <CheckSvg />
      <span className="ml-1 font-bold">
        {isEdit && "수정 완료"}
        {!isEdit && "삭제하기"}
      </span>
    </button>
  );
}
