import { useForm } from "@inertiajs/react";
import MerchantLayout from "../Components/MerchantLayout";
import FormInput from "../Components/FormInput";
import { rupiah } from "../../utils/rupiah";
import { RiImageAddLine } from "react-icons/ri";

export default function FormMenu() {

    const { data, setData, post, errors } = useForm({
        nama_menu: '',
        jenis_makanan: '',
        foto: '',
        harga: 0,
        keuntungan: 0,
        deskripsi: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post('/buat-menu/store');
    };

    return (
        <MerchantLayout>
            <div className="flex justify-center">
                <div className="border w-[60%] bg-white p-5">
                    <div className="mb-10">
                        <h1 className="text-2xl text-center">Buat Menu Baru</h1>
                    </div>
                    <form onSubmit={submit}>
                        <div className="grid grid-cols-2 gap-5 mb-10">
                            <FormInput value={data.nama_menu} onChange={(e) => setData('nama_menu', e.target.value)} errors={errors.nama_menu} label="Nama Menu" />
                            <FormInput value={data.jenis_makanan} onChange={(e) => setData('jenis_makanan', e.target.value)} errors={errors.jenis_makanan} label="Jenis Makanan" />
                            <FormInput value={rupiah(data.harga)} onChange={(e) => setData('harga', e.target.value.replace(/\D/g, ''))} errors={errors.harga} label="Harga" />
                            <FormInput value={rupiah(data.keuntungan)} onChange={(e) => setData('keuntungan', e.target.value.replace(/\D/g, ''))} errors={errors.keuntungan} label="Keuntungan" />
                            <div className="mb-5 col-span-2">
                                <h5 className="mb-2">Deskripsi</h5>
                                <textarea rows={5} value={data.deskripsi} onChange={(e) => setData('deskripsi', e.target.value)} className="w-full outline-none border rounded-md p-2"></textarea>
                                <p className="text-rose-500 text-sm">{errors.deskripsi}</p>
                            </div>
                            <div className="col-span-2">
                                <h5 className="mb-2">Foto Menu</h5>
                                <input type="file" id="foto" onChange={(e) => setData('foto', e.target.files[0])} hidden />
                                {data.foto ? (
                                    typeof data.foto === 'string' ? (
                                        <div className="flex justify-center">
                                            <label htmlFor="foto">
                                                <img src={data.foto} alt="" />
                                            </label>
                                        </div>
                                    ) : (
                                        <div className="flex justify-center">
                                            <label htmlFor="foto">
                                                <img src={URL.createObjectURL(data.foto)} alt="" />
                                            </label>
                                        </div>
                                    )
                                ) : (
                                    <label htmlFor="foto">
                                        <div className="border rounded-[5px] cursor-pointer w-full p-5 flex justify-center">
                                            <RiImageAddLine size={50} color="gray" />
                                        </div>
                                    </label>
                                )}
                                <p className="text-rose-500 text-sm">{errors.foto}</p>
                            </div>
                        </div>
                        <button type="submit" className="w-full py-2 border rounded-md bg-black text-white">Submit Changes</button>
                    </form>
                </div>
            </div>
        </MerchantLayout>
    )
}