
import Label from "@/components/Label";
import SearchWidget from "@/widget/SearchWidget";

// async function fetchTodos () {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`);
//   return await response.json();
// }

export default function Home() {

  return (
    <>
    <SearchWidget />
    <Label title="투두"/>
    </>
  );
}
