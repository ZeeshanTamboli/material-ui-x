import * as React from 'react';
import clsx from 'clsx';
import { useGridSelector } from '../../hooks/features/core/useGridSelector';
import {
  gridDataContainerSizesSelector,
  gridScrollBarSizeSelector,
} from '../../hooks/root/gridContainerSizesSelector';
import { useGridApiContext } from '../../hooks/root/useGridApiContext';

type GridDataContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function GridDataContainer(props: GridDataContainerProps) {
  const { className, ...other } = props;
  const apiRef = useGridApiContext();
  const dataContainerSizes = useGridSelector(apiRef!, gridDataContainerSizesSelector);
  const scrollBar = useGridSelector(apiRef!, gridScrollBarSizeSelector);

  const style: any = {
    minWidth: dataContainerSizes?.width,
  };

  if (scrollBar.hasScrollY) {
    style.minHeight = dataContainerSizes?.height!;
  }

  return <div className={clsx('MuiDataGrid-dataContainer', className)} style={style} {...other} />;
}
