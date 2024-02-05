import type { Meta, StoryObj } from '@storybook/react';
import BackToTop from '../';

const meta: Meta<typeof BackToTop> = {
  title: 'Components/BackToTop',
  component: BackToTop,
};

export default meta;
type Story = StoryObj<typeof BackToTop>;

export const Default: Story = {};
