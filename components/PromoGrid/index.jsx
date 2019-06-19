import React from 'react'
import PropTypes from 'prop-types'
import Promo from '../Promo'
import './style.scss'

const PromoGrid = ({title, promos}) =>
    <section className="promo-grid">
        <div className="container">
            {title && <h2 className="section-title">{title}</h2>}
            <ul className="promo-grid__promos">
                {promos.map((promo, i)=>
                    <Promo
                        title={promo.title}
                        description={promo.description}
                        href={promo.href}
                        key={i}
                        />    
                )}
            </ul>
        </div>
    </section>

PromoGrid.propTypes = {
    title: PropTypes.string,
    promos: PropTypes.array.isRequired
}

export default PromoGrid