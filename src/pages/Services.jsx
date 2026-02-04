import { useQuery } from "@apollo/client";
import React from "react";
import { GET_SERVICES } from "../graphql/services";
import ServicesShimmer from "../components/skelton/ServicesShimmer";

export default function Services() {
    const { data, loading } = useQuery(GET_SERVICES);

    if (loading) return <ServicesShimmer />;

    return (
        <div className="py-24 bg-[#0a0a0a] overflow-hidden">
            <div className="container mx-auto space-y-20">
                {data?.pageBy?.services?.service.map((service, index) => {
                    const isReverse = index % 2 !== 0;
                    return (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-start gap-12 ${isReverse ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="w-full md:w-1/2">
                                <img
                                    src={service?.image?.node?.sourceUrl || ""}
                                    alt={service?.heading || "Image"}
                                    className="w-full h-140 rounded-lg object-cover"
                                />
                            </div>

                            <div className="w-full md:w-1/2">
                                <h3 className="text-3xl mb-4 text-[#e3bb45] font-normal uppercase">
                                    {service?.heading}
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {service?.content}
                                </p>
                            </div>
                        </div>
                    );
                })}

                <h2 className="text-center text-[#d4af37] text-lg mb-10">
                    {data?.pageBy?.services?.text}
                </h2>
                <div className="border border-white/30 p-12 rounded-lg flex justify-center">

                    <div className="grid md:grid-cols-2 gap-y-8 gap-x-40 ">
                        {data?.pageBy?.services?.points.map((point, index) => (
                            <div key={index} className="flex items-center gap-4 ">
                                <div className="min-w-9 min-h-9 rounded-full bg-[#d4af37] flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>

                                <p className="text-white text-lg">
                                    {point?.point}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
