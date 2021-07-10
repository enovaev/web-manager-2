import React, { FC } from 'react';
import { TableFormation } from 'features/mainTable';
import { TagSortedTabs, TagPopover } from 'features/tagController';

export const LoadedPage: FC<{}> = () => (
  <>
    <TagPopover />
    <TagSortedTabs />
    <TableFormation />
  </>
);
