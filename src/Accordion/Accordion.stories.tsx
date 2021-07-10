import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Accordion } from "./Accordion";

export default {
  title: "Example/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion />;

export const Primary = Template.bind({});
