import React, { FC, ChangeEvent } from 'react';
import { Input as AntdInput } from 'antd';

interface DefaultPropsInput {
  isNumber?: boolean;
  maxWidth?: number;
  placeholder?: string;
  bordered?: boolean;
}

export interface InputProps {
  onChange: (value: string) => void;
  value: string;
  defaultProps?: object;
}

export const Input: FC<InputProps> = ({ onChange, value, defaultProps }) => {
  const { isNumber, maxWidth, ...others } =
    (defaultProps as DefaultPropsInput) || {};

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (isNumber) {
      if (Number(target.value) || !target.value) onChange(target.value);
    } else {
      onChange(target.value);
    }
  };

  return (
    <AntdInput
      {...others}
      value={value}
      onChange={handleOnChange}
      style={{ maxWidth }}
    />
  );
};
