import React from "react"
import Link from "next/link"
import styled from "styled-components"
import logo from "./logo.svg"

const Header = styled.header`
    background: black;
    width: 100%;
`

const HeaderInner = styled.div`
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
`

const Logo = styled.img`
    max-width: 100px;
`

const ServiceName = styled.h1``

const Nav = styled.nav``

const SiteHeader = () =>
    <Header>
        <HeaderInner>

            <Logo src={logo} alt="Buckinghamshire County Council"/>
            <ServiceName>Care for adults</ServiceName>

            <Link href="/"><a>Home</a></Link>
            <Link href="/recommendations"><a>all services</a></Link>
            <Link href="/feedback"><a>Feedback</a></Link>

        </HeaderInner>
    </Header>

export default SiteHeader