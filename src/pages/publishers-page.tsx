import { motion } from "framer-motion";

const PublishersPage = () => {
    return (
        <motion.div
            className="flex items-center flex-col min-h-screen my-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="flex flex-col items-center bg-gradient-to-r from-neutral-900/70 to-zinc-900/70 text-zinc-50 rounded-md px-10 pt-10 pb-10 w-11/12 gap-28"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-7xl font-bold tracking-tight font-raleway">
                    Publishers
                </h1>
                <p className="tracking-tight font-montserrat text-xl leading-8 w-11/12">
                    Business Models: We operate on CPA, CPL, CPI, and Revshare
                    models. Affinity possesses the technical capabilities and
                    market expertise to identify the most profitable
                    destinations for your traffic while ensuring a safe and
                    efficient route.
                </p>
                <p className="tracking-tight font-montserrat text-xl leading-8 w-11/12">
                    Our team of experienced managers is equipped to address any
                    optimization challenges that arise in your marketing
                    campaigns.
                </p>

                <div className="flex flex-col items-start w-full mt-10">
                    <h2 className="text-6xl font-bold tracking-normal font-raleway shadow-lg">
                        Bonuses
                    </h2>
                    <hr className="h-1 w-3/4 bg-blue-500 my-4 border-0" />
                    <ul className="list-disc ml-5 text-lg font-montserrat w-11/12 mt-6">
                        <li className="my-2">
                            Varied portfolio of direct offers and exclusive
                            deals.
                        </li>
                        <li className="my-2">
                            Performance reports and dedicated support.
                        </li>
                        <li className="my-2">
                            In-house brands with flexible payment options and
                            multiple payment methods.
                        </li>
                        <li className="my-2">
                            High commissions in the industry, including
                            monetization through CPA and CPC models.
                        </li>
                        <li className="my-2">
                            Tailored order forms resulting in increased
                            conversions.
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center mb-8">
                    <h2 className="text-6xl font-bold tracking-normal font-raleway shadow-lg mt-10">
                        Join Our Network!
                    </h2>
                    <hr className="h-1 w-3/4 bg-blue-500 my-4 border-0" />
                    <p className="text-3xl font-raleway font-bold tracking-tight text-center mb-6">
                        Let’s maximize your earning potential together!
                    </p>
                    <button className="text-xl py-2 px-10 text-zinc-50 font-montserrat bg-blue-500 hover:bg-blue-600 transition-all duration-150 rounded-sm tracking-tight shadow-md shadow-slate-800 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 ease-out">
                        Get Started Now
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default PublishersPage;
