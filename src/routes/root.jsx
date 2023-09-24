import {
    Outlet,
    useMatches,
} from 'react-router-dom';

import Breadcrumbs from '../components/Breadcrumb';

export default function Root() {
    const matches = useMatches()
    let crumbs = matches.map((match) => {
        if (match.handle.crumb.show) {
            return {
                name: match.handle.crumb.name,
                path: match.pathname
            }
        }
    })

    return (
        <>
            <Breadcrumbs crumbs={crumbs} />
            <h1>Root Page</h1>
            <Outlet />
        </>
    )
}