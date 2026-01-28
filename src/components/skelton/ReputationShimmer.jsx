export default function ReputationShimmer() {
    return (
        <div className="py-25 bg-[#0a0a0a]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                <div className="w-full h-150 rounded-lg bg-white/10 shimmer"></div>

                <div className="flex flex-col gap-4 mt-3">

                    <div className="h-4 w-40 rounded-full bg-white/10 shimmer"></div>

                    <div className="h-10 w-[70%] rounded-full bg-white/10 shimmer"></div>

                    <div className="h-5 w-full rounded-full bg-white/10 shimmer"></div>
                    <div className="h-5 w-[95%] rounded-full bg-white/10 shimmer"></div>
                    <div className="h-5 w-[90%] rounded-full bg-white/10 shimmer"></div>

                    <div className="mt-4 h-12 w-48 rounded-full bg-white/10 shimmer"></div>

                    <div className="grid md:grid-cols-3 mt-10 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <div className="h-12 w-24 rounded-full bg-white/10 shimmer"></div>
                                <div className="h-5 w-32 rounded-full bg-white/10 shimmer"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .shimmer {
          position: relative;
          overflow: hidden;
        }

        .shimmer::after {
          content: "";
          position: absolute;
          inset: 0;
          transform: translateX(-150%);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.15),
            transparent
          );
          animation: shimmer 1.8s infinite;
        }

        @keyframes shimmer {
          100% {
            transform: translateX(150%);
          }
        }
      `}</style>
        </div>
    );
}
