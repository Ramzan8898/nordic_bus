import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_FLEET_SECTION } from "../../graphql/fleet";

export default function SingleFleet() {
    const { slug } = useParams();

    const { data, loading, error } = useQuery(GET_FLEET_SECTION);

    if (loading) return <p className="text-white">Loading...</p>;
    if (error) return <p className="text-red-500">Error loading fleet</p>;

    const fleets = data?.pageBy?.fleet?.fleets || [];

    const fleet = fleets.find(
        item => item.fleetSlug === slug
    );

    if (!fleet) {
        return <p className="text-white">Fleet not found</p>;
    }

    return (
        <div className="bg-black text-white min-h-screen px-10 py-40">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center w-2/3">
                    <img
                        src={fleet.fleetImage?.node?.sourceUrl}
                        alt={fleet.fleetHeading}
                        className="rounded-2xl w-full h-140 object-cover"
                    />
                    <h1 className="text-5xl font-bold mb-6 uppercase">
                        {fleet.fleetHeading}
                    </h1>
                    <p className="text-gray-400 max-w-2xl mb-10">
                        {fleet.fleetDescription}
                    </p>
                </div>
                <div className="">
                </div>
            </div>
        </div>
    );
}
