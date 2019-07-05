import {useState} from "react"
import Head from "next/head"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import Button from "../components/Button"
import { useRouter } from "next/router"
import "./feedback.scss"

const RadioItem  = ({name, value, label, currentState, setCurrentState}) =>     
    <div className="radio-button">                
        <label className="radio-button__label" htmlFor={`${name}-${value}`}>{label}</label>
        <input className="radio-button__input" id={`${name}-${value}`} type="radio" required name={name} value={value} checked={currentState === value} onChange={()=>{setCurrentState(value)}}/>
    </div>

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
            const res = await fetch("/api/feedback", {
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

    if(response===200){ return(
        <Layout withHeader withFooter>
            <Head>
                <title>Feedback | Care and support for adults | Buckinghamshire County Council</title>
            </Head>
            <PageHeader 
                breadcrumbs={[
                    {
                        title: "Care for adults",
                        href: "/"
                    },
                    {
                        title: "Feedback"
                    },
                ]}
                title="Thank you for your feedback"
                lede="If you gave us contact details, we may be in touch to learn more."
            />
        </Layout>
    )}

    return(
        <Layout withHeader withFooter>
            <Head>
                <title>Feedback | Care and support for adults | Buckinghamshire County Council</title>
            </Head>
            <PageHeader 
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

            <form action="/api/feedback" method="post" className="container feedback-form" onSubmit={handleSubmit}>

                <fieldset className="radio-button-group">
                    <legend className="radio-button-group__legend">Were you able to do what you needed today?</legend>
                    <RadioItem name="satisfied" value="yes" label="Yes" currentState={satisfied} setCurrentState={setSatisfied}/>
                    <RadioItem name="satisfied" value="somewhat" label="Somewhat" currentState={satisfied} setCurrentState={setSatisfied}/>
                    <RadioItem name="satisfied" value="no" label="No" currentState={satisfied} setCurrentState={setSatisfied}/>
                </fieldset>

                <div className="form-input">
                    <label className="form-input__label" htmlFor="message">How can we improve this website?</label>
                    <textarea className="form-input__textarea" id="message" type="text" required name="message" rows="6" onChange={e=>setMessage(e.target.value)}>{message}</textarea>
                </div>

                <p>You don't have to give us any contact details, but if you choose to, it'll be easier for us to get in touch to find out more.</p>

                <div className="form-input">
                    <label className="form-input__label" htmlFor="email">Your email address</label>
                    <p className="form-input__hint">Optional</p>
                    <input className="form-input__text-input" id="email" type="text" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                </div>
 
                <div className="form-input">
                    <label className="form-input__label" htmlFor="phone">Your phone number</label>
                    <p className="form-input__hint">Optional</p>
                    <input className="form-input__text-input" id="phone" type="text" name="phone" value={phone} onChange={e=>setPhone(e.target.value)}/>
                </div>

                <Button>Send feedback</Button>


            </form>

        </Layout>
    )
}


export default FeedbackPage