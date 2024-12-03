import { motion } from "framer-motion";

const AdvertisersPage = () => {
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
                    Advertisers
                </h1>
                <p className="tracking-tight font-montserrat text-xl leading-8 w-11/12">
                    Enhance your brand’s digital presence. To experience
                    measurable improvements, please register for an account and
                    share your offer. HotAff has successfully executed campaigns
                    across all major verticals, including Sweeps, Dating,
                    Insurance, and more.
                </p>
                <p className="tracking-tight font-montserrat text-xl leading-8 w-11/12">
                    Our diverse range of promotion channels, utilized by our
                    publisher network, enables us to engage audiences in the
                    most effective ways for your business. We will identify the
                    most relevant audience for your product, ensuring you
                    achieve your marketing goals.
                </p>
                <ul className="list-disc ml-5 text-lg font-montserrat w-11/12 mt-6">
                    <li className="my-2">
                        Please provide the offer description, target audience,
                        and type of monetization for your offer.
                    </li>
                    <li className="my-2">
                        Share your creatives, or feel free to collaborate with
                        our team to develop them.
                    </li>
                    <li className="my-2">
                        We conduct manual monitoring, and our staff routinely
                        checks angles and creatives for compliance.
                    </li>
                    <li className="my-2">
                        Both in-house and third-party solutions consistently
                        monitor incoming traffic.
                    </li>
                </ul>
                <div className="flex flex-col items-center mb-8">
                    <h2 className="text-6xl font-bold tracking-normal font-raleway shadow-lg mt-10">
                        Partner with Us!
                    </h2>
                    <hr className="h-1 w-3/4 bg-blue-500 my-4 border-0" />
                    <p className="text-3xl font-raleway font-bold tracking-tight text-center mb-6">
                        Let’s work together to drive your success!
                    </p>
                    <button className="text-xl py-2 px-10 text-zinc-50 font-montserrat bg-blue-500 hover:bg-blue-600 transition-all duration-150 rounded-sm tracking-tight shadow-md shadow-slate-800 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 ease-out">
                        Get Started Now
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AdvertisersPage;
