import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";

export default function ProductCard() {
    return (
        <div>
            <div className="p-[35px] border border-black">
                <div className="relative">
                    <div className="hover:bg-black/50 hover:scale-95 opacity-0 hover:opacity-100 absolute top-0 bottom-0 right-0 left-0 transition-all duration-500 flex items-end w-full">
                        <div className="border-b border-white w-full mb-10 mx-5 flex items-center justify-between">
                            <MdAddShoppingCart className="text-white absolute right-0 left-0 mr-auto ml-auto top-[50%]" size={30}/>
                            <div>
                                <h2 style={{ fontFamily: 'MyFont' }} className="text-white w-full font-bold text-xl">Nasi Ayam</h2>
                                <h2 style={{ fontFamily: 'MyFont' }} className="text-white w-full">Izza Catering</h2>
                            </div>
                            <div className="flex items-center">
                                <IoMdStar className="text-white" size={20} />
                                <IoMdStar className="text-white" size={20} />
                                <IoMdStar className="text-white" size={20} />
                                <IoMdStarOutline className="text-white" size={20} />
                                <IoMdStarOutline className="text-white" size={20} />
                            </div>
                        </div>
                    </div>
                    <img className="aspect-[4/5] object-cover" src="https://cdn.prod.website-files.com/6018a0179bd8f63d255da2c5/664e7dcb4e0e9e161b537243_DSCF6241-p-500.jpg" alt=".." />
                </div>
                <h5 style={{ fontFamily: 'MyFont' }} className="mt-3">Rp. 12.000/Pcs</h5>
            </div>
        </div>
    )
}