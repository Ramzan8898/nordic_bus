import { useQuery } from "@apollo/client"
import { GET_WHY_CHOOSE_US_SECTION } from "../graphql/whyChooseUs"

export default function WhyChooseUs() {
    const { data } = useQuery(GET_WHY_CHOOSE_US_SECTION);
    return (
        <div className="bg-[#100f0f] py-25">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-4">
                <div className="flex flex-col gap-2 items-start">
                    <h3 className="text-[#888] uppercase">{data?.pageBy?.whyChooseUs?.eyebrow}</h3>
                    <h1 className="text-(--primary) text-4xl">{data?.pageBy?.whyChooseUs?.heading}</h1>
                    <p className="text-white text-[18px] font-extralight">{data?.pageBy?.whyChooseUs?.paragraph}</p>
                    <div className="grid md:grid-cols-2 mt-8 gap-15">
                        {data?.pageBy?.whyChooseUs?.specializations?.map((specialization, index) => (
                            <div key={index} className="flex flex-col items-left">
                                <img
                                    src={specialization?.icon?.node?.sourceUrl || ''}
                                    alt={specialization?.heading || 'icon'}
                                    className="w-13 mb-5"
                                />
                                <h3 className="text-2xl font-semibold text-white">{specialization?.heading}</h3>
                                <p className="text-gray-300">{specialization?.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <img src={data?.pageBy?.whyChooseUs?.rightImage?.node?.sourceUrl} alt="" className="w-full h-180 rounded-lg object-cover opacity-40" />
                </div>
            </div>
        </div>
    )
}