import React, { useState } from "react"
import Link from "next/link"
import { cookieWarningSeen, setSeenCookie } from "../../lib/cookies"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    background: ${theme.white};
    z-index: 999;
    padding: 20px 0px;
    color: ${theme.lightText};
    border-top: 1px solid ${theme.shadow};
    font-size: 1em;
    @media screen and (min-width: ${theme.largeDesktop}){
        padding: 30px 0px;
    }
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    p{
        margin-bottom: 10px;
    }
    @media screen and (min-width: ${theme.desktop}){
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        p{
            margin-right: 15px;
            margin-bottom: 0px;
        }
    }
`

const actionStyles = `
    background: none;
    font-size: 1em;
    color: ${theme.link};
    text-decoration: none;
    margin-right: 10px;
    display: inline-block;
    cursor: pointer;
    padding: 7px 15px;
    border: 2px solid ${theme.link};
    border-radius: 5px;
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus};
    }
`

const Button = styled.button`
    ${actionStyles}
`

const StyledA = styled.a`
    ${actionStyles}
`

const Cookies = () => {
    // Only render on client-side
    if(process.browser){

        const [invisible, setInvisiblity] = useState(cookieWarningSeen)
        if(invisible) return false

        return (
            <Outer>
                <Inner>
                    <p>We use small files called cookies to make the website easier to use.</p>
                    <Button onClick={()=>{
                        setInvisiblity(true)
                        setSeenCookie()
                    }}>Accept</Button>
                    <Link href="/cookies">
                        <StyledA href="/cookies">Find out more</StyledA>
                    </Link>
                </Inner>
            </Outer>
        )
    }

    return false
}

export default Cookies