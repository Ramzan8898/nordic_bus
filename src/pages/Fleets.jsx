import React from "react";
import Fleet from "../components/Fleet";

export default function Fleets() {
    return (
        <div className="bg-black text-white min-h-screen px-10 py-40">
            <div className="container mx-auto">
                <Fleet showViewAll={false} showLoadMore={true} />
            </div>
        </div>
    );
}
