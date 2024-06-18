import LandingLayout from "../Components/LandingLayout";
import ProductCard from "../Components/ProductCard";

export default function Search({ auth }) {
    return (
        <LandingLayout auth={auth}>
            <div>
                <div className="mb-10 space-y-5" style={{ fontFamily: 'MyFont' }}>
                    <h5 className="text-4xl font-bold text-stone-700 text-center">Search</h5>
                    <p className="text-center">Fitur pencarian yang disediakan pada aplikasi ini memungkinkan pengguna untuk dengan mudah menemukan informasi yang mereka butuhkan berdasarkan beberapa kriteria yang tersedia. Pengguna dapat mencari catering berdasarkan lokasi, nama produk makanan, nama pemilik catering, atau jenis makanan yang diinginkan.</p>
                    <input style={{ fontFamily: 'MyFont' }} className="border border-black p-3 px-4 w-full rounded-md outline-none text-sm" placeholder="Masukkan keyword" />
                </div>

                <section className="grid grid-cols-3 gap-5">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </section>
            </div>
        </LandingLayout>
    )
}