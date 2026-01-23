export default function WhyChooseUs() {
    return (
        <div className="bg-[#100f0f] py-25">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-4">
                <div className="flex flex-col gap-2 items-start">
                    <h3 className="text-[#888] uppercase">Beyond the Drive</h3>
                    <h1 className="text-(--primary) text-4xl">Why Choose Us</h1>
                    <p className="text-white text-[18px] font-extralight">We provide exceptional services designed to elevate your experience with attention to detail, luxury, and reliability.</p>
                    <div className="grid md:grid-cols-2 mt-8 gap-15">
                        <div className="flex flex-col items-left">
                            <img src="./src/assets/clock.svg" alt="" className="w-13 mb-5" />
                            <h3 className="text-2xl font-semibold text-white">On-Time Always</h3>
                            <p className="text-gray-300">Reliability is our priority. You can trust that we will always deliver on time, every time, without compromise.</p>
                        </div>
                        <div className="flex flex-col items-left">
                            <img src="./src/assets/secure.svg" alt="" className="w-13 mb-5" />
                            <h3 className="text-2xl font-semibold text-white">Total Protection</h3>
                            <p className="text-gray-300">Your safety is our top concern. We offer comprehensive protection and security to ensure peace of mind for all our clients.</p>
                        </div>
                        <div className="flex flex-col items-left">
                            <img src="./src/assets/key.svg" alt="" className="w-13 mb-5" />
                            <h3 className="text-2xl font-semibold text-white">Easy Access</h3>
                            <p className="text-gray-300">Our services are designed for ultimate convenience, making it simple for you to access everything you need, whenever you need it.</p>
                        </div>
                        <div className="flex flex-col items-left">
                            <img src="./src/assets/premium.svg" alt="" className="w-13 mb-5" />
                            <h3 className="text-2xl font-semibold text-white">Premium Service</h3>
                            <p className="text-gray-300">Expect only the best. Our premium service guarantees high-quality experiences that exceed your expectations, making every interaction special.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="./src/assets/Why_Choose.jpg" alt="" className="w-full h-180 rounded-lg object-cover opacity-40" />
                </div>
            </div>
        </div>
    )
}