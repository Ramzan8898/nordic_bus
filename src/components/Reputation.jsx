import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import { use } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPUTATION_SECTION } from "../graphql/Reputation";
export default function Reputation() {
    const { data } = useQuery(GET_REPUTATION_SECTION);
    return (
        <div className="py-25 bg-[#0a0a0a]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div className="w-full h-auto rounded-lg overflow-hidden">
                    {/* <video src="./src/assets/Reputation_video.mp4" autoPlay playsInline muted loop className="h-100 w-full" /> */}
                    <img src={data?.pageBy?.reputation.leftImage.node.sourceUrl} alt="" className="w-full h-150 object-cover object-bottom rounded-lg" />
                </div>
                <div className="flex flex-col gap-2 mt-3">
                    <h3 className="text-[#888] uppercase">{data?.pageBy?.reputation.eyebrow}</h3>
                    <h1 className="text-(--primary) text-4xl">{data?.pageBy?.reputation.heading}</h1>
                    <p className="text-white text-[18px] font-extralight">{data?.pageBy?.reputation.para1}</p>
                    <p className="text-white text-[18px] font-extralight">{data?.pageBy?.reputation.para2}</p>
                    <p className="text-white text-[18px] font-extralight">{data?.pageBy?.reputation.para3}</p>
                    <div className="self-start mt-2">
                        <Link to={data?.pageBy?.reputation.btnLink.url} className="uppercase text-(--primary) text-lg px-12 py-3 border-2 border-(--primary) inline-block rounded-full ">{data?.pageBy?.reputation.btnLink.title}</Link>
                    </div>
                    <div className="grid md:grid-cols-3 mt-10 gap-1" >
                        <div className="flex flex-col items-center">
                            <CountUp start={0} end={data?.pageBy?.reputation?.counter?.[0]?.counterValue || 0} className="text-white text-5xl font-extrabold" suffix="%" duration={3} />
                            <p className="text-muted-foreground mb-2 text-2xl">{data?.pageBy?.reputation?.counter?.[0]?.counterText || "Counter"}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <CountUp start={0} end={data?.pageBy?.reputation?.counter?.[1]?.counterValue || 0} className="text-white text-5xl font-extrabold" suffix="k+" duration={3} />
                            <p className="text-muted-foreground mb-2 text-2xl">{data?.pageBy?.reputation?.counter?.[1]?.counterText || "Counter"}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <CountUp start={0} end={data?.pageBy?.reputation?.counter?.[2]?.counterValue || 0} className="text-white text-5xl font-extrabold" suffix="+" duration={3} />
                            <p className="text-muted-foreground mb-2 text-2xl">{data?.pageBy?.reputation?.counter?.[2]?.counterText || "Counter"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}