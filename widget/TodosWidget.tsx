import { TaskStatus } from "@/config/enum";
import { Todo } from "@/types";
import TodoSection from "@/components/TodoSection";


export default function TodosWidget ({todos} : {todos : Todo[] }) {
  
  const pendingTodos = todos.length > 0 ? todos.filter(todo => !todo.isCompleted) : [];
  const doneTodos = todos.length > 0 ? todos.filter(todo => todo.isCompleted) : [];

  return(
      <>
        <TodoSection taskTodos={pendingTodos} taskStatus={TaskStatus.todo}/>
        <TodoSection taskTodos={doneTodos} taskStatus={TaskStatus.done}/>
      </>
    
  )
}