export default function HeroShimmer({ isFullWidth }) {
    const heroClass = isFullWidth ? "w-full" : "container mx-auto";

    return (
        <div className={`${heroClass} relative h-200 overflow-hidden bg-[#040508]`}>
            <div className="absolute inset-0 bg-white/5 shimmer"></div>

            <div className="absolute top-30 left-25 p-8 md:p-16 lg:p-24 z-10">
                <div className="flex flex-col gap-4">
                    <div className="h-6 w-48 rounded-full bg-white/10 shimmer"></div>

                    <div className="h-16 w-150 rounded-full bg-white/10 shimmer"></div>
                    <div className="h-16 w-130 rounded-full bg-white/10 shimmer"></div>

                    <div className="h-5 w-175 rounded-full bg-white/10 shimmer"></div>
                    <div className="h-5 w-162.5 rounded-full bg-white/10 shimmer"></div>

                    <div className="mt-6 h-12 w-44 rounded-full bg-white/10 shimmer"></div>
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
