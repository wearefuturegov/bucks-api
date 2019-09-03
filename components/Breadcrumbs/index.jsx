import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Link from "next/link"

const BreadcrumbList = styled.ul`
    list-style: none;
    font-size: 0.9em;
    margin-bottom: 15px;
    color: ${theme.lightText};
`

const BreadcrumbItem = styled.li`
    display: inline-block;
    margin-right: 10px;
    &:after{
        margin-left: 10px;
        content: "›";
    }
    &:last-of-type{
        margin-right: 0px;
        &:after{
            display: none;
        }
    }
`

const BreadcrumbLink = styled.a`
    color: ${theme.darkText};
    &:hover{
        text-decoration: none;
    }
    &:focus{
        outline: 3px solid ${theme.focus};
        background: ${theme.focus};               
    }
`

const Breadcrumbs = ({breadcrumbs}) =>
    <BreadcrumbList>
        {breadcrumbs.map(breadcrumb => 
            <BreadcrumbItem>
                {breadcrumb.href ? <Link href={breadcrumb.href}><BreadcrumbLink href={breadcrumb.href}>{breadcrumb.label}</BreadcrumbLink></Link> : breadcrumb.label}
            </BreadcrumbItem>
        )}
    </BreadcrumbList>
    
export default Breadcrumbs