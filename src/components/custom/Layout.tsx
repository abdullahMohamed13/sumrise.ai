import { Outlet } from "react-router-dom";
import { Navbar } from "../ui/shadcn.io/navbar-01/index";
import { Footer } from "@/sections/Footer";

export default function Layout() {
    return <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
}
