import LandingLayout from "../Components/LandingLayout";
import ProductCard from "../Components/ProductCard";

export default function Home() {
    return (
        <LandingLayout>
            <h1 style={{ fontFamily: 'MyFont' }} className="text-4xl font-bold text-stone-700 mb-10">
                Pesan Catering Anda
            </h1>
            <section className="grid grid-cols-3 gap-5">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </section>
        </LandingLayout>
    )
}