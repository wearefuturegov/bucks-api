import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import tick from "./tick.svg"

const Outer = styled.div`
    margin-bottom: 15px;
    &:focus-within{
        label{
            outline: none;
            box-shadow: 0 0 0 3px ${theme.focus};
        }
    }
`

const Input = styled.input`
    position: absolute;
    opacity: 0;
    // &:focus{
    //     outline: none;
    //     box-shadow: none;
    //     border: none;
    // }
    &:checked+label{
        &:before{
            right: 3px;
            background-color: ${theme.darkText};
        }
    }
`

const Label = styled.label`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    cursor: pointer;
    color: ${theme.darkText};
    &:after{
        content: "";
        margin-left: 10px;
        display: inline-block;
        background: ${theme.shadow};
        border-radius: 100px;
        height: 25px;
        width: 50px;
    }
    &:before{
        content: "";
        position: absolute;
        right: 27px;
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        transition: 0.2s ease-in;
        background-image: url(${tick});
        background-size: 10px;
        background-position: center;
        background-repeat: no-repeat;
        background-color: ${theme.background};
    }
    &:focus{
        border: 1px solid red;
    }
`

const Switch = ({ 
    onChange, 
    name, 
    checked,
    label
}) =>
    <Outer>
        <Input 
            type="checkbox"
            id={name}
            name={name}
            checked={checked}
            onChange={onChange}
            value={true}
        />
        <Label htmlFor={name}>
            {label}
        </Label>
    </Outer>

export default Switch