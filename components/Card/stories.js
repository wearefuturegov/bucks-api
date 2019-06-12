import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './index'

storiesOf('Card', module)
  .add('default', () => (
    <Card
      title="Getting equipment"
      description="You may be able to adapt your home or get special equipment to make life easier."
      image="https://picsum.photos/300/200?random=10"
      imageAlt=""
      href="#"
      />
  ),{
    notes: "A flexible, clickable card component intended to send a user onto sub-pages",
  })
  .add('without image', () => (
    <Card
      title="Give feedback"
      description="You can give feedback by completing this form."
      href="#"
      />
  ),{
    notes: "In some situations, it may make sense to use text-only cards",
  })