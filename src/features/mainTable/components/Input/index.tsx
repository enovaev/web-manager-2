import React, { FC } from 'react';
import { Input as AntdInput } from 'antd';

type InputTypes = 'number' | 'string';

export interface InputProps {
  type?: InputTypes;
  onChange: (value: string) => void;
  value: string;
  defaultProps?: object;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Input: FC<InputProps> = ({ type = 'string', onChange, value }) => (
  <AntdInput value={value} onChange={({ target }) => onChange(target.value)} />
);
