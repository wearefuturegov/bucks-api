import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './index'

storiesOf('Card', module)
  .add('default', () => (
    <Card
      title="Getting equipment"
      description="You may be able to adapt your home or get special equipment to make life easier."
      image="http://placehold.it/300x200"
      imageAlt=""
      href="#"
      />
  ))
  .add('without image', () => (
    <Card
      title="Give feedback"
      description="You can give feedback by completing this form."
      href="#"
      />
  ))