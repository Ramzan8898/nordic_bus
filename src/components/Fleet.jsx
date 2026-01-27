import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_FLEET_SECTION } from "../graphql/fleet";

export default function Fleet() {
    const { data } = useQuery(GET_FLEET_SECTION);
    return (

        <div className="py-25 bg-black">
            <div className="container mx-auto">
                <h3 className="text-[#888] uppercase text-center">{data?.pageBy?.fleet?.eyebrow}</h3>
                <h1 className="text-(--primary) text-4xl text-center">{data?.pageBy?.fleet?.heading}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                    {data?.pageBy?.fleet?.fleets?.map((fleetItem, index) => (
                        <div key={index} className="group relative max-w-md w-md rounded-2xl overflow-hidden bg-black border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(255,255,255,0.15)]">
                            <img
                                src={fleetItem?.fleetImage?.node?.sourceUrl}
                                alt="Fleet"
                                className="w-full h-100 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500" />
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full" />
                            <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                <h3 className="text-white text-2xl font-semibold mb-2 uppercase">{fleetItem?.fleetHeading}</h3>
                                <p className="text-gray-300 text-lg leading-6 mb-4"> {fleetItem?.fleetDescription}  </p>
                                <Link to={`/fleet/${fleetItem?.fleetSlug}`} className="self-start px-7 py-2.5 text-sm rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase">
                                    {fleetItem?.fleetBtn?.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-15">
                    <Link to={data?.pageBy?.fleet?.buttonUrl.url} className="text-(--primary) border-2 border-(--primary) px-12 py-3 uppercase rounded-sm hover:bg-(--primary) hover:text-black transition-all tracking-wide">{data?.pageBy?.fleet?.buttonUrl.title}</Link>
                </div>
            </div>
        </div>
    )
}