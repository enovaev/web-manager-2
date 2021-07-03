import React, { FC } from 'react';
import { Select as AntdSelect } from 'antd';
import { CurrencyItemType } from '../../config/SelectConfig';

const { Option } = AntdSelect;

interface DefaultPropsSelect {
  items: CurrencyItemType[];
}

export interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  defaultProps: object;
}

export const Select: FC<SelectProps> = ({ defaultProps, onChange, value }) => {
  return (
    <AntdSelect onChange={onChange} value={value}>
      {(defaultProps as DefaultPropsSelect).items.map(item => (
        <Option key={item.value} value={item.value}>
          {item.name}
        </Option>
      ))}
    </AntdSelect>
  );
};
