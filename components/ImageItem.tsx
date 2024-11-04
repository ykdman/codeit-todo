import BlankSvg from "@/public/blank-img.svg";
import AddImgButtonSvg from "@/public/img-add-btn.svg";
import { Todo } from "@/types";
import Image from "next/image";

export default function ImageItem({
  currentTodo,
  imageHanlder,
}: {
  currentTodo: Todo;
  imageHanlder: (url: string) => void;
}) {
  console.log("이미지", currentTodo);
  // 파일 선택 및 업로드 핸들러
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    console.log("파일존재 ?", file);
    if (file) {
      const formData = new FormData();
      formData.append("image", file); // 'image'는 서버에서 기대하는 필드 이름

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/images/upload`,
          {
            method: "POST",
            body: formData,
          },
        );

        if (response.ok) {
          const result = await response.json();
          console.log("이미지 업로드 성공:", result);
          imageHanlder(result.url);
        } else {
          console.error("이미지 업로드 실패:", response.statusText);
        }
      } catch (error) {
        console.error("이미지 업로드 중 오류 발생:", error);
      }
    }
  };
  // 파일 선택 창 열기
  const handleButtonClick = () => {
    document.getElementById("fileInput")!.click();
  };

  return (
    <div className="relative flex h-80 w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-grey-200 bg-grey-100 desktop:mr-6 desktop:w-2/6 tablet:w-full mobile:w-full">
      {currentTodo.imageUrl !== "" && currentTodo.imageUrl !== null ? (
        <Image
          src={currentTodo.imageUrl || ""}
          alt="myimage"
          width={300}
          height={300}
        />
      ) : (
        <BlankSvg />
      )}
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
      <button className="absolute bottom-4 right-4" onClick={handleButtonClick}>
        <AddImgButtonSvg />
      </button>
    </div>
  );
}
