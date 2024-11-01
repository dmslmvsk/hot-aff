import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import ParticleBackground from "./particles-background";

const Layout = () => {
    return (
        <div className="h-full w-full">
            <ParticleBackground />
            <Header />
            <main className=" ">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
