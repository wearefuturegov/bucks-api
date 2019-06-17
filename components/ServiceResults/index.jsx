import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import ServiceCard from '../ServiceCard'
import Filter from '../Filter'

class ServiceResults extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            filters: {
                category: [
                    {
                        label: "Active",
                        value: "active",
                        checked: false
                    },{
                        label: "Support",
                        value: "support",
                        checked: false
                    },{
                        label: "Cultural",
                        value: "cultural",
                        checked: false
                    },{
                        label: "Learning",
                        value: "learning",
                        checked: false
                    },{
                        label: "Social",
                        value: "social",
                        checked: false
                    }
                ],
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
        if(this.props.query.category){
            let newCategories = this.state.filters.category.map((cat, i)=>{
                return {
                    label: cat.label,
                    value: cat.value,
                    checked: this.props.query.category.includes(cat.value)
                }
            })
            this.setState({
                filters: {
                    category: newCategories
                }
            })
        }
    }

    render(){
        let {services, location} = this.props

        console.log(this.state)

        return(
            <section className="service-results">
                <div className="container">
                    <h2 className="section-title">Services near {location ? <span>{location}</span> : "you" }</h2>
                    
                    <div className="service-results__filters">
                        <Filter
                            title="Your interests"
                            name="category"
                            options={this.state.filters.category}
                            />
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