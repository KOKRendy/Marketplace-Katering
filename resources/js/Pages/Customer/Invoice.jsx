import { rupiah } from "../../utils/rupiah";
import LandingLayout from "../Components/LandingLayout";

export default function Invoice({ auth, order }) {
    return (
        <LandingLayout auth={auth}>
            <div className="flex justify-center">
                <div className="w-[40%] p-5 bg-white border border-black rounded-md">
                    <h1 style={{ fontFamily: 'MyFont' }} className="text-2xl font-bold text-stone-700 text-center">
                        {order ? 'Invoice' : 'Anda Belum Melakukan Pesanan Apapun'}
                    </h1>

                    {order && (
                        <div style={{ fontFamily: 'MyFont' }}>
                            <div>
                                {order.items.map(data => (
                                    <div className="py-5" key={data.id}>
                                        <h3>{data.nama_menu}</h3>
                                        <h3>{data.jenis_makanan}</h3>
                                        <h3>{rupiah(data.harga)}</h3>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-black pt-5 grid grid-cols-2 gap-5 items-center">
                                <div className="text-start">Status</div>
                                <div className="text-end text-sm">{order.status_pembelian}</div>
                                <div className="text-start text-xl">Subtotal</div>
                                <div className="text-end text-xl">{rupiah(order.total_pembelian)}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </LandingLayout>
    )
}