import { useQuery } from "@apollo/client";
import { GET_HERO_SECTION } from "../graphql/heroSection";
import { Link } from "react-router-dom";

export default function Hero({ isFullWidth }) {
    const { data, loading, error } = useQuery(GET_HERO_SECTION);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    const heroClass = isFullWidth ? "w-full" : "container mx-auto";

    return (
        <div className={`${heroClass} hero-section relative `}>
            <video src={data.pageBy.heroSection.rightVideo.node.mediaItemUrl} autoPlay loop playsInline muted className="object-cover object-center opacity-50 w-full h-175" />
            <div className="absolute top-15 left-110 p-8 md:p-16 lg:p-24">
                <div className="flex items-center flex-col justify-center">
                    <h3 className="text-(--primary) font-bold uppercase text-[18px] ">{data.pageBy.heroSection?.eyebrowText}</h3>
                    <h1 className="font-bold text-[54px] leading-15">{data.pageBy.heroSection?.primaryHeading}</h1>
                    <p className="text-lg w-200 text-center">{data.pageBy.heroSection?.description}</p>
                    <div className="buttons mt-4 flex gap-4">
                        <Link to="/about" className="bg-(--primary) px-[50px] py-[12px] rounded-sm text-[16px] font-bold hover:bg-transparent hover:border-2 hover:border-(--primary) hover:text-(--primary)  transition-all uppercase text-[#0a0a0a]">About</Link>
                        <Link to="/contact" className="bg-(--primary) px-12.5 py-3 rounded-sm text-[16px] font-bold hover:bg-transparent hover:border-2 hover:border-(--primary) hover:text-(--primary)  transition-all uppercase text-[#0a0a0a]">Contact us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
