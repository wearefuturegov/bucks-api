import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.footer`
    background: ${theme.shadow};
    padding: 40px 20px;
    font-size: 0.9em;
    color: ${theme.lightText};
    @media screen and (min-width: ${theme.tablet}){
        padding: 60px 20px;
        font-size: 0.95em;
    }
    a{
        color: ${theme.lightText};
        &:hover{
            text-decoration: none;
        }
        &:focus{
            outline: 3px solid ${theme.focus};
            background: ${theme.focus};               
        }
    }
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`

const Menu = styled.ul`
    list-style: none;
    margin-bottom: 15px;
`

const MenuItem = styled.li`
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 10px;
`

const Footer = () =>
    <Outer>
        <Inner>
            <Menu>
                <MenuItem><a href="https://www.buckscc.gov.uk/services/contact-and-complaints/contact-us/">Contact us</a></MenuItem>
                <MenuItem><a href="/cookies">Cookies</a></MenuItem>
                <MenuItem><a href="https://www.buckscc.gov.uk/services/council-and-democracy/privacy-policy/">Privacy statement</a></MenuItem>
                <MenuItem><a href="/">Accessibility statement</a></MenuItem>
                <MenuItem><a href="https://www.buckscc.gov.uk/services/community/community-safety/modern-slavery/bcc-modern-slavery-statement/">Modern slavery statement</a></MenuItem>
            </Menu>
            <p>Built and maintained by <a href="http://buckscc.gov.uk">Buckinghamshire County Council</a></p>
        </Inner>

    </Outer>

export default Footer