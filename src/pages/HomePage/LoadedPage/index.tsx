import React, { FC } from 'react';
import { TableFormation } from 'features/mainTable';
import { TableSettings } from 'features/tableSettings';

export const LoadedPage: FC<{}> = () => (
  <>
    <TableSettings />
    <TableFormation />
  </>
)
