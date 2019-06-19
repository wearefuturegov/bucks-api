import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import './style.scss'

const AdviceSnippetGrid = ({snippets}) =>
    <section className="advice-grid">
        {snippets.map((snippet, i)=>
            <Card 
                title={snippet.title}
                description={snippet.description}
                href={snippet.href}
                key={i}
                />
        )}
    </section>

AdviceSnippetGrid.propTypes = {
    snippets: PropTypes.array.isRequired
}

export default AdviceSnippetGrid