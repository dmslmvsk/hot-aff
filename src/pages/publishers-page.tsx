import { motion } from "framer-motion";
import {
    IoWalletSharp,
    IoStatsChartSharp,
    IoAnalyticsSharp,
    IoCashOutline,
    IoCash,
} from "react-icons/io5";

const PublishersPage = () => {
    const businessModels = [
        {
            icon: IoCashOutline,
            title: "CPA",
            text: "Cost per Action — Earn when users complete specific actions.",
        },
        {
            icon: IoAnalyticsSharp,
            title: "CPL",
            text: "Cost per Lead — Get rewarded for generating quality leads.",
        },
        {
            icon: IoStatsChartSharp,
            title: "CPI",
            text: "Cost per Install — Perfect for app promotion and growth.",
        },
        {
            icon: IoCash,
            title: "CPS",
            text: "Cost per Sale — Earn when a sale is made through your referral.",
        },
        {
            icon: IoWalletSharp,
            title: "Revshare",
            text: "Revenue Sharing — Earn a percentage of total sales.",
        },
    ];

    const bonuses = [
        {
            text: "Varied portfolio of direct offers and exclusive deals.",
            image: "/images/graph.jpg",
        },
        {
            text: "Performance reports and dedicated support.",
            image: "/images/report.jpg",
        },
        {
            text: "In-house brands with flexible payment options and multiple payment methods.",
            image: "/images/payment.jpg",
        },
        {
            text: "High commissions in the industry, including monetization through CPA and CPC models.",
            image: "/images/money.jpg",
        },
    ];

    return (
        <motion.div
            className="flex flex-col items-center min-h-screen my-20 px-4 sm:px-8 lg:px-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center bg-gradient-to-r from-neutral-900/70 to-zinc-900/70 text-zinc-50 rounded-md px-6 pt-8 pb-12 w-full lg:w-11/12 gap-12 sm:gap-16 lg:gap-28"
            >
                <div
                    className="relative flex items-center justify-center h-[50vh] sm:h-[60vh] w-full bg-cover bg-center rounded-md shadow-lg"
                    style={{
                        backgroundImage: 'url("/images/network.jpg")',
                    }}
                >
                    <div className="absolute inset-0 bg-neutral-900/70"></div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight font-raleway text-zinc-50 leading-tight">
                            Elevate Your{" "}
                            <span className="text-blue-500 font-extrabold">
                                Earnings
                            </span>{" "}
                            with HotAff
                        </h1>
                        <p className="text-lg sm:text-xl font-montserrat text-zinc-200 mt-4">
                            Join a network of top-tier publishers and unlock
                            exclusive offers, competitive rates, and seamless
                            optimization.
                        </p>
                        <button className="mt-6 text-lg sm:text-xl py-2 px-8 sm:px-10 text-zinc-50 font-montserrat bg-blue-500 hover:bg-blue-600 transition-all duration-150 rounded-sm tracking-tight shadow-md shadow-slate-800 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 ease-out">
                            <a href="https://hotaff.affise.com/"> Join Now</a>
                        </button>
                    </div>
                </div>
                <div className="w-full mt-16 mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-normal font-raleway shadow-lg text-left">
                        Business Models
                    </h2>
                    <hr className="h-1 w-3/4 bg-blue-500 my-4 border-0" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
                        {businessModels.map((model, index) => (
                            <a href="https://hotaff.affise.com/">
                                <motion.div
                                    key={index}
                                    className="relative flex flex-col items-center text-center rounded-md shadow-md p-4 bg-gradient-to-br from-neutral-800 to-zinc-700 text-white transition-all duration-300 group"
                                    whileHover={{
                                        boxShadow:
                                            "0px 4px 20px rgba(59, 130, 246, 0.8)",
                                        scale: 1.05,
                                    }}
                                >
                                    <model.icon className="text-4xl mb-4 transition-all duration-300 group-hover:text-blue-500" />
                                    <h3 className="text-xl font-bold">
                                        {model.title}
                                    </h3>
                                    <p className="text-sm mt-2">{model.text}</p>
                                </motion.div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="w-full mt-16 mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-normal font-raleway shadow-lg text-left">
                        Bonuses
                    </h2>
                    <hr className="h-1 w-3/4 bg-blue-500 my-4 border-0" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 justify-center">
                        {bonuses.map((bonus, index) => (
                            <motion.div
                                key={index}
                                className="relative flex items-center justify-center p-6 bg-cover bg-center text-white rounded-md shadow-lg transition-all duration-300 group h-72 sm:h-80 w-full sm:w-96 mx-auto"
                                style={{
                                    backgroundImage: `url(${bonus.image})`,
                                }}
                                whileHover={{
                                    boxShadow:
                                        "0px 4px 20px rgba(59, 130, 246, 0.8)",
                                    scale: 1.05,
                                }}
                            >
                                <div className="absolute inset-0 bg-black/50 rounded-md"></div>
                                <div className="relative z-10 text-center">
                                    <p className="text-lg sm:text-xl font-montserrat">
                                        {bonus.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default PublishersPage;
