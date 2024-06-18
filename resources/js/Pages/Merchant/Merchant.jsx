import MerchantLayout from "../Components/MerchantLayout";

export default function Merchant() {
    return (
        <MerchantLayout>
            <div className="grid grid-cols-4 gap-5 mb-10">
                <div style={{ fontFamily: 'MyFont' }} className="p-5 border border-black text-center">
                    <h1 className="text-xl font-bold">Hasil Penjualan</h1>
                    <h1 className="">15</h1>
                </div>
                <div style={{ fontFamily: 'MyFont' }} className="p-5 border border-black text-center">
                    <h1 className="text-xl font-bold">Total Menu</h1>
                    <h1 className="">12</h1>
                </div>
                <div style={{ fontFamily: 'MyFont' }} className="p-5 border border-black text-center">
                    <h1 className="text-xl font-bold">Total Penjualan</h1>
                    <h1 className="">Rp. 7.850.000</h1>
                </div>
                <div style={{ fontFamily: 'MyFont' }} className="p-5 border border-black text-center">
                    <h1 className="text-xl font-bold">Total Keuntungan</h1>
                    <h1 className="">Rp. 4.240.050</h1>
                </div>
            </div>

            <table className="w-full">
                <tr style={{ fontFamily: 'MyFont' }} className="font-normal">
                    <th className="p-5 border border-black">Id</th>
                    <th className="p-5 border border-black">Nama Pembeli</th>
                    <th className="p-5 border border-black">Produk Yang Di Beli</th>
                    <th className="p-5 border border-black">Quantity</th>
                    <th className="p-5 border border-black">Total Pembelian</th>
                    <th className="p-5 border border-black">Status Pembelian</th>
                </tr>
                <tr className="border border-black" style={{ fontFamily: 'MyFont' }}>
                    <td className="p-5 border border-black">1</td>
                    <td className="p-5 border border-black">Suhendra</td>
                    <td className="p-5 border border-black">Ayam Manis</td>
                    <td className="p-5 border border-black">30</td>
                    <td className="p-5 border border-black">Rp. 670.000</td>
                    <td className="p-5 border border-black">Proses Pembuatan</td>
                </tr>
                <tr className="border border-black" style={{ fontFamily: 'MyFont' }}>
                    <td className="p-5 border border-black">1</td>
                    <td className="p-5 border border-black">Suhendra</td>
                    <td className="p-5 border border-black">Ayam Manis</td>
                    <td className="p-5 border border-black">30</td>
                    <td className="p-5 border border-black">Rp. 670.000</td>
                    <td className="p-5 border border-black">Proses Pembuatan</td>
                </tr>
                <tr className="border border-black" style={{ fontFamily: 'MyFont' }}>
                    <td className="p-5 border border-black">1</td>
                    <td className="p-5 border border-black">Suhendra</td>
                    <td className="p-5 border border-black">Ayam Manis</td>
                    <td className="p-5 border border-black">30</td>
                    <td className="p-5 border border-black">Rp. 670.000</td>
                    <td className="p-5 border border-black">Proses Pembuatan</td>
                </tr>
                <tr className="border border-black" style={{ fontFamily: 'MyFont' }}>
                    <td className="p-5 border border-black">1</td>
                    <td className="p-5 border border-black">Suhendra</td>
                    <td className="p-5 border border-black">Ayam Manis</td>
                    <td className="p-5 border border-black">30</td>
                    <td className="p-5 border border-black">Rp. 670.000</td>
                    <td className="p-5 border border-black">Proses Pembuatan</td>
                </tr>
                <tr className="border border-black" style={{ fontFamily: 'MyFont' }}>
                    <td className="p-5 border border-black">1</td>
                    <td className="p-5 border border-black">Suhendra</td>
                    <td className="p-5 border border-black">Ayam Manis</td>
                    <td className="p-5 border border-black">30</td>
                    <td className="p-5 border border-black">Rp. 670.000</td>
                    <td className="p-5 border border-black">Proses Pembuatan</td>
                </tr>
                <tr className="border border-black" style={{ fontFamily: 'MyFont' }}>
                    <td className="p-5 border border-black">1</td>
                    <td className="p-5 border border-black">Suhendra</td>
                    <td className="p-5 border border-black">Ayam Manis</td>
                    <td className="p-5 border border-black">30</td>
                    <td className="p-5 border border-black">Rp. 670.000</td>
                    <td className="p-5 border border-black">Proses Pembuatan</td>
                </tr>
                <tr className="border border-black" style={{ fontFamily: 'MyFont' }}>
                    <td className="p-5 border border-black">1</td>
                    <td className="p-5 border border-black">Suhendra</td>
                    <td className="p-5 border border-black">Ayam Manis</td>
                    <td className="p-5 border border-black">30</td>
                    <td className="p-5 border border-black">Rp. 670.000</td>
                    <td className="p-5 border border-black">Proses Pembuatan</td>
                </tr>
            </table>
        </MerchantLayout>
    )
}