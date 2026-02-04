import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

export default function MainLayout() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <div className="min-h-screen">
            <Header isContainerized={true} />

            {isHome && <Hero isFullWidth={true} />}

            <main className={!isHome ? "pt-24" : ""}>
                {!isHome && <Breadcrumb />}

                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
