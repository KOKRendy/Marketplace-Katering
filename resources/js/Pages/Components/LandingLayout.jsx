import { Link } from "@inertiajs/react";
import { CiShoppingCart } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { PiCookingPotLight } from "react-icons/pi";

export default function LandingLayout({ children }) {
    return (
        <main>
            <nav className="w-full h-[70px] bg-white fixed flex items-center border-b border-black z-10">
                <Link href="/">
                    <div className="h-[70px] w-[70px] border-r border-black flex justify-center items-center">
                        <PiCookingPotLight size={25} />
                    </div>
                </Link>
                <div className="flex items-center justify-between w-full px-10">
                    <div>
                        <ul style={{ fontFamily: 'MyFont' }} className="flex text-xl gap-10 items-center">
                            <li>
                                <Link href="/">
                                    Caterings
                                </Link>
                            </li>
                            <li>
                                <Link href="/search">
                                    Search
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-x-5">
                        <button className="border p-2 rounded-full border-black">
                            <CiShoppingCart size={25} />
                        </button>
                        <button className="border p-2 rounded-full border-black">
                            <IoLogOutOutline size={25} />
                        </button>
                    </div>
                </div>
            </nav>
            <section className="pt-[150px] pb-[150px] px-[80px]">
                {children}
            </section>
        </main>
    )
}