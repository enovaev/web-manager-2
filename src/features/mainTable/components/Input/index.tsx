import React, { FC } from 'react';
import { Input as AntdInput } from 'antd';

type InputTypes = 'number' | 'string';

interface PropsInput {
  type?: InputTypes;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Input: FC<PropsInput> = ({ type = 'string' }) => <AntdInput />;
