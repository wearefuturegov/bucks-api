import {useState} from "react"
import Head from "next/head"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import Button from "../components/Button"
import { useRouter } from "next/router"

const RadioItem  = ({name, value, label, currentState, setCurrentState}) =>     
    <>                
        <label htmlFor={`${name}-${value}`}>{label}</label>
        <input id={`${name}-${value}`} type="radio" required name={name} value={value} checked={currentState === value} onChange={()=>{setCurrentState(value)}}/>
    </>

const FeedbackPage = () => {

    const router = useRouter()
    const { category, serviceId } = router.query

    const [response, setResponse] = useState(false)
    const [message, setMessage] = useState("")
    const [satisfied, setSatisfied] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await fetch(`/api/feedback`, {
                method: "post",    
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ 
                    category: category || "general",
                    message: message,
                    satisfied: satisfied,
                    email: email,
                    phone: phone,
                    serviceId: serviceId,
                })
            })
            setResponse(res.status)
        } catch(e){
            setResponse("fail")
        }
    }

    return(
        <Layout withHeader withFooter>
            <Head>
                <title>Feedback | Care and support for adults | Buckinghamshire County Council</title>
            </Head>
            <PageHeader 
                reducedBottomPadding
                breadcrumbs={[
                    {
                        title: "Care for adults",
                        href: "/"
                    },
                    {
                        title: "Feedback"
                    },
                ]}
                title="Give feedback"
                lede="Give feedback on this website"
            />

            <form action="/api/feedback" method="post" className="container" onSubmit={handleSubmit}>

                <fieldset>
                    <legend>Were you able to do what you needed today?</legend>
                    <RadioItem name="satisfied" value="yes" label="Yes" currentState={satisfied} setCurrentState={setSatisfied}/>
                    <RadioItem name="satisfied" value="somewhat" label="Somewhat" currentState={satisfied} setCurrentState={setSatisfied}/>
                    <RadioItem name="satisfied" value="no" label="No" currentState={satisfied} setCurrentState={setSatisfied}/>
                </fieldset>


                <label htmlFor="message">How can we improve this website?</label>
                <textarea id="message" type="text" required name="message" rows="6" onChange={e=>setMessage(e.target.value)}>{message}</textarea>
                <br/>

                <label htmlFor="email">Your email address</label>
                <input id="email" type="text" required name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                <br/>

                <label htmlFor="phone">Your phone number</label>
                <input id="phone" type="text" required name="phone" value={phone} onChange={e=>setPhone(e.target.value)}/>

                <Button>Send feedback</Button>


            </form>

        </Layout>
    )
}


export default FeedbackPage