import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { rupiah } from "../../utils/rupiah";
import { router } from "@inertiajs/react";

export default function ProductCard({ data }) {

    const starTrue = Math.floor(data.ratings_avg_rating);
    const starFalse = data.ratings_avg_rating % 1 !== 0;
    const totalStars = 5;

    const addToCart = () => {
        router.post('cart/store', {
            menus_id: data.id,
            quantity: 1,
        }, { preserveState: () => true, preserveScroll: () => true });
    };

    return (
        <button onClick={addToCart}>
            <div className="p-[35px] border border-black">
                <div className="relative">
                    <div className="hover:bg-black/50 opacity-0 hover:opacity-100 absolute top-0 bottom-0 right-0 left-0 transition-all duration-500 flex items-end w-full">
                        <div className="border-b border-white w-full mb-10 mx-5 flex items-center justify-between">
                            <MdAddShoppingCart className="text-white absolute right-0 left-0 mr-auto ml-auto top-[50%]" size={30} />
                            <div>
                                <h2 style={{ fontFamily: 'MyFont' }} className="text-white w-full font-bold text-xl text-start">{data.nama_menu}</h2>
                                <h2 style={{ fontFamily: 'MyFont' }} className="text-white w-full text-start">{data.merchant.nama_perusahaan}</h2>
                            </div>
                            <div className="flex items-center">
                                {[...Array(totalStars)].map((_, index) => {
                                    if (index < starTrue) {
                                        return <IoMdStar key={index} className="text-white" size={20} />;
                                    } else if (index === starTrue && starFalse) {
                                        return <IoMdStar key={index} className="text-white half-filled" size={20} />;
                                    } else {
                                        return <IoMdStarOutline key={index} className="text-white" size={20} />;
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                    <img className="aspect-[4/5] object-cover" src={data.foto} alt=".." />
                </div>
                <h5 style={{ fontFamily: 'MyFont' }} className="mt-3">{rupiah(data.harga)}/Pcs</h5>
            </div>
        </button>
    )
}