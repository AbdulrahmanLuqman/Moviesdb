import { useState } from "react"
import Logo from "../assets/logo.webp"
import { ArrowDownCircleIcon, MagnifyingGlassIcon, LanguageIcon, UserPlusIcon, UserCircleIcon, UserIcon, PlusIcon } from "@heroicons/react/20/solid"
import useOutsideClick from "./useOutSideClick"
import { ArrowRightEndOnRectangleIcon, StarIcon } from "@heroicons/react/24/outline"

interface Children {
    link: string,
    name: string
}
interface Navs {
    link: string | null,
    name: string,
    children: null | Children[]
}
const Navbar = () => {
    const NAVS:Navs[] = [
        {
            link: "/",
            name: "Home",
            children: null
        },
        {
            link: null,
            name: "Features",
            children: [
                {
                    link: "restricted",
                    name: "Restricted Content"
                },
                {
                    link: "restricted",
                    name: "Restricted Content"
                },
                {
                    link: "restricted",
                    name: "Restricted Content"
                },
                {
                    link: "restricted",
                    name: "Restricted Content"
                },
                {
                    link: "restricted",
                    name: "Restricted Content"
                },
                {
                    link: "restricted",
                    name: "Restricted Content"
                }
            ]
        },
        {
            link: null,
            name: "Pages",
            children: [
                {
                    link: "restricted",
                    name: "Restricted Content"
                },
                {
                    link: "restricted",
                    name: "Restricted Content"
                },
                {
                    link: "restricted",
                    name: "Restricted Content"
                },
                {
                    link: "restricted",
                    name: "Restricted Content"
                },
                {
                    link: "restricted",
                    name: "Restricted Content"
                },
                {
                    link: "restricted",
                    name: "Restricted Content"
                }
            ]
        },
        {
            link: "/",
            name: "Blog",
            children: null
        },
        {
            link: null,
            name: "Shop",
            children: [
                {
                    link: "restricted",
                    name: "Restricted Content"
                },
                {
                    link: "restricted",
                    name: "Restricted Content"
                },
                {
                    link: "restricted",
                    name: "Restricted Content"
                },
                {
                    link: "restricted",
                    name: "Restricted Content"
                },
                {
                    link: "restricted",
                    name: "Restricted Content"
                },
                {
                    link: "restricted",
                    name: "Restricted Content"
                }
            ]
        },
    ]
    const [isSearchOut, setIsSearchOut] = useState<boolean>(false)
    const [isLanguageOut, setIsLanguageOut] = useState<boolean>(false)
    const [isUserInfo, setIsUserInfo] = useState<boolean>(false)
    const [isSubNavOut, setIsSubNavOut] = useState<boolean>(false)

    const menuRef = useOutsideClick(()=> setIsLanguageOut(false))
    const userRef = useOutsideClick(()=> setIsUserInfo(false))
    console.log(isLanguageOut)

  return (
    <header className="px-6 py-2 flex items-center justify-between bg-black shadow shadow-white">
        <img src={Logo} alt="Logo" className="w-40 cursor-pointer" />

        <nav>
            <ul className="flex gap-10">
                {NAVS.map((nav, index) => <li key={index} className="flex gap-1 items-center w-fit cursor-pointer">
                    <span onClick={()=> setIsSubNavOut(true)} className="font-semibold">{nav.name}</span>
                    {nav.children &&
                    <>
                        <ArrowDownCircleIcon className="w-3 h-3" />
                        <ul>
                            {isSubNavOut && nav.children.map((subNav, index)=> <li key={index}>{subNav.name}</li>)}
                        </ul>
                    </>
                    }
                </li>)}
            </ul>
        </nav>

        <div className="flex gap-5 items-center">
            <div className={`w-7 h-7 flex items-center relative ${!isSearchOut ? "overflow-hidden" : ""}`}>
                {/* <span className="w-7 h-7"></span> */}
                <div className={`flex items-center absolute transition-all duration-700 ${isSearchOut ? "right-0" : "right-[-206px]"}`}>
                    <MagnifyingGlassIcon onClick={()=> setIsSearchOut(!isSearchOut)} className="w-5 h-5 cursor-pointer" />
                    <input type="text" placeholder="Search..." className="outline-none py-1 px-3 bg-transparent" />
                </div>
            </div>
            <div className="relative">
                <LanguageIcon onClick={()=> setIsLanguageOut((prev) => !prev)} className={`w-5 h-5 cursor-pointer ${isLanguageOut ? "text-red-500 hidden" : "text-white"}`} />
                <LanguageIcon onClick={()=> setIsLanguageOut((prev) => !prev)} className={`w-5 h-5 cursor-pointer ${isLanguageOut ? "text-red-500" : "text-white hidden"}`} />
                {
                    isLanguageOut && <div ref={menuRef} className="absolute bg-black rounded-md shadow shadow-gray-500 w-32 flex flex-col right-0">
                        <button className="hover:bg-[whitesmoke] hover:text-red-500 transition-all duration-500 w-full px-4 py-2 text-start">en</button>
                        <button className="hover:bg-[whitesmoke] hover:text-red-500 transition-all duration-500 w-full px-4 py-2 text-start">ar</button>
                        <button className="hover:bg-[whitesmoke] hover:text-red-500 transition-all duration-500 w-full px-4 py-2 text-start">fr</button>
                    </div>
                }
            </div>
            <div className="relative">
                <UserPlusIcon onClick={()=> setIsUserInfo((prev)=> !prev)} className={`w-5 h-5 cursor-pointer ${isUserInfo ? "text-red-500 hidden" : "text-white"}`} />
                <UserPlusIcon onClick={()=> setIsUserInfo((prev)=> !prev)} className={`w-5 h-5 cursor-pointer ${isUserInfo ? "text-red-500" : "text-white hidden"}`} />
                {
                    isUserInfo && <div ref={userRef} className="absolute bg-black rounded-md shadow shadow-gray-500 w-64 flex flex-col items-start pt-2 gap-4 right-0">
                        <button className="flex items-center gap-3 border-b border-gray-700 w-full p-4">
                            <UserCircleIcon className="w-10 h-10" />
                            <span className="text-sm font-semibold">CodeKage</span>
                        </button>
                        <div>
                            <button className="flex items-center gap-3 px-6 py-3 hover:text-red-500">
                                <UserIcon className="w-5 h-5" />
                                <span className="text-sm">My Account</span>
                            </button>
                            <button className="flex items-center gap-3 px-6 py-3 hover:text-red-500">
                                <PlusIcon className="w-5 h-5" />
                                <span className="text-sm">Watchlist</span>
                            </button>
                            <button className="flex items-center gap-3 px-6 py-3 hover:text-red-500">
                                <StarIcon className="w-5 h-5" />
                                <span className="text-sm">Subscription</span>
                            </button>
                        </div>
                        <button className="w-full flex items-center gap-2 justify-center bg-[#141314] py-2 hover:text-red-500">
                            <ArrowRightEndOnRectangleIcon className="w-5 h-5" />
                            <span>Logout</span>
                        </button>
                    </div>
                }
            </div>
        </div>
    </header>
  )
}

export default Navbar