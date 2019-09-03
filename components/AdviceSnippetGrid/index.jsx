import React from "react"
import PropTypes from "prop-types"
import Card from "../Card"
import "./style.scss"

const AdviceSnippetGrid = ({snippets}) =>
    <div className="advice__grid">
        {snippets.map((snippet, i)=>
            <Card 
                title={snippet.title}
                description={snippet.description}
                href={snippet.href}
                key={i}
                image={snippet.imageUrl}
            />
        )}
    </div>

AdviceSnippetGrid.propTypes = {
    snippets: PropTypes.array.isRequired
}

export default AdviceSnippetGrid