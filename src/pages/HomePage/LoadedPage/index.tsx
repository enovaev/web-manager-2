import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { TableFormation } from 'features/mainTable';
import { TagSortedTabs } from 'features/tagController';
import { SettingsSidebar } from 'features/settingsTable';
import { IconSettingsTable } from 'shared/layout/IconSettingsTable';
import { tableTypes } from 'shared/config/tableTypes';

export const LoadedPage: FC<{}> = () => (
  <Row gutter={[0, 10]}>
    <Col span={24}>
      <Row justify="space-between" align="middle">
        <IconSettingsTable type={tableTypes.mainTable} />
        <SettingsSidebar />
      </Row>
    </Col>
    <Col span={24}>
      <TagSortedTabs />
    </Col>
    <Col span={24}>
      <TableFormation />
    </Col>
  </Row>
);
