import React, { FC } from 'react';
import { TableFormation } from 'features/mainTable';
import { TagSortedTabs, TagPopover } from 'features/tagController';
import { SettingsSidebar } from 'features/settingsTable';
import { Row, Col } from 'antd';

export const LoadedPage: FC<{}> = () => (
  <Row gutter={[0, 10]}>
    <Col span={24}>
      <Row justify="space-between" align="middle">
        <TagPopover />
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
