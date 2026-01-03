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
            <div className="absolute top-0 p-8 md:p-16 lg:p-24 text-center w-full h-full flex flex-col  items-center">
                <h3 className="text-[#FF9203] font-semibold uppercase ">{data.pageBy.heroSection?.eyebrowText}</h3>
                <h1 className="text-4xl font-bold mb-4">{data.pageBy.heroSection?.primaryHeading}</h1>
                <p className="text-lg">{data.pageBy.heroSection?.description}</p>
            </div>
        </div>
    );
}
