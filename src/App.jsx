import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import {
  Outlet,
  useMatches,
  Link as RouterLink,
} from 'react-router-dom'

function BasicBreadcrumbs({ crumbs }) {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {crumbs.map((crumb, index) => {
          return (
            <RouterLink to={crumb.path} key={index} >
              {crumb.name}
            </RouterLink>
          )
        })}
      </Breadcrumbs>
    </div>
  );
}


function App() {
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
      <BasicBreadcrumbs crumbs={crumbs} />
      <Outlet />
    </>
  )

}

export default App
