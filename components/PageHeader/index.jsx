import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import './style.scss'

const PageHeader = ({
    title,
    lede,
    breadcrumbs
}) =>
    <section className="page-header container">
        {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs}/>}
        <h1 className="page-header__title">{title}</h1>
        {lede && <p className="page-header__lede">{lede}</p>}
    </section>

export default PageHeader