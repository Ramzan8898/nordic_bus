import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
    const location = useLocation();

    const pathnames = location.pathname
        .split(">")
        .filter((x) => x);

    // Don't show breadcrumb on homepage
    if (pathnames.length === 0) return null;

    return (
        <nav className="w-full py-6 bg-black">
            <div className="container mx-auto">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                    <li>
                        <Link
                            to="/"
                            className="hover:text-white transition"
                        >
                            Home
                        </Link>
                    </li>

                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;

                        return (
                            <li key={to} className="flex items-center gap-2">
                                <span className="text-gray-600">/</span>

                                {isLast ? (
                                    <span className="text-white capitalize">
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
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
}
