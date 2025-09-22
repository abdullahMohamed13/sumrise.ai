import { Outlet } from "react-router-dom";
import PageHeader from "./PageHeader";
import { Navbar } from "../ui/shadcn.io/navbar-01/index";

export default function Layout() {
    return <div>
        <Navbar />
        <PageHeader />
        <Outlet />
    </div>
}
