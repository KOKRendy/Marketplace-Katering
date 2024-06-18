import { Link } from "@inertiajs/react";
import MerchantLayout from "../Components/MerchantLayout";
import { rupiah } from "../../utils/rupiah";

export default function Merchant({ menus }) {
    return (
        <MerchantLayout>
            <div className="flex items-center justify-between mb-10">
                <h1 className="text-2xl">List Menu</h1>
                <Link href="/buat-menu">
                    <button className="border px-10 py-2 rounded-md bg-white hover:bg-gray-100 duration-500 ">Buat Menu</button>
                </Link>
            </div>

            <div className="bg-white w-full p-5">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="py-5 border-b">Nama Menu</th>
                            <th className="py-5 border-b">Gambar Menu</th>
                            <th className="py-5 border-b">Jenis Makanan</th>
                            <th className="py-5 border-b">Deskripsi</th>
                            <th className="py-5 border-b">Harga Menu</th>
                            <th className="py-5 border-b">Keuntungan Menu</th>
                            <th className="py-5 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menus.map(data => (
                            <tr key={data.id} className="text-center">
                                <td className="py-5 border-b text-sm">Ayam</td>
                                <td className="py-5 border-b text-sm flex justify-center">
                                    <img className="h-[70px] w-[70px] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2cmsdMRKidfQwCspjcpiTkxBfRqAGaeT9Bw&s" alt=".." />
                                </td>
                                <td className="py-5 border-b text-sm">Makanan Berat</td>
                                <td className="py-5 border-b text-sm">...</td>
                                <td className="py-5 border-b text-sm">{rupiah(14000)}</td>
                                <td className="py-5 border-b text-sm">{rupiah(4000)}</td>
                                <td className="py-5 border-b text-sm">
                                    <div className="flex justify-center items-center gap-5">
                                        <button className="px-5 py-1 border rounded-md">Edit</button>
                                        <button className="px-5 py-1 border rounded-md">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {menus.length === 0 && <td colSpan={7} className="text-center py-5">Tidak ada menu</td>}
                    </tbody>
                </table>
            </div>
        </MerchantLayout>
    )
}