import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { PiCookingPotLight } from "react-icons/pi";
import { TbLogin } from "react-icons/tb";

export default function LandingLayout({ auth, children }) {
    const [cartDropdown, setCartDropdown] = useState(false);
    const [totalHarga, setTotalHarga] = useState(0);

    const formatMoney = (amount) => {
        const formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        });
    
        return formatter.format(amount);
    }

    useEffect(() => {
        let total = 0;
        auth.cart.forEach(data => {
            total += data.menu.harga * data.quantity;
        });
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
                                                Total : {formatMoney(totalHarga)}
                                            </div>
                                        </div>
                                        {auth.cart !== null && (
                                            auth.cart.map(data => (
                                                <div key={data.id} className="p-5" style={{ fontFamily: 'MyFont' }}>
                                                    <img className="aspect-square object-cover" src="https://blog.sribu.com/wp-content/uploads/2023/05/contoh-desain-produk-makanan.webp" alt=".." />
                                                    <div>
                                                        <h2>{data.menu.nama_menu}</h2>
                                                        <div>
                                                            <h2>Harga: Rp. {formatMoney(data.menu.harga)}</h2>
                                                            <h2>Quatity: {data.quantity}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                )}
                            </div>
                            <Link href="/logout">
                                <button className="border p-2 rounded-full border-black">
                                    <IoLogOutOutline size={25} />
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <Link href="/login">
                            <button className="border p-2 rounded-full border-black">
                                <TbLogin size={25} />
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