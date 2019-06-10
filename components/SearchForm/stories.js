import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchForm from './index'

storiesOf('SearchForm', module)
    .add('default', () => (
        <SearchForm/>
    ))