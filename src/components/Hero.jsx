import { useQuery } from "@apollo/client";
import { GET_HERO_SECTION } from "../graphql/heroSection";
import { Link } from "react-router-dom";

export default function Hero({ isFullWidth }) {
    const { data, loading, error } = useQuery(GET_HERO_SECTION);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    const heroClass = isFullWidth ? "w-full" : "container mx-auto";

    return (
        <div className={`${heroClass} hero-section relative z-0 `}>
            <img src={data.pageBy.heroSection.backgroundImage.node.sourceUrl} alt="Hero Image" className="object-cover w-full h-200" />
            <div className="absolute top-30 left-33 p-8 md:p-16 lg:p-24">
                <div className="flex items-left flex-col gap-3">
                    <h3 className="text-(--primary) font-bold uppercase text-[24px] ">{data.pageBy.heroSection?.eyebrowText}</h3>
                    <h1 className="font-bold text-[72px] leading-15 text-[#dad6d6]">{data.pageBy.heroSection?.primaryHeading}</h1>
                    <p className="text-[20px] w-250 text-white ">{data.pageBy.heroSection?.description}</p>
                    <div className="buttons mt-4 flex gap-4 flex-row">
                        <Link to="/about" className="bg-(--primary) px-[50px] py-[12px] rounded-sm text-[16px] font-bold hover:bg-transparent hover:border-2 hover:border-(--primary) hover:text-(--primary)  transition-all uppercase text-[#0B1220]">About us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
