export default function WhyChooseUs() {
    return (
        <div className="bg-gray-900 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white mb-8 text-center">Why Choose Us</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg text-center">
                        <img src="" alt="" />
                        <h3 className="text-2xl font-semibold text-white mb-4">Wide Range of Vehicles</h3>
                        <p className="text-gray-300">Choose from a diverse selection of vehicles to suit your needs and preferences.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-semibold text-white mb-4">Affordable Prices</h3>
                        <p className="text-gray-300">Competitive pricing with no hidden fees, ensuring great value for your money.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-semibold text-white mb-4">Excellent Customer Service</h3>
                        <p className="text-gray-300">Our dedicated team is here to assist you 24/7 for a seamless rental experience.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}