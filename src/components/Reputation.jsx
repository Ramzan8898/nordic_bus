import { Link } from "react-router-dom";
import CountUp from 'react-countup';
export default function Reputation() {
    return (
        <div className="py-20 bg-[#0a0a0a]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div className="w-full h-auto rounded-lg overflow-hidden">
                    {/* <video src="./src/assets/Reputation_video.mp4" autoPlay playsInline muted loop className="h-100 w-full" /> */}
                    <img src="./src/assets/Reputation.jpg" alt="" className="w-full h-150 object-cover object-bottom rounded-lg" />
                </div>
                <div className="flex flex-col gap-2 mt-3">
                    <h3 className="text-[#888] uppercase">Driven By Numbers</h3>
                    <h1 className="text-(--primary) text-5xl">Our Reputation, Backed by Data</h1>
                    <p className="text-white text-[18px] font-extralight">At Nordic Fleet, our reputation isn't just built on passion; it’s driven by data. From lap times to performance metrics, we harness cutting-edge analytics to ensure every race, every car, and every team is operating at peak performance.</p>
                    <p className="text-white text-[18px] font-extralight">we pride ourselves on delivering top-tier performance, luxury, and precision. With a rich history of thrilling motorsport achievements and a passion for speed, we have earned the trust and respect of car enthusiasts and racing fans around the world.</p>
                    <p className="text-white text-[18px] font-extralight">Our legacy speaks for itself, but the numbers tell the true story. With years of data-backed performance, we continue to push the limits of motorsport innovation. Join us as we race into the future, where data and reputation collide to redefine what’s possible on the track.</p>
                    <div className="self-start mt-2">
                        <Link to="#" className="uppercase text-(--primary) text-lg px-12 py-3 border-2 border-(--primary) inline-block rounded-full ">Explore Our Fleet</Link>
                    </div>
                    <div className="grid md:grid-cols-3 mt-10 gap-1" >
                        <div className="flex flex-col items-center">
                            <CountUp start={0} end={100} className="text-white text-5xl font-extrabold" suffix="%" duration={3} />
                            <p className="text-muted-foreground mb-2 text-2xl">Accident-Free Rentals</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <CountUp start={0} end={34} className="text-white text-5xl font-extrabold" suffix="k+" duration={3} />
                            <p className="text-muted-foreground mb-2 text-2xl">Happy Clients</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <CountUp start={0} end={210} className="text-white text-5xl font-extrabold" suffix="+" duration={3} />
                            <p className="text-muted-foreground mb-2 text-2xl">Luxurious Cars</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}