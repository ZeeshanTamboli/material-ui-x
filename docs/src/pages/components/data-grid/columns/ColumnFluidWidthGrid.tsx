import * as React from 'react';
import { DataGrid, GridRowData } from '@mui/x-data-grid';

interface ColumnFluidWidthGridRow {
  id: number;
  username: string;
  age: number;
}

const rows: GridRowData<ColumnFluidWidthGridRow>[] = [
  {
    id: 1,
    username: '@MaterialUI',
    age: 20,
  },
];

export default function ColumnFluidWidthGrid() {
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[
          {
            field: 'id',
            flex: 1,
            minWidth: 150,
          },
          {
            field: 'username',
            width: 200,
          },
          {
            field: 'age',
            flex: 0.3,
            minWidth: 50,
          },
        ]}
        rows={rows}
      />
    </div>
  );
}
