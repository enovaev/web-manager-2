import React, { FC } from 'react';
import { Checkbox as AntdCheckbox } from 'antd';

export interface CheckboxProps {
  onChange: (value: boolean) => void;
  value: boolean;
  defaultProps?: object;
}

export const Checkbox: FC<CheckboxProps> = ({ onChange, value }) => {
  return (
    <AntdCheckbox
      checked={value}
      onChange={({ target }) => onChange(target.checked)}
    />
  );
};
