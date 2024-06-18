import LandingLayout from "../Components/LandingLayout";
import ProductCard from "../Components/ProductCard";

export default function Home({ auth, menus }) {
    return (
        <LandingLayout auth={auth}>
            <h1 style={{ fontFamily: 'MyFont' }} className="text-4xl font-bold text-stone-700 mb-10">
                Pesan Catering Anda
            </h1>
            <section className="grid grid-cols-3 gap-5">
                {menus.map(data => (
                    <ProductCard key={data.id} data={data} />
                ))}
            </section>
        </LandingLayout>
    )
}