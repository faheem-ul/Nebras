import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar always at top */}
            <Navbar />

            {/* Centered main content */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer always at bottom */}
            <Footer />
        </div>
    );
}
