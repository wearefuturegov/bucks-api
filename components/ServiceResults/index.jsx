import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import ServiceCard from '../ServiceCard'
import InterestsFilter from '../Filter'
import queryString from 'query-string'
import Router from 'next/router'

class ServiceResults extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            filters: {
                // Are explicit keys necessary?
                category: [],
                keywords: [],
                ages: [],
                near: false,
                lat: false,
                long: false
            },
            map: false
        }
    }

    componentDidMount(){
        let {ages, keywords, category, near, lat, long} = this.props.query
        this.setState({
            filters: {
                ages: [].concat(ages) || [],
                keywords: [].concat(keywords) || [],
                category: [].concat(category) || [],
                near: near || false,
                lat: lat || false,
                long: long || false
            }
        })
    }

    render(){
        let {services} = this.props

        // Take a new filter object and do stuff
        const updateFilters = async (newFilters) =>{
            await this.setState({
                ...this.state,
                filters: {
                    ...this.state.filters,
                    ...newFilters
                }
            })
            applyChanges()
        }

        // Clear out a named filter
        const showAll = async (name) => {
            await this.setState(prevState => ({
                filters: {
                    ...this.state.filters,
                    [name]: []
                },
            }))
            applyChanges()
        }

        // Set new querystring from state and fetch new results
        const applyChanges = () => {
            Router.push(`/recommendations?${queryString.stringify(this.state.filters)}`)
        }

        return(
            <section className="service-results">
                <div className="container">
                    <h2 className="section-title">Services near you</h2>
                    
                    <div className="service-results__filters">

                        <InterestsFilter
                            categoryFilter={this.state.filters.category}
                            keywordsFilter={this.state.filters.keywords}
                            updateFilters={updateFilters}
                            showAll={showAll}
                            />

                        <button onClick={()=>{showAll('category')}}>Clear all categories</button>
                    </div>
                    
                    <ol className="service-results__list">
                        {services.map((service, i)=>
                            <ServiceCard
                                key={i}
                                assetId={service.assetId}
                                category={service.category}
                                title={service.name || service.parentOrganisation}
                                description={service.description}
                                />
                        )}
                    </ol>
                </div>
            </section>
        )
    }
}

ServiceResults.propTypes = {
    services: PropTypes.array.isRequired
}

export default ServiceResults