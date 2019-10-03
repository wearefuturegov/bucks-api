import React, { useState } from "react"
import Link from "next/link"
import styled from "styled-components"
import logo from "./logo.svg"
import eyeglass from "./eyeglass.svg"
import theme from "../_theme"
import { Container, Button } from "./MobileMenu"

const Outer = styled.header`
    background: ${theme.darkText};
    color: white;
    width: 100%;
    padding: 20px;
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

`

const MastheadLink = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    text-decoration: none;
    &:focus{
        outline: 3px solid ${theme.focus};
    }
    @media screen and (min-width: ${theme.tablet}){
        min-width: 275px;
    }
`

const Logo = styled.img`
    max-width: 80px;
    margin-right: 15px;

`

const ServiceName = styled.h1`
    font-size: 1.5em;

`

const Nav = styled.nav`
    display: none;
    @media screen and (min-width: ${theme.tablet}){
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
    }
`

const Menu = styled.ul`
    list-style: none;
`

const MenuListItem = styled.li`
    display: inline-block;
    margin-right: 15px;
    &:last-of-type{
        margin-right: 0px;
    }
`

const MenuLink = styled.a`
    color: white;
    text-decoration: none;
    transition: border-bottom 0.1s ease-out;
    &:hover{
        border-bottom: 1px solid white;
    }
    &:focus{
        outline: 3px solid ${theme.focus};
        background: ${theme.focus};
        color: ${theme.darkText};
        border-bottom-color: ${theme.darkText};
    }
`

const SearchInput = styled.input`
    padding: 10px 15px;
    color: ${theme.darkText};
    border-radius: 100px;
    border: none;
    font-size: 0.9em;
    margin-bottom: 15px;
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus};
    }
`

const SearchForm = styled.form`
    position: relative;
`

const SearchButton = styled.button`
    position: absolute;
    right: 0px;
    height: 39px;                   
    padding: 8px 12px;
    background: none;
    border: none;
    border-radius: 0px 100px 100px 0px;
    cursor: pointer;
    &:focus{
        outline: none !important;
        box-shadow: 0px 0px 0px 3px ${theme.focus};
    }
`

const SearchIcon = styled.img`
    width: 20px;
    height: 20px;
    transform: translateY(2px);
`

const MenuItem = ({href, children}) =>
    <MenuListItem><Link href={href}><MenuLink href={href}>{children}</MenuLink></Link></MenuListItem>

const MenuItems = () =>
    <>
        <MenuItem href="/">Find support</MenuItem>
        <MenuItem href="https://www.careadvicebuckinghamshire.org/s4s/WhereILive/Council?pageId=2239">Information and advice</MenuItem>     
        <MenuItem href="https://www.careadvicebuckinghamshire.org/s4s/Auth">Log in</MenuItem>
        <MenuItem href="https://www.careadvicebuckinghamshire.org/s4s/SignUp/PersonalDetails">Sign up</MenuItem>
    </>

const SiteHeader = () => {
    const [menuOpen, toggleMenu] = useState(false)

    return(
        <Outer>
            <Inner>
                <Link href="https://www.careadvicebuckinghamshire.org/">
                    <MastheadLink href="https://www.careadvicebuckinghamshire.org/">
                        <Logo src={logo} alt="Buckinghamshire County Council"/>
                        <ServiceName>Activities and support</ServiceName>
                    </MastheadLink>
                </Link>
                <Nav>
                    <SearchForm method="get" action="https://www.careadvicebuckinghamshire.org/s4s/WhereILive/Council">
                        <input type="hidden" name="pageId" value="2239"/>
                        <SearchInput type="text" name="Search" placeholder="Search"></SearchInput>
                        <SearchButton><SearchIcon src={eyeglass} alt="search"/></SearchButton>
                    </SearchForm>
                    <Menu>
                        <MenuItems/>
                    </Menu>
                </Nav>
                <Button onClick={()=> toggleMenu(!menuOpen)}>{menuOpen ? "Close" : "Menu"}</Button>
            </Inner>
            <div aria-live="polite">
                {menuOpen && <Container><MenuItems/></Container>}
            </div>
        </Outer>
    )
}
 
export default SiteHeader
