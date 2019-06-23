import React from "react"
import { storiesOf } from "@storybook/react"
import ServiceCard from "./index"

storiesOf("Service card", module)
    .add("default", () => (
        <ServiceCard
            title="Aylesbury library"
            description="Borrow books, use the wifi and more."
            assetId="1"
            category="social"
            distance="5000"
        />
    ))
    .add("alternate category", () => (
        <ServiceCard
            title="Marlow dementia support group"
            description="Borrow books, use the wifi and more."
            assetId="1"
            category="support"
            distance="1"
        />
    ))