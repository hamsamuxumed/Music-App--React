import React from 'react'
import { Card } from '.'

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        size: {
            control: 'radio',
            options: ['small', 'large']
        },
        artist: {
            control: 'text'
        },
        song: {
            control: 'text'
        }
    },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});


export const Small = Template.bind({});
Small.args = {
    size: 'small',
    artist: 'Jay Z',
    song: 'Hov'
}


export const Large = Template.bind({});
Large.args = {
    size: 'large',
    artist: 'Beyonce',
    song: 'Single Ladies'
}



