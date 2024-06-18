import { Head, Link } from "@inertiajs/react";
import FormInput from "../Components/FormInput";
import PrimaryButton from "../Components/PrimartButton";

export default function Login() {
    return (
        <main className="h-screen bg-[#fafbfe]">
            <Head title="Register" />

            <div className="grid md:grid-cols-2 grid-cols-1 h-full">
                <section className="flex items-center bg-white">
                    <form className="w-full md:px-[100px] px-[20px]">
                        <h1 className="text-xl font-bold mb-10 text-center">Marketplace Katering - Register to Continue</h1>
                        <FormInput label="Name" />
                        <FormInput label="Email" />
                        <FormInput label="Password" type="password" />
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