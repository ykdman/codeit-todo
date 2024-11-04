import BlankSvg from "@/public/blank-img.svg";
import AddImgButtonSvg from "@/public/img-add-btn.svg";
export default function ImageItem() {
  return (
    <div className="relative flex h-80 w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-grey-200 bg-grey-100 desktop:mr-6 desktop:w-2/6 tablet:w-full mobile:w-full">
      <BlankSvg />
      <button className="absolute bottom-4 right-4">
        <AddImgButtonSvg />
      </button>
    </div>
  );
}
