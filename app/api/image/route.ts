import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log(request);
  const body = await request.json();
  console.log("이미지 업로드 요청:", body);
  try {
    const response = await fetch(
      "https://assignment-todolist-api.vercel.app/api/kd0211/images/upload",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ ...body }),
      },
    );

    if (response.ok) {
      const result = await response.json();
      console.log("이미지 업로드 성공:", result);
      return NextResponse.json(result, { status: 200 });
    } else {
      console.error("이미지 업로드 실패:", response);
      return NextResponse.json(
        { message: "이미지 업로드 실패" },
        { status: 400 },
      );
    }
  } catch (error) {
    console.error("이미지 업로드 중 오류 발생:", error);
  }
}
