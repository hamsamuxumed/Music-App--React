import React from 'react'
import { Card } from '.'

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        size: {
            control: 'radio',
            options: ['large']
        },
        band: {
            control: 'text'
        },
        information: {
            control: 'text'
        },
        image: {
            control: 'image'
        }

    },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});


export const Large = Template.bind({});
Large.args = {
    size: 'large',
    band: 'Beyonce',
    information: 'Single Ladies',
    image: 'https://media.pitchfork.com/photos/5d0aa73a4b0a62084982689c/2:1/w_2560%2Cc_limit/King-Crimson.jpg'
}



