import { Outlet } from "react-router-dom"

export default function Route1() {
    return (
        <>
            <h2>Route 1</h2>
            <Outlet />
        </>
    )
}