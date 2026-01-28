export default function WhyChooseUsShimmer() {
    return (
        <div className="bg-[#100f0f] py-25">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-4">

                <div className="flex flex-col gap-4 items-start">
                    <div className="h-4 w-32 rounded-full bg-white/10 shimmer"></div>

                    <div className="h-10 w-[65%] rounded bg-white/10 shimmer"></div>

                    <div className="h-5 w-full rounded bg-white/10 shimmer"></div>
                    <div className="h-5 w-[90%] rounded bg-white/10 shimmer"></div>

                    <div className="grid md:grid-cols-2 mt-8 gap-15 w-full">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex flex-col gap-3">
                                <div className="h-13 w-13 rounded-full bg-white/10 shimmer"></div>

                                <div className="h-6 w-[70%] rounded bg-white/10 shimmer"></div>

                                <div className="h-4 w-full rounded bg-white/10 shimmer"></div>
                                <div className="h-4 w-[85%] rounded bg-white/10 shimmer"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full h-180 rounded-lg bg-white/10 shimmer"></div>
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
