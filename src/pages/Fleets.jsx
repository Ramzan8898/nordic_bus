import React from "react";
import Fleet from "../components/Fleet";

export default function Fleets() {
    return (
        <>
            <div className="bg-black text-white min-h-screen">
                <div className="container mx-auto">
                    <Fleet showViewAll={false} showLoadMore={true} />
                </div>
            </div>
        </>
    );
}
