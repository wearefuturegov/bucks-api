import React from 'react'
import PropTypes from 'prop-types'
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

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    lede: PropTypes.string,
    breadcrumbs: PropTypes.array
}

export default PageHeader