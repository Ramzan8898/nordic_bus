import Booking from "../components/Booking";
import Brands from "../components/Brands";
import Fleet from "../components/Fleet";
import Reputation from "../components/Reputation";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {

    return (
        <>
            <Reputation />
            <WhyChooseUs />
            <Fleet />
            <Brands />
            <Booking />
        </>
    )
}