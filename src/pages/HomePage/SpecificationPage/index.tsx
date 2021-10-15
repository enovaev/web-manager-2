import React from 'react';
import { SpecificationTable } from 'features/specificationTable';
import { Col, Row } from 'antd';
import { IconSettingsTable } from '../../../shared/layout/IconSettingsTable';
import { tableTypes } from '../../../shared/config/tableTypes';

export const SpecificationPage = () => {
  return (
    <Row gutter={[0, 10]}>
      <Col span={24}>
        <IconSettingsTable type={tableTypes.specTable} />
      </Col>
      <Col span={24}>
        <SpecificationTable />
      </Col>
    </Row>
  );
};
