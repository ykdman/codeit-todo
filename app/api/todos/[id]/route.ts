import { deleteTodoById, updateTodoById } from "@/hooks/todo-api";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request : NextRequest, {params} : {params : {id : number}}) {
  const {id} = await params;
  
  const patchData = await request.json();

  const response = await updateTodoById({...patchData, id : Number(id)});
  
  return NextResponse.json(response, {status : 200});
}


export async function DELETE(request : NextRequest, {params} : {params : {id : number}}) {
  const {id} = await params;

  const response = await deleteTodoById({id : Number(id)});

  return NextResponse.json(response, {status : 200});
}