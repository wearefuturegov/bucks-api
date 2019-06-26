import React, {useState} from "react"
import PropTypes from "prop-types"
import AdviceSnippetsGrid from "../AdviceSnippetGrid"
import Filters from "../Filters"
import ServicesGrid from "../ServicesGrid"
import Alert from "../Alert"
import Button from "../Button"
import "./style.scss"
import loadingIcon from "./loading.svg"

const Recommendations = ({services, snippets, query, onLoadMore, moreToLoad, totalServices, loading}) => {

    // Location filter state moved up so that alert bar can trigger dialog
    const [dialogIsOpen, toggleDialog] = useState(false)

    return(
        <>
            <Filters
                query={query}
                locationFilterIsOpen={dialogIsOpen}
                toggleLocationFilterDialog={toggleDialog}
            />

            <section className="recommendations">
                <div className="container">
                    {(query.formattedLocation === "Buckinghamshire, UK") && <Alert onClick={()=>{
                        toggleDialog(true)
                    }}/>}
                    <ServicesGrid services={services} totalServices={totalServices} query={query}/>
                    {(!loading && moreToLoad) && <Button centredSecondary onClick={onLoadMore}>Show more results</Button>}
                    {loading && <img className="recommendations__loader" src={loadingIcon} alt="Loading..."/>}
                    {snippets.length > 0 && <AdviceSnippetsGrid snippets={snippets}/>}
                </div>
            </section>
        </>
    )
}

Recommendations.propTypes = {
    services: PropTypes.array.isRequired,
    snippets: PropTypes.array.isRequired,
    query: PropTypes.object,
    moreToLoad: PropTypes.bool,
    totalServices: PropTypes.number.isRequired
}

export default Recommendations