import {
    Outlet,
    useMatches,
} from 'react-router-dom';

import Breadcrumbs from '../components/Breadcrumb';

export default function Root() {
    const matches = useMatches()
    let crumbs = matches
        .map((match) => {
            return {
                name: match.id,
                path: match.pathname
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