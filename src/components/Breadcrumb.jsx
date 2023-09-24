import { Link as RouterLink } from 'react-router-dom'
import MaterialBreadCrumbs from '@mui/material/Breadcrumbs';

export default function Breadcrumbs({ crumbs }) {
    return (
        <div role="presentation">
            <MaterialBreadCrumbs aria-label="breadcrumb">
                {crumbs.map((crumb, index) => {
                    return (
                        <RouterLink to={crumb.path} key={index} >
                            {crumb.name}
                        </RouterLink>
                    )
                })}
            </MaterialBreadCrumbs>
        </div>
    );
}