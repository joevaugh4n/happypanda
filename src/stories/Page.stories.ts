import type { Meta, StoryObj } from "@storybook/react";

import App from "../App";
import "../index.css";

const meta = {
  title: "Example/Page",
  component: App,
  parameters: {},
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
