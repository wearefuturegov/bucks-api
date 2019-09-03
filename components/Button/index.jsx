// import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import arrow from "./arrow-right.svg"

const Button = styled.button`
    display: block;
    border-radius: 100px;
    padding: 12px 30px;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    background: ${theme.link};
    color: ${theme.white};
    text-decoration: none;
    position: relative;
    cursor: pointer;
    transition: filter 0.1s ease-out;
    border: none;
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

export default Button