import { motion } from "framer-motion";
import {
    IoStatsChartSharp,
    IoPeopleSharp,
    IoAnalyticsSharp,
    IoCashOutline,
} from "react-icons/io5";

const AdvertisersPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center flex-col min-h-screen my-20"
        >
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center bg-gradient-to-r from-neutral-900/70 to-zinc-900/70 text-zinc-50 rounded-md px-10 pt-10 pb-10 w-11/12 gap-28"
            >
                <div
                    className="relative flex items-center justify-center h-[50vh] w-full bg-cover bg-center rounded-md shadow-lg mt-16"
                    style={{
                        backgroundImage: 'url("/images/handshake.jpg")',
                    }}
                >
                    <div className="absolute inset-0 bg-neutral-900/70"></div>

                    <div className="relative z-10 text-center px-4">
                        <h2 className="text-5xl font-bold tracking-normal font-montserrat text-zinc-50 shadow-lg">
                            Why Choose{" "}
                            <span className="font-extrabold">
                                <span className="text-blue-500">Hot</span>
                                Aff
                            </span>
                        </h2>
                        <p className="text-xl font-montserrat text-zinc-200 mt-6 leading-8 w-11/12 lg:w-2/3 mx-auto">
                            With a wide range of promotion channels and a
                            network of skilled publishers, HotAff ensures your
                            campaigns reach the right audience, delivering
                            results that matter.
                        </p>
                        <button className="mt-6 text-xl py-2 px-10 text-zinc-50 font-montserrat bg-blue-500 hover:bg-blue-600 transition-all duration-150 rounded-sm tracking-tight shadow-md shadow-slate-800 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 ease-out">
                            <a href="https://hotaff.affise.com/">Sign Up</a>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col w-full items-start">
                    <h2 className="text-5xl font-bold tracking-normal font-raleway shadow-lg">
                        How It Works
                    </h2>
                    <hr className="h-1 w-3/4 bg-blue-500 my-4 border-0" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 w-full justify-items-center">
                        {[
                            {
                                icon: IoPeopleSharp,
                                title: "Register",
                                text: "Create an account and provide details about your offer to start.",
                                backgroundImage: "/images/registration.jpg",
                                alt: "Register",
                            },
                            {
                                icon: IoAnalyticsSharp,
                                title: "Target",
                                text: "We identify your product’s audience to maximize marketing impact.",
                                backgroundImage: "/images/audience.jpg",
                                alt: "Target Audience",
                            },
                            {
                                icon: IoStatsChartSharp,
                                title: "Optimize",
                                text: "Share creatives or collaborate with our team to refine campaigns.",
                                backgroundImage: "/images/optimize.jpg",
                                alt: "Optimize",
                            },
                            {
                                icon: IoCashOutline,
                                title: "Monitor",
                                text: "Stay compliant and monitor traffic through manual and automated tools.",
                                backgroundImage: "/images/dashboard.jpg",
                                alt: "Monitor",
                            },
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                className="relative flex flex-col items-center text-center rounded-md shadow-md w-11/12 max-w-md h-80 p-6 transition-all duration-300 group"
                                style={{
                                    backgroundImage: `url(${card.backgroundImage})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                whileHover={{
                                    boxShadow:
                                        "0px 4px 20px rgba(59, 130, 246, 0.8)",
                                    scale: 1.05,
                                }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>

                                <div className="relative z-10 flex flex-col items-center">
                                    <card.icon className="text-white text-6xl mb-4 transition-all duration-300 group-hover:text-blue-500" />
                                    <h3 className="text-3xl font-bold font-raleway text-white">
                                        {card.title}
                                    </h3>
                                    <p className="text-base font-montserrat leading-6 text-white">
                                        {card.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div
                    className="relative flex items-center justify-center h-[50vh] w-full bg-cover bg-center rounded-md shadow-lg"
                    style={{
                        backgroundImage: 'url("/images/plan.jpg")',
                    }}
                >
                    <div className="absolute inset-0 bg-neutral-900/70"></div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-7xl font-bold tracking-tight font-raleway text-zinc-50 leading-tight">
                            Unlock Your{" "}
                            <span className="text-blue-500 font-extrabold">
                                Digital Potential
                            </span>
                        </h1>
                        <p className="text-xl font-montserrat text-zinc-200 mt-4">
                            Collaborate with{" "}
                            <span className="text-2xl font-bold">
                                <span className="text-blue-500">Hot</span>
                                Aff{" "}
                            </span>
                            to elevate your brand, reach your audience, and
                            drive measurable success.
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AdvertisersPage;
