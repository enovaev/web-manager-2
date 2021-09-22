import React, { FC, useState } from 'react';
import { Popover } from 'antd';
import { DollarOutlined } from '@ant-design/icons';

export const CurrencyPopover: FC<{}> = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleVisible = (value: boolean) => {
    setVisible(value);
  };

  return (
    <Popover
      visible={visible}
      onVisibleChange={handleVisible}
      placement="bottomLeft"
      trigger="click"
      content={<div>поповер</div>}
    >
      <DollarOutlined />
    </Popover>
  );
};
