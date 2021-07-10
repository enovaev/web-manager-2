import React, { FC, ChangeEvent } from 'react';
import { Input as AntdInput, Typography } from 'antd';
import styles from './style.module.less';

interface DefaultPropsInput {
  isNumber: boolean;
  maxWidth: number;
  placeholder: string;
  bordered: boolean;
}

export interface InputProps {
  onChange: (value: string) => void;
  value: string;
  defaultProps?: object;
  invalid: boolean;
}

export const Input: FC<InputProps> = ({
  onChange,
  value,
  defaultProps,
  invalid
}) => {
  const { isNumber, maxWidth, ...others } =
    (defaultProps as Partial<DefaultPropsInput>) || {};

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (isNumber) {
      if (Number(target.value) || !target.value) onChange(target.value);
    } else {
      onChange(target.value);
    }
  };

  const notValid = invalid && !value;
  const inputStyle = notValid ? styles.inputError : '';

  return (
    <div className={styles.inputContainer}>
      <AntdInput
        {...others}
        value={value}
        onChange={handleOnChange}
        style={{ maxWidth }}
        className={inputStyle}
      />
      {notValid && (
        <Typography.Text type="danger" className={styles.errorMessage}>
          обязательное поле
        </Typography.Text>
      )}
    </div>
  );
};
