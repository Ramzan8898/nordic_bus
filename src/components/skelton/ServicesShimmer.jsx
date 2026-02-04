export default function ServicesShimmer() {
    return (
        <div className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto space-y-24">

                {[1, 2].map((_, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-12">
                        <div className="w-full md:w-1/2 h-105 rounded-lg shimmer" />
                        <div className="w-full md:w-1/2 space-y-6">
                            <div className="h-8 w-2/3 rounded shimmer" />
                            <div className="h-5 w-full rounded shimmer" />
                            <div className="h-5 w-5/6 rounded shimmer" />
                            <div className="h-5 w-4/6 rounded shimmer" />
                        </div>
                    </div>
                ))}

                <div className="space-y-8">
                    <div className="h-6 w-1/2 mx-auto rounded shimmer" />

                    <div className="border border-white/20 p-12 rounded-lg">
                        <div className="grid md:grid-cols-2 gap-10">
                            {[1, 2, 3, 4].map((_, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full shimmer" />
                                    <div className="h-5 w-3/4 rounded shimmer" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
