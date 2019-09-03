import React from "react"
import { storiesOf } from "@storybook/react"
import CardGrid from "./index"

storiesOf("Grid of cards", module)
    .add("with title, six cards, without images", () => (
        <CardGrid
            title="Information and advice"
            cards={[
                {
                    title: "Getting equipment",
                    description: "You may be able to adapt your home or get special equipment to make life easier.",
                    href: "#"
                },
                {
                    title: "Keeping yourself safe",
                    description: "Get help with concerns around abuse or neglect, and how to identify and report it.",
                    href: "#"
                },
                {
                    title: "Getting help at home",
                    description: "You could be able to get help with everyday tasks like washing, dressing or making dinner.",
                    href: "#"
                },            {
                    title: "Getting equipment",
                    description: "You may be able to adapt your home or get special equipment to make life easier.",
                    href: "#"
                },
                {
                    title: "Keeping yourself safe",
                    description: "Get help with concerns around abuse or neglect, and how to identify and report it.",
                    href: "#"
                },
                {
                    title: "Getting help at home",
                    description: "You could be able to get help with everyday tasks like washing, dressing or making dinner.",
                    href: "#"
                }
            ]}/>
    ))
    .add("without title, three cards, with images", () => (
        <CardGrid
            cards={[
                {
                    title: "Getting equipment",
                    description: "You may be able to adapt your home or get special equipment to make life easier.",
                    image: "https://picsum.photos/300/200?random=1",
                    href: "#"
                },
                {
                    title: "Keeping yourself safe",
                    description: "Get help with concerns around abuse or neglect, and how to identify and report it.",
                    image: "https://picsum.photos/300/200?random=2",
                    href: "#"
                },
                {
                    title: "Getting help at home",
                    description: "You could be able to get help with everyday tasks like washing, dressing or making dinner.",
                    image: "https://picsum.photos/300/200?random=3",
                    href: "#"
                }
            ]}/>
    ))