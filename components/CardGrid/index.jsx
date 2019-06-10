import React from 'react'
import Card from '../Card'
import './style.scss'

const CardGrid = ({title, cards, afterHero}) =>
    <section className={(afterHero)? "card-grid card-grid--extra-top-padding": "card-grid"}>
        <div className="container">
            {title && <h2 className="section-title">{title}</h2>}
            <div className="card-grid__cards">
                {cards.map((card, i)=>
                    <Card
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        href={card.href}
                        key={i}
                        />    
                )}
            </div>
        </div>
    </section>

export default CardGrid