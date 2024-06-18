import { Link } from "@inertiajs/react";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineFastfood } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { RiProfileLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";

export default function MerchantLayout({ children }) {
    return (
        <main style={{fontFamily: 'MyFont'}}>
            <div className="fixed h-screen w-[70px] border-r flex flex-col justify-between">
                <div>
                    <div className="flex justify-center items-center py-5">
                        <img className="object-cover h-[50px] w-[50px] rounded-full border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPSX6rnIejKF6jwH56EVGfSiimk09IYi1JAIYmSIf4Z__hXs-jP8RHKlbVc4GhSVyM_Ns&usqp=CAU" alt=".." />
                    </div>
                    <div className="flex flex-col items-center gap-[35px] text-gray-500">
                        <Link href="/merchant">
                            <LuLayoutDashboard size={20} />
                        </Link>
                        <Link href="/menu">
                            <MdOutlineFastfood size={20} />
                        </Link>
                        <Link href="/order">
                            <LuClipboardList size={20} />
                        </Link>
                        <Link href="/profil-perusahaan">
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

            <section className="pl-[70px] pt-[50px]">
                {children}
            </section>
        </main>
    )
}