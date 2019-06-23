import React from "react"
import { storiesOf } from "@storybook/react"
import PromoGrid from "./index"

storiesOf("Promo grid", module)
    .add("default", () => (
        <PromoGrid
            title="Life events"
            promos={[
                {
                    title: "Needing extra care support at home",
                    description: "Get help and support if you need to go into adult social care",
                    href: "#"
                },
                {
                    title: "Looking after someone else",
                    description: "Get help and support if you’re looking after someone",
                    href: "#"
                },
                {
                    title: "Coping with disability",
                    description: "Get help and support if you’ve been diagnosed with a disability",
                    href: "#"
                },
                {
                    title: "After a diagnosis or hospital stay",
                    description: "Plan for your care after a hospital stay and recovery at home",
                    href: "#"
                },
                {
                    title: "Losing a loved one",
                    description: "Get support after you’ve lost a loved one",
                    href: "#"
                },
                {
                    title: "End of life",
                    description: "Plan end of life care for you or a loved one",
                    href: "#"
                },

                {
                    title: "Retiring",
                    description: "Find activities in your area and get support in your retirement ",
                    href: "#"
                },
                {
                    title: "Moving from child to adult social care",
                    description: "Support someone moving from child to adult social care",
                    href: "#"
                },
                {
                    title: "Moving into and out of Buckinghamshire",
                    description: "Find out how to keep getting support if you’re moving to or from another local authority ",
                    href: "#"
                },
            ]}
        />
    ))