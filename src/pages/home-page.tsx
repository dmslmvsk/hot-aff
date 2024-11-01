import { GoRocket } from "react-icons/go";
import ItemCard from "../components/ui/item-card";
import { IoCreateSharp } from "react-icons/io5";
import { IoGiftSharp } from "react-icons/io5";

import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoRocketSharp } from "react-icons/io5";

const HomePage = () => {
    return (
        <div className="flex items-center flex-col min-h-screen my-20">
            <div className="flex flex-col items-center bg-gradient-to-r from-neutral-900/70 to-zinc-900/70 text-zinc-50 rounded-md px-10 pt-10 pb-10 w-11/12 gap-28">
                <div className="flex flex-row items-start">
                    <div className="w-1/2">
                        <h1 className="text-7xl font-bold tracking-tight font-raleway w-2/3">
                            passion{" "}
                            <span className="text-blue-500">drives </span>
                            <GoRocket className="inline-block w-16" />
                            achievement
                        </h1>
                    </div>
                    <div className="w-1/2 flex flex-col items-start gap-5">
                        <p className="tracking-tight font-montserrat text-xl leading-8 w-11/12">
                            <span className=" text-3xl font-bold">
                                <span className="text-blue-500">Hot</span>Aff
                            </span>{" "}
                            is a Digital Performance Marketplace that seamlessly
                            aligns the interests of advertisers and publishers.
                            By providing exceptional support and leveraging deep
                            market expertise, we ensure maximum profitability
                            for all parties in every deal.
                        </p>
                        <button className="text-xl py-2 px-10 text-zinc-50 font-montserrat bg-blue-500 hover:bg-blue-600 transition-all duration-150 rounded-sm tracking-tight shadow-md shadow-slate-800 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 ease-out">
                            Sign Up
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="text-6xl font-bold tracking-normal font-raleway shadow-lg">
                        verticals
                    </h2>
                    <hr className="h-1 w-3/4 bg-blue-500 my-4 border-0" />
                    <div className="flex flex-col gap-8 mt-16">
                        <div className="flex flex-row items-start">
                            <div className="w-1/2 flex flex-col items-start gap-4">
                                <h3 className="text-4xl font-raleway tracking-tight font-bold border-b-2 border-blue-500 pb-1 w-fit">
                                    vouchers & sweepstakes
                                </h3>

                                <p className="tracking-tight font-montserrat text-base leading-8 w-5/6 ml-2">
                                    The Sweepstakes & Vouchers vertical focuses
                                    on creating engaging landing pages that
                                    encourage users to participate in giveaways
                                    and special promotions. This vertical
                                    targets audiences interested in prizes such
                                    as gift cards from top retail brands and the
                                    latest must-have gadgets. The goal is to
                                    maximize user engagement and conversion
                                    rates.
                                </p>
                            </div>
                            <div className="w-1/2 mt-16">
                                <ul className="list-disc flex flex-col items-start gap-2 custom-marker">
                                    <li className="text-sm font-montserrat leading-6 tracking-tight">
                                        <span className="text-base font-bold text-blue-500">
                                            Gift Cards:
                                        </span>{" "}
                                        Campaigns that offer gift cards from
                                        popular brands like Amazon, Starbucks,
                                        Walmart, and other top retailers. Gift
                                        cards are highly appealing and provide
                                        an easy incentive for user
                                        participation.
                                    </li>
                                    <li className="text-sm font-montserrat leading-6 tracking-tight">
                                        <span className="text-base font-bold text-blue-500">
                                            Gadgets & Electronics:
                                        </span>{" "}
                                        Sweepstakes that allow participants to
                                        win popular electronics, such as
                                        iPhones, tablets, smartwatches, and
                                        headphones. This category appeals to
                                        tech-savvy users and fans of the latest
                                        gadgets.
                                    </li>
                                    <li className="text-sm font-montserrat leading-6 tracking-tight">
                                        <span className="text-base font-bold text-blue-500">
                                            Travel Vouchers:
                                        </span>{" "}
                                        Offers that include chances to win
                                        discounts or vouchers for travel-related
                                        services, such as flights, hotel
                                        bookings, and vacation packages. Ideal
                                        for audiences interested in travel and
                                        experiences.
                                    </li>
                                    <li className="text-sm font-montserrat leading-6 tracking-tight">
                                        <span className="text-base font-bold text-blue-500">
                                            Coupons & Discounts:
                                        </span>{" "}
                                        Promotions that provide discount codes
                                        or coupons for future purchases. This
                                        subcategory caters to cost-conscious
                                        users and can drive repeat engagement by
                                        incentivizing future purchases.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-row items-start">
                            <div className="w-1/2 flex flex-col gap-4">
                                <h3 className="text-4xl font-raleway tracking-tight font-bold border-b-2 border-blue-500 pb-1 w-fit">
                                    dating & social networking
                                </h3>
                                <p className="tracking-tight font-montserrat text-base leading-8 w-5/6 ml-2">
                                    The Dating & Social Networking vertical
                                    focuses on connecting users through various
                                    platforms that foster relationships, both
                                    romantic and platonic. This vertical is
                                    designed to attract audiences interested in
                                    meeting new people, sharing experiences, and
                                    building connections. By leveraging targeted
                                    marketing strategies, the goal is to enhance
                                    user engagement and drive conversions.
                                </p>
                            </div>
                            <div className="w-1/2 mt-16">
                                <ul className="list-disc flex flex-col items-start gap-2 custom-marker">
                                    <li className="text-sm font-montserrat leading-6 tracking-tight">
                                        <span className="text-base font-bold text-blue-500">
                                            Matchmaking Services:
                                        </span>{" "}
                                        Platforms that connect users based on
                                        shared interests, values, and
                                        preferences, facilitating personalized
                                        matchmaking experiences.
                                    </li>
                                    <li className="text-sm font-montserrat leading-6 tracking-tight">
                                        <span className="text-base font-bold text-blue-500">
                                            Group Events & Activities:
                                        </span>{" "}
                                        Opportunities for users to engage in
                                        social events and group activities,
                                        enhancing connections in a fun and
                                        relaxed environment.
                                    </li>
                                    <li className="text-sm font-montserrat leading-6 tracking-tight">
                                        <span className="text-base font-bold text-blue-500">
                                            Online Communities:
                                        </span>{" "}
                                        Dedicated forums and chat rooms where
                                        users can share experiences, seek
                                        advice, and connect with like-minded
                                        individuals.
                                    </li>
                                    <li className="text-sm font-montserrat leading-6 tracking-tight">
                                        <span className="text-base font-bold text-blue-500">
                                            Dating Tips & Resources:
                                        </span>{" "}
                                        Articles and guides that provide users
                                        with valuable insights on dating
                                        etiquette, relationship building, and
                                        enhancing social skills.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center">
                    <div className="text-start w-full">
                        <h2 className="text-6xl font-bold tracking-normal font-raleway shadow-lg">
                            join us
                        </h2>
                        <hr className="h-1 w-3/4 bg-blue-500 my-4 border-0" />
                    </div>
                    <div className="flex flex-col items-center mb-8">
                        <p className="text-3xl font-raleway font-bold tracking-tight text-center mb-6">
                            We offer a wide range of traffic options and unique
                            opportunities to maximize your earnings!
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
                            <ItemCard
                                icon={<IoCreateSharp />}
                                title="Create Your Account"
                                text="Join our platform and gain access to various traffic sources."
                            />
                            <ItemCard
                                icon={<IoCheckmarkDoneSharp />}
                                title="Verify Traffic Quality"
                                text="Ensure that your advertising campaigns reach a high-conversion target audience."
                            />
                            <ItemCard
                                icon={<IoRocketSharp />}
                                title="Launch Your Campaign"
                                text="Easily set up and manage your ad campaigns to achieve your goals."
                            />
                            <ItemCard
                                icon={<IoGiftSharp />}
                                title="Claim Your Bonus"
                                text="Participate in special promotions and earn extra bonuses for your activity!"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
