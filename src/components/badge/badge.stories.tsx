/* eslint-disable @typescript-eslint/no-explicit-any */
// story for the badge
import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./badge";

const meta = {
    title: 'Badge',
    component: Badge,
    argTypes: {
        color: { control: 'color' }
    }
} satisfies Meta<typeof Badge>

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        color: "red",
        children: <p>Red Badge</p>
    },
};