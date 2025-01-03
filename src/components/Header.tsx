import { useSearchStore } from "../store"

const Header = () => {
  const inputValue = useSearchStore((state)=> state.inputValue)
  const setInputValue = useSearchStore((state)=> state.setInputValue)
  return (
    <header className="flex justify-between bg-[#417ed9] py-4 px-6 rounded-lg">
        <h1 className="font-bold">Movies DB</h1>

        <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)} type="text" placeholder="Search Movie" className="placeholder:text-[#adb5bd] outline-none w-[350px] py-1 px-2 rounded-md bg-[#50a4f2]" />

        <span>Found {0} result</span>
    </header>
  )
}

export default Header