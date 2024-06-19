import MerchantLayout from "../Components/MerchantLayout";
import FormInput from "../Components/FormInput";
import { RiImageAddLine } from "react-icons/ri";
import { useForm } from "@inertiajs/react";

export default function ProfilMerchant({ merchant }) {
    const { data, setData, post, errors } = useForm({
        nama_perusahaan: merchant.nama_perusahaan,
        logo_perusahaan: merchant.logo_perusahaan,
        alamat: merchant.alamat,
        kontak: merchant.kontak,
        deskripsi: merchant.deskripsi,
    });

    const submit = (e) => {
        e.preventDefault();

        post('/profil-merchant/update');
    };
    return (
        <MerchantLayout>
            <div className="flex justify-center">
                <div className="border w-[60%] bg-white p-5">
                    <div className="mb-10">
                        <h1 className="text-2xl text-center">Merchant</h1>
                    </div>
                    <form onSubmit={submit}>
                        <div className="grid grid-cols-2 gap-5 mb-10">
                            <FormInput value={data.nama_perusahaan} onChange={(e) => setData('nama_perusahaan', e.target.value)} errors={errors.nama_perusahaan} label="Nama Perusahaan" />
                            <FormInput value={data.alamat} onChange={(e) => setData('alamat', e.target.value)} errors={errors.alamat} label="Alamat" />
                            <FormInput value={data.kontak} onChange={(e) => setData('kontak', e.target.value)} errors={errors.kontak} label="Kontak" />
                            <div className="mb-5 col-span-2">
                                <h5 className="mb-2">Deskripsi</h5>
                                <textarea rows={5} value={data.deskripsi} onChange={(e) => setData('deskripsi', e.target.value)} className="w-full outline-none border rounded-md p-2"></textarea>
                                <p className="text-rose-500 text-sm">{errors.deskripsi}</p>
                            </div>
                            <div className="col-span-2">
                                <h5 className="mb-2">Logo Perusahaan</h5>
                                <input type="file" id="logo_perusahaan" onChange={(e) => setData('logo_perusahaan', e.target.files[0])} hidden />
                                {data.logo_perusahaan ? (
                                    typeof data.logo_perusahaan === 'string' ? (
                                        <label htmlFor="logo_perusahaan">
                                            <img src={data.logo_perusahaan} alt="" />
                                        </label>
                                    ) : (
                                        <label htmlFor="logo_perusahaan">
                                            <img src={URL.createObjectURL(data.logo_perusahaan)} alt="" />
                                        </label>
                                    )
                                ) : (
                                    <label htmlFor="logo_perusahaan">
                                        <div className="border rounded-[5px] w-full p-5 flex justify-center">
                                            <RiImageAddLine size={50} color="gray" />
                                        </div>
                                    </label>
                                )}
                                <p className="text-rose-500 text-sm">{errors.logo_perusahaan}</p>
                            </div>
                        </div>
                        <button type="submit" className="w-full py-2 border rounded-md bg-black text-white">Submit Changes</button>
                    </form>
                </div>
            </div>
        </MerchantLayout>
    )
}
