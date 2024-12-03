import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import ParticleBackground from "./particles-background";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <ParticleBackground />
            <Header />
            <main className="flex flex-grow items-center justify-center">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
