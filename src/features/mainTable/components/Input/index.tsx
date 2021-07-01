import React, { FC } from 'react';
import { Input as AntdInput } from 'antd';

type InputTypes = 'number' | 'string';

interface PropsInput {
  type?: InputTypes;
}

export const Input: FC<PropsInput> = ({ type = 'string' }) => <AntdInput />;
