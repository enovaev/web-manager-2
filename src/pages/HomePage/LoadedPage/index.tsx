import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { TableFormation } from 'features/mainTable';
import { TagSortedTabs, TagPopover } from 'features/tagController';
import { CurrencyPopover } from 'features/currencyForm';
import { SettingsSidebar } from 'features/settingsTable';

export const LoadedPage: FC<{}> = () => (
  <Row gutter={[0, 10]}>
    <Col span={24}>
      <Row justify="space-between" align="middle">
        <TagPopover />
        <CurrencyPopover />
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
