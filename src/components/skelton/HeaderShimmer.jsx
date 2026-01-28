export default function HeaderShimmer({ isContainerized }) {
    const containerClass = isContainerized ? "container mx-auto" : "w-full";

    return (
        <header className="fixed top-0 left-0 right-0 z-10 bg-[#0B1220] h-24">
            <div
                className={`${containerClass} h-full flex items-center justify-between`}
            >
                <div className="h-14 w-40 rounded-full bg-white/10 shimmer"></div>

                <div className="flex gap-8">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className="h-5 w-20 rounded-full bg-white/10 shimmer"
                        ></div>
                    ))}
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
          top: 0;
          left: -150%;
          width: 150%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.15),
            transparent
          );
          animation: shimmer 1.6s infinite;
        }

        @keyframes shimmer {
          100% {
            left: 150%;
          }
        }
      `}</style>
        </header>
    );
}
