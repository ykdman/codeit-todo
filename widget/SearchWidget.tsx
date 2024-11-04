"use client";

import { useRouter } from "next/navigation";
import { useState } from "react"
import Searchbar from "@/components/SearchBar";
import SearchButton from "@/components/SearchButton";

export default function SearchWidget() {
    const router = useRouter();
    const [newTodoName, setNewTodoname] = useState<string>("");

    const addTodoHandler = async (name : string) => {
      if (name === "" || name === undefined || name === null) {
        return;
      }
  
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({name})
      })
      
      router.refresh();
      setNewTodoname("");
    }

    const changeNewTodoName = (e : React.ChangeEvent<HTMLInputElement>) => {
      setNewTodoname(e.target.value);
    }



    return (
        <>
          <Searchbar changeHandler={changeNewTodoName} todoName={newTodoName}/>
          <SearchButton clickHandler={addTodoHandler} name={newTodoName}/>
        </>
    )
}