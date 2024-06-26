import { Link } from "@inertiajs/react";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineFastfood } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { RiProfileLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { PiCookingPotLight } from "react-icons/pi";

export default function MerchantLayout({ children }) {
    return (
        <main style={{ fontFamily: 'MyFont' }}>
            <div className="fixed bg-white h-screen w-[70px] border-r flex flex-col justify-between">
                <div>
                    <div className="flex flex-col items-center gap-[35px] text-gray-500 py-10">
                        <Link href="/merchant">
                            <LuLayoutDashboard size={20} />
                        </Link>
                        <Link href="/menu">
                            <MdOutlineFastfood size={20} />
                        </Link>
                        <Link href="/order">
                            <LuClipboardList size={20} />
                        </Link>
                        <Link href="/profil-merchant">
                            <RiProfileLine size={20} />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-10 text-gray-500 py-10">
                    <Link href="/logout">
                        <LuLogOut size={20} />
                    </Link>
                </div>
            </div>

            <section className="py-[50px] pl-[110px] pr-[40px] bg-gray-50 min-h-screen">
                {children}
            </section>
        </main>
    )
}