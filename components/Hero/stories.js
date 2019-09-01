import React from "react"
import { storiesOf } from "@storybook/react"
import Hero from "./index"

storiesOf("Hero", module)
    .add("default", () => (
        <Hero
            title="Support and care for adults, their families and carers"
            description="Helping you find the right information and support in Buckinghamshire."
            menuItems={[
                {
                    href: "#",
                    text: "Information and advice"
                },
                {
                    href: "#",
                    text: "Find support near me"
                },
                {
                    href: "#",
                    text: "Log in"
                },
                {
                    href: "#",
                    text: "Sign up"
                },
            ]}
            ctaTitle="Find services in your area"
            ctaDescription="Get an idea of what help is available by answering these questions."
            ctaHref="/"
            ctaLinkText="Find support near me"
        />
    ))