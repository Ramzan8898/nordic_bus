import { useQuery } from "@apollo/client";
import { GET_HERO_SECTION } from "../graphql/heroSection";

export default function Hero({ isFullWidth }) {
    const { data, loading, error } = useQuery(GET_HERO_SECTION);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    const heroClass = isFullWidth ? "w-full" : "container mx-auto";

    return (
        <div className={`${heroClass} hero-section relative `}>
            <img
                src={data.pageBy.heroSection.backgroundImage.node.sourceUrl}
                alt=""
                className="object-cover object-center opacity-25 w-full h-175"
            />
            <div className="absolute top-15 left-30 p-8 md:p-16 lg:p-24 text-center">
                <div className="flex items-start flex-col">
                    <h3 className="text-(--primary) font-bold uppercase text-[16px] ">{data.pageBy.heroSection?.eyebrowText}</h3>
                    <h1 className="font-bold text-[50px] leading-15">{data.pageBy.heroSection?.primaryHeading}</h1>
                    <p className="text-lg w-200 text-left">{data.pageBy.heroSection?.description}</p>
                    <div className="buttons mt-4 flex gap-4">
                        <a href="#" className="bg-(--primary) px-3 py-2 rounded-sm text-[16px] text-white font-semibold hover:bg-(--secondary) transition-all">About</a>
                        <a href="#" className="bg-gray-400 px-3 py-2 rounded-sm text-[16px] text-white font-semibold hover:bg-(--secondary) transition-all">Contact us</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
