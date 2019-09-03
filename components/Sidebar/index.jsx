import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Link from "next/link"

const SidebarHeadline = styled.h2`
    color: ${theme.darkText};
    margin-bottom: 15px;
    font-size: 1.2em;
    border-top: 2px solid ${theme.shadow};
    padding-top: 5px;
`

const SidebarList = styled.ul`
    list-style: none;
    font-size: 1em;
    color: ${theme.darkText};
`

const SidebarItem = styled.li`
    margin-bottom: 10px;
`

const SidebarLink = styled.a`
    color: ${theme.link};
    &:hover{
        text-decoration: none;
    }
    &:focus{
        outline: 3px solid ${theme.focus};
        background: ${theme.focus};               
    }
`

const Sidebar = ({
    items,
}) =>
    <aside>
        <SidebarHeadline>Related content</SidebarHeadline>
        <SidebarList>
            {items.map(item => 
                <SidebarItem key={item.label}>
                    {item.href ? <Link href={item.href}><SidebarLink href={item.href}>{item.label}</SidebarLink></Link> : item.label}
                </SidebarItem>
            )}
        </SidebarList>
    </aside>

export default Sidebar