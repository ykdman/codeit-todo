import { CreateTodoItemDto } from "@/dto";
import { Todo } from "@/types";

export async function getTodos()  : Promise<Todo[] | []>{
  const todos = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/`);

  const response = await todos.json();

  return response;
}

export async function createTodo({name} : CreateTodoItemDto) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
    headers : {
      "Content-Type" : "application/json"
    },
    method : "POST",
    body : JSON.stringify({name}),
  })

  if (response.status === 400) {
    return {message : "name 이 필요합니다."};
  }
  
  return response.json();
}

export async function getTodoById( {id} : {id : number}) : Promise<Todo | null>{
  const todo = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`);

  if (todo.status === 404) {
    return null;
  }

  return await todo.json();
}

export async function updateTodoById(todo : Todo) {
  console.log("리얼서버", todo)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/${todo.id}`, {
    headers : {
      "Content-Type" : "application/json"
    },
    method : "PATCH",
    body : JSON.stringify({name : todo.name, memo:todo.memo, imageUrl:todo.imageUrl, isCompleted:todo.isCompleted}),
  })

  if (response.status === 404) {
    return {message : "해당 id를 가진 todo가 없습니다."};
  }

  return response.json();
}

export async function deleteTodoById({id} : {id : number}) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`, {
    method : "DELETE",
  });

  if (response.status === 404) {
    return {message : "해당 id를 가진 todo가 없습니다."};
  }

  return response.json();
}