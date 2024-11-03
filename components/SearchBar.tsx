"use client"
export default function Searchbar ({changeHandler, todoName} : {changeHandler : (e : React.ChangeEvent<HTMLInputElement>) => void, todoName : string}) {
  return (
    <div className=" row-start-2 col-start-1 desktop:col-end-11 tablet:col-end-7 mobile:col-end-4 pt-6 flex flex-col items-start justify-start">
          <input name="search-input" onChange={changeHandler} value={todoName} className="w-full h-14 bg-[#F1F5F9] border-2 border-black rounded-[23px] px-6 focus:outline-none  font-bold focus:ring-[#0F172A] search-shadow" type="text" placeholder="할 일을 입력해주세요"/>
      </div>
    
  )


}