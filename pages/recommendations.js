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
            category: [
                {
                    label: "Active",
                    value: "active",
                    checked: false
                },
                {
                    label: "Learning",
                    value: "learning",
                    checked: false
                },
                {
                    label: "Cultural",
                    value: "cultural",
                    checked: false
                },
                {
                    label: "Social",
                    value: "social",
                    checked: false
                },
                {
                    label: "Support",
                    value: "support",
                    checked: false
                }
            ]
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


        if(this.props.query.category){
            let newcats = this.state.category.map((cat, i)=>{

                return {
                    label: cat.label,
                    value: cat.value,
                    checked: this.props.query.category.includes(cat.value)
                }

                
            })

            console.log(newcats)
        }



    }


    render(){


        let {services, snippets } = this.props

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
                {snippets && <AdviceSnippetGrid snippets={snippets}/>}

                <CentredText/>
        </Layout>
        )
    }
}

export default Recommendations