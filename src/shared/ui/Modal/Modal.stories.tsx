import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aspernatur atque consectetur doloribus ea eius eligendi error eveniet iusto laudantium maiores nulla perspiciatis provident reiciendis rem rerum sapiente, ut?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aspernatur atque consectetur doloribus ea eius eligendi error eveniet iusto laudantium maiores nulla perspiciatis provident reiciendis rem rerum sapiente, ut?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
