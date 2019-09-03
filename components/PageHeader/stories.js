import React from "react"
import { storiesOf } from "@storybook/react"
import PageHeader from "./index"

storiesOf("Page header", module)
    .add("default", () => (
        <PageHeader 
            breadcrumbs={[
                {
                    title: "Care for adults",
                    href: "/"
                },
                {
                    title: "Services in your area"
                },
            ]}
            title="Your recommendations"
            lede="If you, or someone you know, struggles with everyday tasks, there might be gadgets or equipment to help make life easier: pendant alarms, railings, wheelchairs..."
        />
    ))
    .add("without lede", () => (
        <PageHeader 
            breadcrumbs={[
                {
                    title: "Care for adults",
                    href: "/"
                },
                {
                    title: "Services in your area"
                },
            ]}
            title="Your recommendations"
        />
    ))
    .add("without breadcrumbs", () => (
        <PageHeader 
            title="Your recommendations"
            lede="If you, or someone you know, struggles with everyday tasks, there might be gadgets or equipment to help make life easier: pendant alarms, railings, wheelchairs..."
        />
    ))