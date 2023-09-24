import { Outlet } from "react-router-dom";

export default function ParentRoute() {
    return (
        <>
        <h2>Parent Route</h2>
        <Outlet />
        </>
    )
}