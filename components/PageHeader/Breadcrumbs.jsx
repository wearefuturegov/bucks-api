import React from 'react'
import Link from 'next/link'

const Breadcrumbs = ({breadcrumbs}) =>
    <ul className="breadcrumbs">
        {breadcrumbs.map((breadcrumb, i)=>
            <li key={i} className="breadcrumbs__item">
                {(breadcrumb.href)?
                    <Link href={breadcrumb.href}>
                        <a className="breadcrumbs__link">{breadcrumb.title}</a>
                    </Link>
                : breadcrumb.title }
            </li>    
        )}
    </ul>

export default Breadcrumbs