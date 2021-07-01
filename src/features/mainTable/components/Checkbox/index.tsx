import React, { FC } from 'react';
import { Checkbox as AntdCheckbox } from 'antd';

export interface CheckboxProps {
  onChange: (value: boolean) => void;
  value: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({ onChange, value }) => {
  return (
    <AntdCheckbox
      value={value}
      onChange={({ target }) => onChange(target.checked)}
    />
  );
};
