import { Head, Link, useForm } from "@inertiajs/react";
import FormInput from "../Components/FormInput";
import PrimaryButton from "../Components/PrimartButton";

export default function RegisterMerchant() {

    const {data, setData, post, errors} = useForm({
        name: '',
        email: '',
        password: '',
        nama_perusahaan: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post('/register-merchant/store');
    };

    return (
        <main className="h-screen bg-[#fafbfe]">
            <Head title="Register" />

            <div className="grid md:grid-cols-2 grid-cols-1 h-full">
                <section className="flex items-center bg-white">
                    <form onSubmit={submit} className="w-full md:px-[100px] px-[20px]">
                        <h1 className="text-xl font-bold mb-10 text-center">Marketplace Katering - Register Merchant</h1>
                        <FormInput value={data.name} onChange={(e) => setData('name', e.target.value)} errors={errors.name} label="Name" />
                        <FormInput value={data.email} onChange={(e) => setData('email', e.target.value)} errors={errors.email} label="Email" />
                        <FormInput value={data.password} onChange={(e) => setData('password', e.target.value)} errors={errors.password} label="Password" type="password" />
                        <FormInput value={data.nama_perusahaan} onChange={(e) => setData('nama_perusahaan', e.target.value)} errors={errors.nama_perusahaan} label="Nama Perusahaan" />
                        <PrimaryButton type="submit" className="w-full">
                            <h1 className="w-full">Register</h1>
                        </PrimaryButton>
                        <div className="text-sm mt-5 text-center">
                            <p>Already have an account? <Link className="text-blue-400" href="/login">Sign in</Link></p>
                        </div>
                    </form>
                </section>
                <section className="md:block hidden">
                    <img className="h-full object-cover" src="/assets/catering.jpg" alt=".." />
                </section>
            </div>
        </main>
    )
}