export default function BrandsShimmer() {
    return (
        <div className="py-25 bg-[#0a0a0a] overflow-hidden">
            <div className="container mx-auto">
                {/* Eyebrow */}
                <div className="h-4 w-40 mx-auto mb-4 shimmer rounded"></div>

                {/* Heading */}
                <div className="h-10 w-96 mx-auto mb-12 shimmer rounded"></div>

                {/* Logos */}
                <div className="flex gap-20 w-max">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div
                            key={i}
                            className="min-w-40 h-20 shimmer rounded-full"
                        />
                    ))}
                </div>
            </div>

            {/* Shimmer Styles */}
            <style>{`
                .shimmer {
                    background: linear-gradient(
                        90deg,
                        #1a1a1a 25%,
                        #2a2a2a 37%,
                        #1a1a1a 63%
                    );
                    background-size: 400% 100%;
                    animation: shimmer 1.4s ease infinite;
                }

                @keyframes shimmer {
                    0% { background-position: 100% 0; }
                    100% { background-position: -100% 0; }
                }
            `}</style>
        </div>
    );
}
