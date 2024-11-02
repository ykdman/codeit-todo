import Logo from "./Logo";


export default function Header () {
  return (
    <header className="w-full flex flex-col px-6 py-[10px]">
      <div className="flex items-center justify-start">
        <Logo/>
      </div>
      <hr />
    </header>
  )
  
}