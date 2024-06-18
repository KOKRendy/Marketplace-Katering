import { useState } from "react";
import LandingLayout from "../Components/LandingLayout";
import ProductCard from "../Components/ProductCard";
import { router } from "@inertiajs/react";

export default function Search({ auth, menus }) {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        router.get('/search/', {search: search}, {preserveState: () => true});
    };

    return (
        <LandingLayout auth={auth}>
            <div>
                <div className="mb-10 space-y-5" style={{ fontFamily: 'MyFont' }}>
                    <h5 className="text-4xl font-bold text-stone-700 text-center">Search</h5>
                    <p className="text-center">Fitur pencarian yang disediakan pada aplikasi ini memungkinkan pengguna untuk dengan mudah menemukan informasi yang mereka butuhkan berdasarkan beberapa kriteria yang tersedia. Pengguna dapat mencari catering berdasarkan lokasi, nama produk makanan, nama pemilik catering, atau jenis makanan yang diinginkan.</p>
                    <form onSubmit={handleSearch}>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} style={{ fontFamily: 'MyFont' }} className="border border-black p-3 px-4 w-full rounded-md outline-none text-sm" placeholder="Masukkan keyword" />
                    </form>
                </div>

                <section className="grid grid-cols-3 gap-5">
                    {menus.map(data => (
                        <ProductCard key={data.id} data={data} />
                    ))}
                </section>
            </div>
        </LandingLayout>
    )
}