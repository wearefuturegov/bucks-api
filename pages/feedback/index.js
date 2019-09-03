import {useState} from "react"
import Head from "next/head"
import Layout from "../../components/Layout"
import PageHeader from "../../components/PageHeader"
import Button from "../../components/Button"
import { useRouter } from "next/router"
import "./feedback.scss"

const RadioItem  = ({name, value, label, currentState, setCurrentState}) =>     
    <div className="radio-button">                
        <input className="radio-button__input visually-hidden" id={`${name}-${value}`} type="radio" required name={name} value={value} checked={currentState === value} onChange={()=>{setCurrentState(value)}}/>
        <label className="radio-button__label" htmlFor={`${name}-${value}`}>{label}</label>
    </div>

const FeedbackPage = () => {

    const router = useRouter()
    const { category, serviceId } = router.query

    // eslint-disable-next-line no-unused-vars
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
            if(res.status === 200) router.push({
                pathname: "/feedback/thanks"
            })
        } catch(e){
            setResponse("fail")
        }
    }

    let title = "Give feedback"
    if(category === "amend") title = "Suggest a change to this service"
    if(category === "new") title = "Suggest a new service"

    let messageLabel = "How can we improve this website"
    if((category === "amend") && serviceId) messageLabel = "Describe what should be changed about this service"
    if(category === "new") messageLabel = "Describe the service you would like us to add"

    let breadcrumbs = [
        {
            title: "Care for adults",
            href: "/"
        },
        {
            title: "Feedback"
        },
    ]

    if(serviceId) breadcrumbs = [
        {
            title: "Care for adults",
            href: "/"
        },
        {
            title: "Service detail",
            href: `/service/${serviceId}`
        },
        {
            title: "Feedback"
        },
    ]

    return(
        <Layout withHeader withFooter>
            <Head>
                <title>Feedback | Care and support for adults | Buckinghamshire County Council</title>
                <meta property="og:title" content="Give feedback" />
                <meta property="og:description" content="This is a new website, feedback helps us to improve it." />
            </Head>
            <PageHeader 
                breadcrumbs={breadcrumbs}
                title={title}
            />
            <div className="container">
                <form action="/api/feedback" method="post" className="feedback-form" onSubmit={handleSubmit}>
                    <fieldset className="radio-button-group">
                        <legend className="radio-button-group__legend">Were you able to do what you needed today?</legend>
                        <RadioItem name="satisfied" value="yes" label="Yes" currentState={satisfied} setCurrentState={setSatisfied}/>
                        <RadioItem name="satisfied" value="somewhat" label="Somewhat" currentState={satisfied} setCurrentState={setSatisfied}/>
                        <RadioItem name="satisfied" value="no" label="No" currentState={satisfied} setCurrentState={setSatisfied}/>
                    </fieldset>
                    <div className="form-field">
                        <label className="form-field__label" htmlFor="message">{messageLabel}</label>
                        <textarea className="form-field__textarea" maxLength="500" id="message" type="text" required name="message" rows="5" onChange={e=>setMessage(e.target.value)} value={message}></textarea>
                    </div>
                    <section className="feedback-form__optional">
                        <p>You don't have to give us any contact details, but if you choose to, it'll be easier for us to get in touch to find out more.</p>
                        <div className="form-field">
                            <label className="form-field__label" htmlFor="email">Your email address</label>
                            <p className="form-field__hint">Optional</p>
                            <input className="form-field__text-input" id="email" type="email" name="email" maxLength="500" value={email} onChange={e=>setEmail(e.target.value)}/>
                        </div>
                        <div className="form-field">
                            <label className="form-field__label" htmlFor="phone">Your phone number</label>
                            <p className="form-field__hint">Optional</p>
                            <input className="form-field__text-input" id="phone" type="text" name="phone" maxLength="500" value={phone} onChange={e=>setPhone(e.target.value)}/>
                        </div>
                    </section>
                    <Button>Send feedback</Button>
                </form>
            </div>
        </Layout>
    )
}

export default FeedbackPage