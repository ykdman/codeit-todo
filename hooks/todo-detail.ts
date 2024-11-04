import { useEffect, useState } from "react";
import { getTodoById } from "./todo-api";
import { Todo } from "@/types";

export const useTodo = ({id} : {id : number}) => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getTodoById({id})
      .then((response) => {
        if (response === null) {
          setError("해당 id를 가진 todo가 없습니다.");
        } else {
          setTodo(response);
        }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return {todo, loading, error};
}