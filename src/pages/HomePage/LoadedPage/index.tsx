import React, { FC } from 'react';
import { TableFormation } from 'features/mainTable';
import { TagSortedTabs, TagPopover } from 'features/tagController';
import { SettingsSidebar } from 'features/settingsTable';
import { Row } from 'antd';

export const LoadedPage: FC<{}> = () => (
  <>
    <Row justify="end">
      <SettingsSidebar />
    </Row>
    <Row>
      <TagPopover />
    </Row>
    <Row>
      <TagSortedTabs />
    </Row>
    <Row>
      <TableFormation />
    </Row>
  </>
);
