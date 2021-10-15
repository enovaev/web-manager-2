import React, { FC, FunctionComponent } from 'react';
import { Row, Space } from 'antd';
import { CurrencyPopover } from 'features/currencyForm';
import { GroupCreatorPopover } from 'features/specificationTable/features/groupCreator';
import { TagPopover } from 'features/tagController';
import { tableTypes, TableTypes } from 'shared/config/tableTypes';

const mapComponents: Record<TableTypes, FunctionComponent[]> = {
  [tableTypes.mainTable]: [TagPopover, CurrencyPopover],
  [tableTypes.specTable]: [GroupCreatorPopover]
};

interface IconSettingsTableProps {
  type: TableTypes;
}

export const IconSettingsTable: FC<IconSettingsTableProps> = ({ type }) => (
  <Row>
    <Space>
      {mapComponents[type].map(Component => (
        <Component />
      ))}
    </Space>
  </Row>
);
