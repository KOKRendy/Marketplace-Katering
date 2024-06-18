import { Link } from "@inertiajs/react";

export default function MerchantLayout({ children }) {
    return (
        <main>
            <nav className="border-b p-5 border-black flex px-[150px] fixed w-full bg-white">
                <div className="flex justify-center items-center w-full">
                    <ul style={{ fontFamily: 'MyFont' }} className="flex gap-10 items-center">
                        <li>
                            <Link href="/merchant">Dashboad</Link>
                        </li>
                        <li>
                            <Link href="/menus">Menu</Link>
                        </li>
                        <li>
                            <Link href="/oder-lists">Daftar Order</Link>
                        </li>
                        <li>
                            <Link href="/profile-merchant">Profil Merchant</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="py-[100px] px-[150px]">
                {children}
            </section>
        </main>
    )
}