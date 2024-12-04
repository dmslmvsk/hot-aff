import { GoRocket } from "react-icons/go";
import ItemCard from "../components/ui/item-card";
import { IoCreateSharp } from "react-icons/io5";
import { IoGiftSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const HomePage = () => {
    return (
        <motion.div
            className="flex items-center flex-col min-h-screen my-8 sm:my-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="flex flex-col items-center bg-gradient-to-r from-neutral-900/70 to-zinc-900/70 text-zinc-50 rounded-md px-6 sm:px-10 pt-6 sm:pt-10 pb-6 sm:pb-10 w-full sm:w-11/12 gap-16 sm:gap-28"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="flex flex-col sm:flex-row items-start w-full sm:w-auto">
                    <div className="w-full sm:w-1/2">
                        <h1 className="text-4xl sm:text-7xl font-bold tracking-tight font-raleway w-full sm:w-2/3">
                            Passion{" "}
                            <span className="text-blue-500">drives </span>
                            <GoRocket className="inline-block w-12 sm:w-16" />
                            achievement
                        </h1>
                    </div>
                    <div className="w-full sm:w-1/2 flex flex-col items-start gap-5 mt-6 sm:mt-0">
                        <p className="tracking-tight font-montserrat text-lg sm:text-xl leading-7 sm:leading-8 w-full sm:w-11/12">
                            <span className=" text-2xl sm:text-3xl font-bold">
                                <span className="text-blue-500">Hot</span>
                                Aff
                            </span>{" "}
                            is a Digital Performance Marketplace that seamlessly
                            aligns the interests of advertisers and publishers.
                            By providing exceptional support and leveraging deep
                            market expertise, we ensure maximum profitability
                            for all parties in every deal.
                        </p>
                        <button className="text-lg sm:text-xl py-2 px-8 sm:px-10 text-zinc-50 font-montserrat bg-blue-500 hover:bg-blue-600 transition-all duration-150 rounded-sm tracking-tight shadow-md shadow-slate-800 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 ease-out">
                            <a href="https://hotaff.affise.com/">Sign Up</a>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-start w-full sm:w-auto mt-8 sm:mt-16">
                    <h2 className="text-4xl sm:text-6xl font-bold tracking-normal font-raleway shadow-lg">
                        Verticals
                    </h2>
                    <hr className="h-1 w-3/4 bg-blue-500 my-4 border-0" />
                    <div className="flex flex-col gap-8 mt-16">
                        <div className="flex flex-col sm:flex-row items-start w-full">
                            <div className="w-full sm:w-1/2 flex flex-col items-start gap-4">
                                <h3 className="text-3xl sm:text-4xl font-raleway tracking-tight font-bold border-b-2 border-blue-500 pb-1 w-fit">
                                    Vouchers & Sweepstakes
                                </h3>
                                <p className="tracking-tight font-montserrat text-base sm:text-lg leading-8 w-full sm:w-5/6 ml-2">
                                    The Sweepstakes & Vouchers vertical focuses
                                    on creating engaging landing pages that
                                    encourage users to participate in giveaways
                                    and special promotions.
                                </p>
                            </div>
                            <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
                                <ul className="list-disc flex flex-col items-start gap-2 custom-marker">
                                    <li className="text-sm sm:text-base font-montserrat leading-6 tracking-tight">
                                        <span className="text-base font-bold text-blue-500">
                                            Gift Cards:
                                        </span>{" "}
                                        Campaigns that offer gift cards from
                                        popular brands like Amazon, Starbucks,
                                        Walmart, and other top retailers.
                                    </li>
                                    <li className="text-sm sm:text-base font-montserrat leading-6 tracking-tight">
                                        <span className="text-base font-bold text-blue-500">
                                            Gadgets & Electronics:
                                        </span>{" "}
                                        Sweepstakes that allow participants to
                                        win popular electronics, such as
                                        iPhones, tablets, smartwatches, and
                                        headphones.
                                    </li>
                                    <li className="text-sm sm:text-base font-montserrat leading-6 tracking-tight">
                                        <span className="text-base font-bold text-blue-500">
                                            Travel Vouchers:
                                        </span>{" "}
                                        Offers that include chances to win
                                        discounts or vouchers for travel-related
                                        services.
                                    </li>
                                    <li className="text-sm sm:text-base font-montserrat leading-6 tracking-tight">
                                        <span className="text-base font-bold text-blue-500">
                                            Coupons & Discounts:
                                        </span>{" "}
                                        Promotions that provide discount codes
                                        or coupons for future purchases.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start w-full mt-8 sm:mt-16">
                            <div className="w-full sm:w-1/2 flex flex-col gap-4">
                                <h3 className="text-3xl sm:text-4xl font-raleway tracking-tight font-bold border-b-2 border-blue-500 pb-1 w-fit">
                                    Dating & Social Networking
                                </h3>
                                <p className="tracking-tight font-montserrat text-base sm:text-lg leading-8 w-full sm:w-5/6 ml-2">
                                    The Dating & Social Networking vertical
                                    focuses on connecting users through various
                                    platforms that foster relationships, both
                                    romantic and platonic.
                                </p>
                            </div>
                            <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
                                <ul className="list-disc flex flex-col items-start gap-2 custom-marker">
                                    <li className="text-sm sm:text-base font-montserrat leading-6 tracking-tight">
                                        <span className="text-base font-bold text-blue-500">
                                            Matchmaking Services:
                                        </span>{" "}
                                        Platforms that connect users based on
                                        shared interests, values, and
                                        preferences.
                                    </li>
                                    <li className="text-sm sm:text-base font-montserrat leading-6 tracking-tight">
                                        <span className="text-base font-bold text-blue-500">
                                            Group Events & Activities:
                                        </span>{" "}
                                        Opportunities for users to engage in
                                        social events and group activities.
                                    </li>
                                    <li className="text-sm sm:text-base font-montserrat leading-6 tracking-tight">
                                        <span className="text-base font-bold text-blue-500">
                                            Online Communities:
                                        </span>{" "}
                                        Dedicated forums and chat rooms where
                                        users can share experiences, seek
                                        advice, and connect.
                                    </li>
                                    <li className="text-sm sm:text-base font-montserrat leading-6 tracking-tight">
                                        <span className="text-base font-bold text-blue-500">
                                            Dating Tips & Resources:
                                        </span>{" "}
                                        Articles and guides to enhance social
                                        skills and relationship building.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center mt-16 sm:mt-24">
                    <div className="text-start w-full">
                        <h2 className="text-4xl sm:text-6xl font-bold tracking-normal font-raleway shadow-lg">
                            Join Us
                        </h2>
                        <hr className="h-1 w-3/4 bg-blue-500 my-4 border-0" />
                    </div>
                    <div className="flex flex-col items-center mb-8">
                        <p className="text-2xl sm:text-3xl font-raleway font-bold tracking-tight text-center mb-6">
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
                                icon={<IoGiftSharp />}
                                title="Earn with Ease"
                                text="Start earning by promoting top-performing offers and earning commissions."
                            />
                            <ItemCard
                                icon={<IoGiftSharp />}
                                title="Claim Your Bonus"
                                text="Participate in special promotions and earn extra bonuses for your activity!"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default HomePage;
