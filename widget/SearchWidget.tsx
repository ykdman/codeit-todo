"use client";

import Searchbar from "@/components/SearchBar";
import SearchButton from "@/components/SearchButton";
import {  useState } from "react"

export default function SearchWidget() {
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