import { useQuery } from "@apollo/client";
import { NavLink } from "react-router-dom";
import { GET_SITE_LOGO } from "../graphql/logo";

export default function Header({ isContainerized }) {
	const containerClass = isContainerized ? "container mx-auto" : "w-full";

	const {
		data: logoData,
		loading: logoLoading,
		error: logoError,
	} = useQuery(GET_SITE_LOGO);

	if (logoLoading) return <div>Loading...</div>;
	if (logoError) return <div>Logo error</div>;

	return (
		<div className="bg-[#0B1220]">
			<header className="w-full bg-[#0B1220] fixed top-0 left-0 right-0 z-10 py-3">
				<div className={`${containerClass} flex items-center justify-between`}>
					{/* LOGO */}
					<div className="flex items-center gap-2">
						{logoData?.mediaItem?.sourceUrl ? (
							<img
								src={logoData.mediaItem.sourceUrl}
								alt={logoData.mediaItem.altText || "Logo"}
								className="h-20 w-auto"
							/>
						) : (
							<span className="text-white font-bold text-xl">LOGO</span>
						)}
					</div>

					{/* MENU */}
					<nav className="flex gap-8">
						<NavLink
							to="/"
							end
							className={({ isActive }) =>
								`relative font-medium transition-all duration-300 text-[18px] ${isActive
									? "text-[#E3BB45] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#F5A623]"
									: "text-[#ffffff] hover:text-[#CBD5E1]"
								}`
							}
						>
							Home
						</NavLink>
						<NavLink
							to="/fleet"
							end
							className={({ isActive }) =>
								`relative font-medium transition-all duration-300 text-[18px] ${isActive
									? "text-[#E3BB45] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#F5A623]"
									: "text-[#ffffff] hover:text-[#CBD5E1]"
								}`
							}
						>
							Fleet
						</NavLink>
						<NavLink
							to="/services"
							end
							className={({ isActive }) =>
								`relative font-medium transition-all duration-300 text-[18px] ${isActive
									? "text-[#E3BB45] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#E3BB45]"
									: "text-[#ffffff] hover:text-[#CBD5E1]"
								}`
							}
						>
							Services
						</NavLink>
						<NavLink
							to="/about"
							end
							className={({ isActive }) =>
								`relative font-medium transition-all duration-300 text-[18px] ${isActive
									? "text-[#E3BB45] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#F5A623]"
									: "text-[#ffffff] hover:text-[#CBD5E1]"
								}`
							}
						>
							About
						</NavLink>
						<NavLink
							to="/contact"
							end
							className={({ isActive }) =>
								`relative font-medium transition-all duration-300 text-[18px] ${isActive
									? "text-[#E3BB45] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#F5A623]"
									: "text-[#ffffff] hover:text-[#CBD5E1]"
								}`
							}
						>
							Contact
						</NavLink>
					</nav>
				</div>
			</header>
		</div>
	);
}
