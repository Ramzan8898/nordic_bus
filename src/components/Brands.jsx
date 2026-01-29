import { useQuery } from "@apollo/client";
import { GET_BRANDS } from "../graphql/brands";
import BrandsShimmer from "./skelton/BrandsShimmer";

export default function Brands() {
    const { data, loading, error } = useQuery(GET_BRANDS);

    if (loading) {
        return <BrandsShimmer/>;
    }
    if (error) return null;

    const brands = data?.pageBy?.brands;
    const logos = brands?.logos || [];

    return (
        <div className="py-25 bg-[#0a0a0a] overflow-hidden">
            <div className="container mx-auto">
                <h3 className="text-[#888] uppercase text-center tracking-widest">
                    {brands?.eyebrow}
                </h3>

                <h1 className="text-(--primary) text-4xl text-center mb-12">
                    {brands?.heading}
                </h1>

                <div className="relative w-full overflow-hidden">
                    <div className="flex gap-20 animate-marquee hover:[animation-play-state:paused] w-max">
                        {[...logos, ...logos].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center min-w-40 opacity-70 hover:opacity-100 transition"
                            >
                                <img
                                    src={item?.logo?.node?.sourceUrl}
                                    alt="Brand logo"
                                    className="h-20 w-full object-contain grayscale hover:grayscale-0 transition duration-300 hover:cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
        </div>
    );
}
