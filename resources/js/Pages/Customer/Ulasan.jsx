import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import LandingLayout from "../Components/LandingLayout";
import { useState } from "react";
import { router } from "@inertiajs/react";

export default function Ulasan({ auth, myOrder }) {
    const Card = ({ data }) => {
        const [rating, setRating] = useState(0);

        const handleRating = (menu_id, rating) => {
            router.post('/ulasan/store', { menu_id: menu_id, rating: rating }, { preserveState: () => true, preserveScroll: () => true });
        }

        return (
            <button>
                <div className="p-[35px] border border-black">
                    <div className="relative">
                        <div className="hover:bg-black/50 opacity-0 hover:opacity-100 z-20 absolute top-0 bottom-0 right-0 left-0 transition-all duration-500 flex items-end w-full">
                            <div className="border-b border-white w-full mb-10 mx-5 flex items-center justify-between">
                                <div>
                                    <h2 style={{ fontFamily: 'MyFont' }} className="text-white w-full font-bold text-xl text-start">{data.menu.nama_menu}</h2>
                                    <h2 style={{ fontFamily: 'MyFont' }} className="text-white w-full text-start">{data.menu.merchant.nama_perusahaan}</h2>
                                </div>
                                <div className="flex justify-center items-center text-white absolute right-0 left-0 mr-auto ml-auto top-[50%]">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            onClick={() => [setRating(star), handleRating(data.menu.id, star)]}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {star <= rating ? (
                                                <IoMdStar className="text-white" size={30} />
                                            ) : (
                                                <IoMdStarOutline className="text-white" size={30} />
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <img src={data.menu.foto} className="aspect-[4/5] object-cover" alt=".." />
                    </div>
                </div>
            </button>
        )
    }
    return (
        <LandingLayout auth={auth}>
            <h1 style={{ fontFamily: 'MyFont' }} className="text-4xl font-bold text-stone-700 mb-5">
                Ulasan Menu
            </h1>
            <p className="mb-10">Halaman ulasan ini memungkinkan pengguna untuk memberikan rating dan ulasan kepada menu. Customer dapat memberikan ulasan berdasarkan nama menu, nama pemilik catering, jenis makanan, dan memberikan rating terhadap produk yang telah customer beli.</p>


            <div className="grid grid-cols-3 gap-5">
                {myOrder && (
                    myOrder.items.map(data => (
                        <Card key={data.id} data={data} />
                    ))
                )}
            </div>
        </LandingLayout>
    )
}