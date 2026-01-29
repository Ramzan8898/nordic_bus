export default function BookingShimmer() {
    return (
        <div className="h-screen bg-black flex items-center justify-center">
            <div className="w-175 p-8 rounded-xl shimmer-box">
                <div className="h-6 w-1/3 mb-4 shimmer"></div>
                <div className="h-10 w-2/3 mb-8 shimmer"></div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="h-12 shimmer"></div>
                    <div className="h-12 shimmer"></div>
                    <div className="h-12 shimmer"></div>
                </div>

                <div className="h-12 shimmer mb-4"></div>
                <div className="h-24 shimmer mb-6"></div>
                <div className="h-12 shimmer rounded-full"></div>
            </div>

            <style>{`
                .shimmer {
                    background: linear-gradient(90deg,#222,#333,#222);
                    background-size: 400% 100%;
                    animation: shimmer 1.4s infinite;
                }
                @keyframes shimmer {
                    0% {background-position: 100%;}
                    100% {background-position: -100%;}
                }
            `}</style>
        </div>
    );
}
