import { useQuery } from "@apollo/client";
import { NavLink } from "react-router-dom";
import { GET_SITE_LOGO } from "../graphql/logo";
import HeaderShimmer from "./skelton/HeaderShimmer";

export default function Header({ isContainerized }) {
	const containerClass = isContainerized ? "container mx-auto" : "w-full";

	const { data, loading, error } = useQuery(GET_SITE_LOGO);

	if (loading) {
		return <HeaderShimmer isContainerized={isContainerized} />;
	}

	if (error) return null;

	return (
		<header className="fixed top-0 left-0 right-0 z-10 bg-[#0B1220] py-3">
			<div className={`${containerClass} flex items-center justify-between`}>
				{/* LOGO */}
				<img
					src={data.mediaItem.sourceUrl}
					alt={data.mediaItem.altText || "Logo"}
					className="h-20 w-auto"
				/>

				{/* MENU */}
				<nav className="flex gap-8">
					{["/", "/fleet", "/services", "/about", "/contact"].map(
						(path, i) => (
							<NavLink
								key={i}
								to={path}
								end
								className={({ isActive }) =>
									`relative font-medium transition-all duration-300 text-[18px] ${isActive
										? "text-[#E3BB45] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#F5A623]"
										: "text-white hover:text-[#CBD5E1]"
									}`
								}
							>
								{path === "/" ? "Home" : path.replace("/", "")}
							</NavLink>
						)
					)}
				</nav>
			</div>
		</header>
	);
}
