import React from "react"
import "./style.scss"
import Link from "next/link"

const Cookies = () =>
    <footer className="cookies">
        <p>We use small files called cookies tomake the website easier to use.</p>
        <button>Accept</button>
        <Link href="/cookies">
            <a>Find out more</a>
        </Link>
    </footer>

export default Cookies