export default function FleetShimmer({ count = 6 }) {
  return (
    <div className="py-25 bg-black">
      <div className="container mx-auto">
        
        <div className="h-4 w-40 mx-auto rounded bg-white/10 shimmer"></div>

        <div className="h-10 w-72 mx-auto mt-4 rounded bg-white/10 shimmer"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className="relative max-w-md rounded-2xl overflow-hidden bg-black border border-white/10"
            >
              <div className="w-full h-100 bg-white/10 shimmer"></div>

              <div className="p-6 flex flex-col gap-3">
                <div className="h-6 w-3/4 rounded bg-white/10 shimmer"></div>
                <div className="h-4 w-full rounded bg-white/10 shimmer"></div>
                <div className="h-4 w-5/6 rounded bg-white/10 shimmer"></div>

                <div className="mt-3 h-9 w-32 rounded-full bg-white/10 shimmer"></div>
              </div>
            </div>
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
