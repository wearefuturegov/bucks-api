import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import './style.scss'

const AdviceSnippetGrid = ({snippets}) =>
    <section className="advice-grid">
        <div className="container advice-grid__inner">
            {snippets.map((snippet, i)=>
                <Card 
                    green
                    title={snippet.title}
                    description={snippet.description}
                    href={snippet.href}
                    />
            )}
        </div>
    </section>

AdviceSnippetGrid.propTypes = {
    snippets: PropTypes.array.isRequired
}

export default AdviceSnippetGrid