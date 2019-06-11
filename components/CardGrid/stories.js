import React from 'react';
import { storiesOf } from '@storybook/react';
import CardGrid from './index'

storiesOf('Grid of cards', module)
  .add('with title, six cards, without images', () => (
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
  .add('without title, three cards, with images', () => (
    <CardGrid
        cards={[
            {
                title: "Getting equipment",
                description: "You may be able to adapt your home or get special equipment to make life easier.",
                image: "http://placehold.it/300x200",
                href: "#"
            },
            {
                title: "Keeping yourself safe",
                description: "Get help with concerns around abuse or neglect, and how to identify and report it.",
                image: "http://placehold.it/300x200",
                href: "#"
            },
            {
                title: "Getting help at home",
                description: "You could be able to get help with everyday tasks like washing, dressing or making dinner.",
                image: "http://placehold.it/300x200",
                href: "#"
            },
            {
                title: "Who pays?",
                description: "Understand what different kinds of care cost, and the level of financial help available",
                image: "http://placehold.it/300x200",
                href: "#"
            },
            {
                title: "Worried about someone else?",
                description: "Get practical tips to help out a neighbour or loved one, or, if it’s an emergency, tell us about someone in immediate need",
                image: "http://placehold.it/300x200",
                href: "#"
            },
            {
                title: "Coping with loneliness",
                description: "Most people will feel lonely at some point in their lives. It’s a deeply personal experience that - in most cases - will thankfully pass.",
                image: "http://placehold.it/300x200",
                href: "#"
            }
        ]}/>
  ))