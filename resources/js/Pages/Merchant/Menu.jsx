import MerchantLayout from "../Components/MerchantLayout";

export default function Merchant() {
    return (
        <MerchantLayout>
            <table className="w-full">
                <tr style={{ fontFamily: 'MyFont' }} className="font-normal">
                    <th className="p-5 border border-black">Id</th>
                    <th className="p-5 border border-black">Nama Pembeli</th>
                    <th className="p-5 border border-black">Produk Yang Di Beli</th>
                    <th className="p-5 border border-black">Quantity</th>
                    <th className="p-5 border border-black">Total Pembelian</th>
                    <th className="p-5 border border-black">Status Pembelian</th>
                    <th className="p-5 border border-black">Aksi</th>
                </tr>
                <tr className="border border-black" style={{ fontFamily: 'MyFont' }}>
                    <td className="p-5 border border-black">1</td>
                    <td className="p-5 border border-black">Suhendra</td>
                    <td className="p-5 border border-black">Ayam Manis</td>
                    <td className="p-5 border border-black">30</td>
                    <td className="p-5 border border-black">Rp. 670.000</td>
                    <td className="p-5 border border-black">Proses Pembuatan</td>
                    <td className="p-5 border border-black">Edit</td>
                </tr>
                <tr className="border border-black" style={{ fontFamily: 'MyFont' }}>
                    <td className="p-5 border border-black">1</td>
                    <td className="p-5 border border-black">Suhendra</td>
                    <td className="p-5 border border-black">Ayam Manis</td>
                    <td className="p-5 border border-black">30</td>
                    <td className="p-5 border border-black">Rp. 670.000</td>
                    <td className="p-5 border border-black">Proses Pembuatan</td>
                    <td className="p-5 border border-black">Edit</td>
                </tr>
                <tr className="border border-black" style={{ fontFamily: 'MyFont' }}>
                    <td className="p-5 border border-black">1</td>
                    <td className="p-5 border border-black">Suhendra</td>
                    <td className="p-5 border border-black">Ayam Manis</td>
                    <td className="p-5 border border-black">30</td>
                    <td className="p-5 border border-black">Rp. 670.000</td>
                    <td className="p-5 border border-black">Proses Pembuatan</td>
                    <td className="p-5 border border-black">Edit</td>
                </tr>
                <tr className="border border-black" style={{ fontFamily: 'MyFont' }}>
                    <td className="p-5 border border-black">1</td>
                    <td className="p-5 border border-black">Suhendra</td>
                    <td className="p-5 border border-black">Ayam Manis</td>
                    <td className="p-5 border border-black">30</td>
                    <td className="p-5 border border-black">Rp. 670.000</td>
                    <td className="p-5 border border-black">Proses Pembuatan</td>
                    <td className="p-5 border border-black">Edit</td>
                </tr>
                <tr className="border border-black" style={{ fontFamily: 'MyFont' }}>
                    <td className="p-5 border border-black">1</td>
                    <td className="p-5 border border-black">Suhendra</td>
                    <td className="p-5 border border-black">Ayam Manis</td>
                    <td className="p-5 border border-black">30</td>
                    <td className="p-5 border border-black">Rp. 670.000</td>
                    <td className="p-5 border border-black">Proses Pembuatan</td>
                    <td className="p-5 border border-black">Edit</td>
                </tr>
            </table>
        </MerchantLayout>
    )
}