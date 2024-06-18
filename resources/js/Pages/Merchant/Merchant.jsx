import { rupiah } from "../../utils/rupiah";
import MerchantLayout from "../Components/MerchantLayout";

export default function Merchant({ orders, overview }) {
    return (
        <MerchantLayout>
            <div className="mb-10">
                <h1 className="text-2xl font-bold">Overview</h1>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center mb-10">
                <div className="border p-5 rounded-md">
                    <h5 className="text-gray-400">Total Menu</h5>
                    <h1 className="text-xl">{overview.total_menu} Menu</h1>
                </div>
                <div className="border p-5 rounded-md">
                    <h5 className="text-gray-400">Total Penjualan</h5>
                    <h1 className="text-xl">{overview.total_penjualan} Penjualan</h1>
                </div>
                <div className="border p-5 rounded-md">
                    <h5 className="text-gray-400">Total Uang Penjualan</h5>
                    <h1 className="text-xl">{rupiah(overview.total_uang_penjualan)}</h1>
                </div>
                <div className="border p-5 rounded-md">
                    <h5 className="text-gray-400">Total Uang Keuntungan</h5>
                    <h1 className="text-xl">{rupiah(overview.total_uang_keuntungan)}</h1>
                </div>
            </div>

            <div className="grid grid-cols-3">
                {orders.map(data => (
                    <div key={data.id} className="border">
                        <h5>Id</h5>
                        <h5>User</h5>
                        <h5>Total Pembelian</h5>
                        <h5>Status Pembelian</h5>
                    </div>
                ))}
            </div>
        </MerchantLayout>
    )
}