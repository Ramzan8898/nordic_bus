export default function AboutShimmer() {
    return (
        <div className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto space-y-28">

                {/* Hero shimmer */}
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/2 space-y-6">
                        <div className="h-10 w-3/4 rounded shimmer" />
                        <div className="h-5 w-full rounded shimmer" />
                        <div className="h-5 w-5/6 rounded shimmer" />
                        <div className="h-5 w-4/6 rounded shimmer" />
                    </div>
                    <div className="md:w-1/2 h-105 rounded-lg shimmer" />
                </div>
            </div>

            {/* Grid shimmer */}
            <div className="grid md:grid-cols-4 mt-20">
                {[1, 2, 3, 4].map((_, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center justify-center p-12 gap-6"
                    >
                        <div className="w-14 h-14 rounded-full shimmer" />
                        <div className="h-5 w-40 rounded shimmer" />
                        <div className="h-5 w-32 rounded shimmer" />
                    </div>
                ))}
            </div>
        </div>
    );
};
