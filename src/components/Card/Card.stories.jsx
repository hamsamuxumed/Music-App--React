import React from 'react';
import { Card } from '.';

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        size: {
            control: 'radio',
            options: [ 'small', 'large' ]
        },
        title: {
            control: 'text'
        },
        author: {
            control: 'text'
        }
    }
}

const Template = args => <Card {...args} />

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    title: 'This thing',
    author: 'The Man'
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    title: 'A post awaits...',
    author: 'Gingertonic'
}