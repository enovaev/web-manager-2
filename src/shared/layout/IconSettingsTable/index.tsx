import React, { FC } from 'react';
import { Row, Space } from 'antd';
import { CurrencyPopover } from 'features/currencyForm';
import { TagPopover } from 'features/tagController';

export const IconSettingsTable: FC<{}> = () => (
  <Row>
    <Space>
      <TagPopover />
      <CurrencyPopover />
    </Space>
  </Row>
);
