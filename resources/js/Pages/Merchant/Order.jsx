import { Link, router } from "@inertiajs/react";
import MerchantLayout from "../Components/MerchantLayout";
import { rupiah } from "../../utils/rupiah";
import Dropdown from "../Components/Dropdown";

export default function Order({ orders, merchant, urlInvoice }) {
    const changeStatus = (status, order_id) => {
        router.post('/order/change-status', { status: status, order_id: order_id }, { preserveState: () => true });
    };

    const submitToWhatsapp = (number, order) => {
        if (number.startsWith('0')) {
            number = '62' + number.slice(1);
        }
        
        let itemList = order.items.map(item =>
            `Nama Menu: ${item.nama_menu}\nHarga: Rp${item.harga.toLocaleString()}\nQuantity: ${item.quantity}`
        ).join('\n\n');

        const msg = encodeURIComponent(
            `Halo, terima kasih telah menghubungi ${merchant.nama_perusahaan}.\n\nBerikut adalah rincian pesanan Anda:\n\n${itemList}\n\nTotal Pembelian: Rp${order.total_pembelian.toLocaleString()}\n\nUntuk informasi lebih lanjut atau untuk konfirmasi, silakan balas pesan ini atau akses link ini ${urlInvoice}.\n\nTerima kasih,\n${merchant.user.name}\n${merchant.nama_perusahaan}\n${merchant.alamat}`
        );

        const urlToWhatsapp = `https://wa.me/${number}?text=${msg}`;

        window.open(urlToWhatsapp, "_blank");
    };

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
                                <td className="py-5 border-b text-sm">{data.user.name}</td>
                                <td className="py-5 border-b text-sm">{data.user.email}</td>
                                <td className="py-5 border-b text-sm">{rupiah(data.total_pembelian)}</td>
                                <td className="py-5 border-b text-sm">{data.status_pembelian}</td>
                                <td className="py-5 border-b text-sm">
                                    <div className="flex justify-center items-center gap-5">
                                        <Dropdown text="Lihat Item">
                                            <div className="bg-white p-2 px-10 w-max shadow-md rounded text-start">
                                                {data.items.map(data => (
                                                    <Link href={`/show-menu/${data.menu_id}`}>
                                                        <div key={data.id} className="py-3 flex items-center gap-5">
                                                            <h5>{data.nama_menu}</h5>
                                                            <h5>Qty: {data.quantity}</h5>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </Dropdown>
                                        <Dropdown text="Edit">
                                            <ul className="w-max rounded-md bg-white shadow-md">
                                                <li>
                                                    <button onClick={() => changeStatus('Dalam Proses Pembuatan', data.id)} className={`${data.status_pembelian === 'Dalam Proses Pembuatan' && 'bg-gray-100'} py-2 px-5 duration-500 hover:bg-gray-100 rounded-t-md w-full`} type="button">Dalam Proses Pembuatan</button>
                                                </li>
                                                <li>
                                                    <button onClick={() => changeStatus('Dalam Pengiriman', data.id)} className={`${data.status_pembelian === 'Dalam Pengiriman' && 'bg-gray-100'} py-2 px-5 duration-500 hover:bg-gray-100 w-full`} type="button">Dalam Pengiriman</button>
                                                </li>
                                                <li>
                                                    <button onClick={() => changeStatus('Pesanan Selesai', data.id)} className={`${data.status_pembelian === 'Pesanan Selesai' && 'bg-gray-100'} py-2 px-5 duration-500 hover:bg-gray-100 rounded-b-md w-full`} type="button">Pesanan Selesai</button>
                                                </li>
                                            </ul>
                                        </Dropdown>
                                        <button onClick={() => submitToWhatsapp(data.user.phone_number, data)} type="button" className="px-5 py-1 border rounded-md">Kirim Pesan Konfirmasi</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {orders.length === 0 && <td colSpan={5} className="text-center py-5">Tidak ada order</td>}
                    </tbody>
                </table>
            </div>
        </MerchantLayout>
    )
}