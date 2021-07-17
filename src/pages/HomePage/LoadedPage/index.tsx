import React, { FC } from 'react';
import { TableFormation } from 'features/mainTable';
import { TagSortedTabs, TagPopover } from 'features/tagController';
import { SettingsSidebar } from 'features/settingsTable';

export const LoadedPage: FC<{}> = () => (
  <>
    <SettingsSidebar />
    <TagPopover />
    <TagSortedTabs />
    <TableFormation />
  </>
);
