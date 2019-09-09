import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Link from "next/link"
import arrow from "./arrow-right.svg"

const Bar = styled.section`
    background-color: ${theme.link};
    color: white;
    padding: 20px 20px;
    @media screen and (min-width: ${theme.tablet}){
        padding: 25px 20px;
    }
`

const Inner = styled.section`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    @media screen and (min-width: ${theme.tablet}){
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
        grid-template-columns: 1fr 1fr;
    }
`

const Headline = styled.h1`
    margin-bottom: 10px;
    font-size: 1.5em;
    @media screen and (min-width: ${theme.tablet}){
        font-size: 1.9em;
    }
`

const Message = styled.p`
    margin-bottom: 15px;
    @media screen and (min-width: ${theme.tablet}){
        font-size: 1.1em;
        max-width: 500px;
        margin-right: 50px;
    }
`

const Button = styled.a`
    display: block;
    border-radius: 100px;
    padding: 12px 30px;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    background: white;
    color: ${theme.link};
    text-decoration: none;
    position: relative;
    transition: filter 0.1s ease-out;
    &:after{
        background-image: url(${arrow});
        display: block;
        width: 13px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        top: 0px;
        bottom: 0px;
        right: 16px;
        opacity: 0.5;
        font-size: 10px;
        content: "";
        transition: transform 0.1s ease-out;
    }
    &:hover{
        filter: brightness(1.1);
        &:after{
            transform: translateX(5px)
        }
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus};
    }
    @media screen and (min-width: ${theme.tablet}){
        min-width: 300px;
        padding: 14px 40px;
        font-size: 1.1em;
    }
`


const NarrowCallToAction = ({
    headline,
    message,
    label,
    href
}) =>
    <Bar>
        <Inner>
            <div>
                <Headline>{headline}</Headline>
                <Message>{message}</Message>
            </div>
            <Link href={href}>
                <Button href={href}>{label}</Button>
            </Link>
        </Inner>
    </Bar>

export default NarrowCallToAction