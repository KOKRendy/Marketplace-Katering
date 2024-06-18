import { Link } from "@inertiajs/react";
import MerchantLayout from "../Components/MerchantLayout";
import { rupiah } from "../../utils/rupiah";

export default function Order({ orders }) {
    return (
        <MerchantLayout>
            <div className="flex items-center justify-between mb-10">
                <h1 className="text-2xl">List Order</h1>
            </div>

            <div className="bg-white w-full p-5">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="py-5 border-b">Nama Pembeli</th>
                            <th className="py-5 border-b">Email Pembeli</th>
                            <th className="py-5 border-b">Total Pembelian</th>
                            <th className="py-5 border-b">Status Pembelian</th>
                            <th className="py-5 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(data => (
                            <tr key={data.id} className="text-center">
                                <td className="py-5 border-b text-sm">Jamals</td>
                                <td className="py-5 border-b text-sm">jamals@gmails.com</td>
                                <td className="py-5 border-b text-sm">{rupiah(550000)}</td>
                                <td className="py-5 border-b text-sm">Pending</td>
                                <td className="py-5 border-b text-sm">
                                    <div className="flex justify-center items-center gap-5">
                                        <button className="px-5 py-1 border rounded-md">Edit</button>
                                        <button className="px-5 py-1 border rounded-md">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {orders.length === 0 && <td colSpan={5} className="text-center py-5">Tidak ada menu</td>}
                    </tbody>
                </table>
            </div>
        </MerchantLayout>
    )
}