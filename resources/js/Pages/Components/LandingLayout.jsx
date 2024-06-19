import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { PiCookingPotLight } from "react-icons/pi";
import { rupiah } from "../../utils/rupiah";
import { CiLogout } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { LiaFileInvoiceSolid } from "react-icons/lia";

export default function LandingLayout({ auth, children }) {
    const [cartDropdown, setCartDropdown] = useState(false);
    const [totalHarga, setTotalHarga] = useState(0);

    useEffect(() => {
        let total = 0;

        if (auth.cart) {
            auth.cart.forEach(data => {
                total += data.menu.harga * data.quantity;
            });
        }
        
        setTotalHarga(total);
    }, [auth.cart]);

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
                            <li>
                                <Link href="/ulasan">
                                    Ulasan
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {auth.user ? (
                        <div className="space-x-5 flex items-center">
                            <div className="relative">
                                <button onClick={() => setCartDropdown(!cartDropdown)} className="border p-2 rounded-full border-black">
                                    <CiShoppingCart size={25} />
                                </button>
                                {cartDropdown && (
                                    <div className="absolute right-0 top-[50px] w-[250px] h-[500px] shadow-md bg-white overflow-y-auto">
                                        <div className="border-b flex items-center justify-between p-5">
                                            <div className="flex items-center gap-2">
                                                <CiShoppingCart size={25} />
                                                <div className="bg-gray-100 rounded-full h-[20px] w-[20px] text-sm text-center">{auth.cart.length}</div>
                                            </div>
                                            <div className="text-sm">
                                                Total : {rupiah(totalHarga)}
                                            </div>
                                        </div>
                                        {auth.cart !== null && (
                                            auth.cart.map(data => (
                                                <div key={data.id} className="p-5" style={{ fontFamily: 'MyFont' }}>
                                                    <img className="aspect-square object-cover" src={data.menu.foto} alt=".." />
                                                    <div>
                                                        <h2>{data.menu.nama_menu}</h2>
                                                        <div>
                                                            <h2>Harga: Rp. {rupiah(data.menu.harga)}</h2>
                                                            <h2>Quatity: {data.quantity}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                        <div className="border-t flex items-center justify-between p-5">
                                            <Link className="w-full" href="/checkout">
                                                <button className="border w-full p-2 rounded-md bg-black text-white">
                                                    Checkout
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Link href="/invoice">
                                <button className="border p-2 rounded-full border-black">
                                    <LiaFileInvoiceSolid size={25} />
                                </button>
                            </Link>
                            <Link href="/logout">
                                <button className="border p-2 rounded-full border-black">
                                    <CiLogout size={25} />
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <Link href="/login">
                            <button className="border p-2 rounded-full border-black">
                                <CiLogin size={25} />
                            </button>
                        </Link>
                    )}
                </div>
            </nav>
            <section className="pt-[150px] pb-[150px] px-[80px]">
                {children}
            </section>
        </main>
    )
}