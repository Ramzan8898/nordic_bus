import { useQuery } from "@apollo/client";
import { GET_HERO_SECTION } from "../graphql/heroSection";

export default function Hero({ isFullWidth }) {
    const { data, loading, error } = useQuery(GET_HERO_SECTION);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    const heroClass = isFullWidth ? "w-full" : "container mx-auto";

    return (
        <div className={`${heroClass} hero-section relative`}>
            <img
                src={data.pageBy.heroSection.backgroundImage.node.sourceUrl}
                alt=""
                className="object-cover object-center opacity-25 w-full h-175"
            />
            <div className="absolute top-0 p-8 md:p-16 lg:p-24 text-center w-full h-full flex flex-col items-end justify-start">
                <div className="flex items-start flex-col">
                    <h3 className="text-(--primary) font-semibold uppercase text-[15px]">{data.pageBy.heroSection?.eyebrowText}</h3>
                    <h1 className="font-bold text-[50px] leading-15">{data.pageBy.heroSection?.primaryHeading}</h1>
                    <h1 className="font-bold text-(--secondary) italic text-[70px] leading-19">{data.pageBy.heroSection?.highlightedHeading}</h1>
                    <p className="text-lg w-200 text-left">{data.pageBy.heroSection?.description}</p>
                </div>
            </div>
        </div>
    );
}
