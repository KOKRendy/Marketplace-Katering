import { RiImageAddLine } from "react-icons/ri";
import FormInput from "../Components/FormInput";
import MerchantLayout from "../Components/MerchantLayout";
import { useForm } from "@inertiajs/react";
import { rupiah } from "../../utils/rupiah";

export default function ShowMenu({ menu }) {
    const { data } = useForm({
        nama_menu: menu.nama_menu,
        jenis_makanan: menu.jenis_makanan,
        foto: menu.foto,
        harga: menu.harga,
        keuntungan: menu.keuntungan,
        deskripsi: menu.deskripsi,
        menu_id: menu.id,
    });

    return (
        <MerchantLayout>
            <div className="flex justify-center">
                <div className="border w-[60%] bg-white p-5">
                    <div className="mb-10">
                        <h1 className="text-2xl text-center">Edit Menu</h1>
                    </div>
                    <form>
                        <div className="grid grid-cols-2 gap-5 mb-10">
                            <FormInput value={data.nama_menu} label="Nama Menu" />
                            <FormInput value={data.jenis_makanan} label="Jenis Makanan" />
                            <FormInput value={rupiah(data.harga)} label="Harga" />
                            <FormInput value={rupiah(data.keuntungan)} label="Keuntungan" />
                            <div className="mb-5 col-span-2">
                                <h5 className="mb-2">Deskripsi</h5>
                                <textarea rows={5} value={data.deskripsi} className="w-full outline-none border rounded-md p-2"></textarea>
                            </div>
                            <div className="col-span-2">
                                <h5 className="mb-2">Foto Menu</h5>
                                {data.foto && (
                                    <div className="flex justify-center">
                                        <label htmlFor="foto">
                                            <img src={`/${data.foto}`} alt=".." />
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </MerchantLayout>
    )
}