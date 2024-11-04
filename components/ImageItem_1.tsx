"use client";
import BlankSvg from "@/public/blank-img.svg"
import AddImgButtonSvg from "@/public/img-add-btn.svg"

export default function ImageItem () {
  return (
    <div className="border-2 border-dashed border-grey-200 flex flex-col items-center justify-center w-full h-80 rounded-3xl bg-grey-100 relative">
      <BlankSvg />
      <button className="absolute bottom-4 right-4">
        <AddImgButtonSvg />
      </button>
    </div>
  )
} 