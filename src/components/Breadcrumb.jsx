import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(Boolean);

    if (pathnames.length === 0) return null;

    return (
        <div
            className="relative w-full h-100 py-25 border-b border-white/10 bg-cover bg-center"
            style={{ backgroundImage: "url('/src/assets/breadcrumb.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* CONTENT */}
            <div className="relative z-10 container mx-auto flex justify-center items-center h-full">
                <nav className="inline-flex items-center gap-5 rounded-full bg-[#0b1220]/80 backdrop-blur-md border border-white/10 px-6 py-3 text-sm text-gray-400 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">

                    {/* Home */}
                    <Link
                        to="/"
                        className="flex items-center gap-1 hover:text-white transition text-lg"
                    >
                        Home
                    </Link>

                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;

                        return (
                            <div key={to} className="flex items-center gap-5 text-lg">
                                {/* Separator */}
                                <span className="text-(--primary)">›</span>

                                {isLast ? (
                                    <span className="text-white font-medium capitalize">
                                        {decodeURIComponent(value.replace(/-/g, " "))}
                                    </span>
                                ) : (
                                    <Link
                                        to={to}
                                        className="hover:text-white transition capitalize"
                                    >
                                        {decodeURIComponent(value.replace(/-/g, " "))}
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}
