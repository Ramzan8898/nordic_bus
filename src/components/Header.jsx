import React from "react";
import { useQuery } from "@apollo/client";
import { NavLink } from "react-router-dom";
import { GET_MENU } from "../graphql/menu";
import { GET_SITE_LOGO } from "../graphql/logo";

export default function Header() {

	const {
		data: menuData,
		loading: menuLoading,
		error: menuError,
	} = useQuery(GET_MENU);

	const {
		data: logoData,
		loading: logoLoading,
		error: logoError,
	} = useQuery(GET_SITE_LOGO);

	if (menuLoading || logoLoading) return <div>Loading...</div>;
	if (menuError) return <div>Menu error</div>;
	if (logoError) return <div>Logo error</div>;

	return (
		<div className="bg-[#201c30]">
			<header className="w-full bg-[#0B1220] border-b border-[#1E293B]">
				<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

					{/* LOGO */}
					<div className="flex items-center gap-2">
						{logoData?.mediaItem?.sourceUrl ? (
							<img
								src={logoData.mediaItem.sourceUrl}
								alt={logoData.mediaItem.altText || "Logo"}
								className="h-17 w-auto"
							/>
						) : (
							<span className="text-white font-bold text-xl">MySite</span>
						)}
					</div>

					{/* MENU */}
					<nav className="flex gap-8">
						{menuData.menuItems.nodes.map((item) => (
							<NavLink
								key={item.id}
								to={item.uri}
								end
								className={({ isActive }) =>
									`
                relative font-medium transition-all duration-300 ${isActive ? "text-[#38BDF8] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#38BDF8]" : "text-[#ffffff] hover:text-[#CBD5E1]"}`
								}
							>
								{item.label}
							</NavLink>
						))}
					</nav>

				</div>
			</header>
		</div>
	);
}


