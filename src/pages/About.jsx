import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ABOUT } from "../graphql/about";
import AboutShimmer from "../components/skelton/AboutShimmer";

export default function About() {
    const { data, loading } = useQuery(GET_ABOUT);

    if (loading) return <AboutShimmer />;

    const about = data?.pageBy?.about;
    const gridItems = about?.grid || [];

    return (
        <div className="py-24 bg-[#0a0a0a] text-white">
            <div className="container mx-auto space-y-28">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/2 space-y-6">
                        <h2 className="text-4xl text-[#e3bb45] font-semibold">
                            {about?.heading}
                        </h2>

                        <p className="text-gray-300 leading-relaxed text-lg">
                            {about?.para}
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src={about?.image?.node?.sourceUrl}
                            alt={about?.image?.node?.altText}
                            className="w-full h-105 object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-4 mt-20">
                {gridItems.map((item, index) => (
                    <div
                        key={index}
                        className={`
                                flex flex-col items-center justify-center text-center p-12 gap-6
                                ${index === 0 && "bg-white text-black"}
                                ${index === 1 && "bg-[#1c2431]"}
                                ${index === 2 && "bg-[#3c4a57]"}
                                ${index === 3 && "bg-[#bfb6ad] text-black"}
                            `}
                    >
                        <img
                            src={item?.icon?.node?.sourceUrl}
                            alt={item?.icon?.node?.altText}
                            className="w-14 h-14 object-contain"
                        />
                        <p className="text-lg leading-relaxed max-w-xs">
                            {item?.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
