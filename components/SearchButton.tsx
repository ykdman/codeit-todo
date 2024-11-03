"use client"
export default function SearchButton ({name, clickHandler} : {name : string, clickHandler : (name : string) => void}) {


  return (
    <div className="desktop:col-start-11 tablet:col-start-7 mobile:col-start-4 row-start-2 -col-end-1 flex flex-col items-center justify-center">
    <button onClick={async () => await clickHandler(name)} className="w-full py-4 border-2 border-[#000] search-shadow rounded-3xl text-xl ">+ 추가하기</button>
  </div> 
  )
}
