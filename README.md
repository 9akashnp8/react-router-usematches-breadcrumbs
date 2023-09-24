# About

Breadcrumbs are a foundational part of any modern web app. This repo contains implementation of Breadcrumbs using react-router.

# Stack
1. React
2. React router v6:
3. Material UI

We'll be using the Material UI Breadcrumbs component to setup the breadcrumb UI.

# How it works
```javascript
{
    path: "/",
    element: <Root />,
    handle: {
        crumb: {
            show: true,
            name: "root",
            },
    },
}
```
We utilize the `handle` property of Route object to implement an object to control crumb visiblity and content.

```javascript
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

```
The `useMatches` hook returns an array of all the `Route` objects that matches the current browser url. It contains all the propeties of Route object (path, id, handle etc).

We use this arrray to extract the crumb information from handle property and generate
a Breadcrumb component with Link to respective paths.

