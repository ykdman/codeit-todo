import TodoItemDetail from "@/components/TodoItemDetail";
import DetailWidget from "@/widget/DetailWidget";

async function fetchTodo(id: number) {
  console.log(id);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${id}`, {
    cache: "no-cache",
  });
  return await res.json();
}

export default async function ItemPage({ params }: { params: { id: number } }) {
  const { id } = await params;
  const todo = await fetchTodo(Number(id));

  return (
    <>
      <TodoItemDetail todo={todo} />
      <section className="w-full desktop:col-start-2 desktop:-col-end-2 tablet:col-start-1 tablet:-col-end-1 mobile:col-start-1 mobile:-col-end-1">
        <DetailWidget todo={todo ?? null} />
      </section>
    </>
  );
}
