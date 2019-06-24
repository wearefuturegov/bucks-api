import React from "react"
import Link from "next/link"
import "./style.scss"

const Footer = () =>
    <footer className="site-footer">
        <div className="container">
            <ul className="site-footer__menu">

                <li className="site-footer__menu-item">
                    <Link href="#">
                        <a className="site-footer__menu-link">Privacy statement</a>
                    </Link>
                </li>
                <li className="site-footer__menu-item">
                    <Link href="#">
                        <a className="site-footer__menu-link">Contact us</a>
                    </Link>
                </li>
                <li className="site-footer__menu-item">
                    <Link href="#">
                        <a className="site-footer__menu-link">Cookies</a>
                    </Link>
                </li>

            </ul>
            <p className="site-footer__text">Built and maintained by <a href="http://buckscc.gov.uk">Buckinghamshire County Council</a></p>
        </div>
    </footer>

export default Footer