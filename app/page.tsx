
import SearchWidget from "@/widget/SearchWidget";
import TodosWidget from "@/widget/TodosWidget";

async function fetchTodos () {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`);
  return await response.json();
}

export default async function HomePage() {
  const todos = await fetchTodos();
  
  return (
    <>
    <SearchWidget />
    <TodosWidget todos={todos ?? []}/>
    </>
  );
}
