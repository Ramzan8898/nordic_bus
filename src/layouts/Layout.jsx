import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function MainLayout() {
    const location = useLocation(); // Get current location

    return (
        <div className="min-h-screen">
            <Header isContainerized={true} />

            {location.pathname === "/" && <Hero isFullWidth={true} />}

            <main className="">
                <Outlet />
            </main>
        </div>
    );
}
