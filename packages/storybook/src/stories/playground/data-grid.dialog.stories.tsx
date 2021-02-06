import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { DataGrid, DataGridProps } from '@material-ui/data-grid';

export default {
  title: 'Data-Grid Demos/In Dialog',
  component: DataGrid,
  parameters: {
    docs: {
      page: null,
    },
    options: { selectedPanel: 'storybook/storysource/panel' },
  },
} as Meta;

const Template: Story<DataGridProps> = (args) => <DataGrid {...args} />;

export const DataGridInDialog = Template.bind({});
