import { deleteTodoById, getTodoById, updateTodoById } from "@/hooks/todo-api";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request : NextRequest, {params} : {params : {id : number}}) {
  const {id} = await params;
  
  const patchData = await request.json();

  console.log("서버",patchData);

  const response = await updateTodoById({...patchData, id : Number(id)});
  
  return NextResponse.json(response, {status : 200});
}


export async function DELETE(request : NextRequest, {params} : {params : {id : number}}) {
  const {id} = await params;

  const response = await deleteTodoById({id : Number(id)});

  return NextResponse.json(response, {status : 200});
}

export async function GET(request : NextRequest , {params} : {params : {id : number}}) {
  const {id} = await params;
  console.log("서버",id);

  const response = await getTodoById({id : Number(id)});

  return NextResponse.json(response, {status : 200});
}