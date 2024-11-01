import { createTodo, getTodos } from "@/hooks/todo-api";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request : NextRequest) {
  const {name} = await request.json();
  const response = await createTodo({name}); 

  return NextResponse.json(response, {status : 201});
}

export async function GET() {
  const response = await getTodos();

  if (response.length === 0 ) {
    return NextResponse.json({message : "No todos found"}, {status : 204});
  }

  return NextResponse.json(response, {status : 200});
}

