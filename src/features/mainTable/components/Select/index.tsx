import React, { FC } from 'react';
import { useSelector } from 'shared/hooks/customReduxHooks';
import { Select as AntdSelect } from 'antd';
import { CurrencyItemType } from 'features/currencyForm/config/currencyList';
import { getCurrencySelector } from 'features/currencyForm';

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
  const { list } = useSelector(getCurrencySelector);

  return (
    <AntdSelect onChange={onChange} value={value}>
      {(defaultProps as DefaultPropsSelect).items.map(item => (
        <Option
          key={item.value}
          value={item.value}
          disabled={!list[item.value]}
        >
          {item.name}
        </Option>
      ))}
    </AntdSelect>
  );
};
