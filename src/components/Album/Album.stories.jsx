import React from 'react';
import { Album } from '.';

export default {
    title: 'Album',
    component: Album,
    argTypes: {
        title: {
            control: 'text'
        },
        description: {
            control: 'text'
        },
        tracklist: {
            control: 'text'
        }
    }
}

const Template = args => <Album {...args} />

export const Default = Template.bind({});

// export const Full = Template.bind({});
// Small.args = {
//     size: 'small',
//     title: 'This thing',
//     author: 'The Man'
// }

// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     title: 'A post awaits...',
//     author: 'Gingertonic'
// }