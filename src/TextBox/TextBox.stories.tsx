import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextBox } from "./TextBox";

export default {
  title: "Example/Text",
  component: TextBox,
} as ComponentMeta<typeof TextBox>;

const Template: ComponentStory<typeof TextBox> = (args) => (
  <TextBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  type: "Text",
  placeholder: "Email Address",
};

export const Password = Template.bind({});
Password.args = {
  type: "Password",
  placeholder: "Password",
};
