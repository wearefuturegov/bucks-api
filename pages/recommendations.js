import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import AdviceSnippetGrid from '../components/AdviceSnippetGrid'
import ServiceResults from '../components/ServiceResults'
import CentredText from '../components/CentredText'
import fetch from 'isomorphic-unfetch'
import queryString from 'query-string'
import Router from 'next/router'

class Recommendations extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            category: []
        }
    }

    static async getInitialProps({req, query}){
        const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
        const res2 = await fetch(`${baseUrl}/api/services?${queryString.stringify(query)}`);
        const services = await res2.json();
        return {
            services: services.results,
            query: query
        }
    }

    componentDidMount(){
        this.setState({
            category: this.state.category.concat(this.props.query.category)
        })
    }

    render(){
        let {services, snippets } = this.props

        const changeSelection = (e) => {
            // NO IDEA
            // LITERALLY NONE
        } 

        return(
            <Layout withHeader>
            <PageHeader 
                breadcrumbs={[
                    {
                        title: "Care for adults",
                        href: "/"
                    },
                    {
                        title: "Services in your area"
                    },
                ]}
                title="Your recommendations"
                />

                <Filter 
                    currentSelection={this.state.category}
                    changeSelection={changeSelection}
                    options={[
                        {
                            label: "Active",
                            value: "active"
                        },
                        {
                            label: "Learning",
                            value: "learning"
                        },
                        {
                            label: "Cultural",
                            value: "cultural"
                        },
                        {
                            label: "Social",
                            value: "social"
                        },
                        {
                            label: "Support",
                            value: "support"
                        }
                    ]}
                    />

                {snippets && <AdviceSnippetGrid snippets={snippets}/>}
                {services && <ServiceResults services={services}/>}

                <CentredText/>
        </Layout>
        )
    }
}

export default Recommendations