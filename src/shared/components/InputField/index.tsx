import React, { ChangeEvent, FC } from 'react';
import cx from 'classnames';
import { Input, Typography, Row, InputProps } from 'antd';

import styles from './styles.module.less';

interface InputFieldProps extends InputProps {
  errorMessage?: string | undefined;
  password?: boolean;
  isNumber?: boolean;
}

export const InputField: FC<InputFieldProps> = ({
  errorMessage,
  password,
  onChange,
  isNumber,
  ...props
}) => {
  const InputComponent = password ? Input.Password : Input;

  const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;

    if (isNumber) {
      if (Number(event.target.value) || !event.target.value) onChange(event);
    } else {
      onChange(event);
    }
  };

  return (
    <>
      <InputComponent
        className={cx({ [styles.isErrorInput]: errorMessage })}
        onChange={onChangeHandle}
        {...props}
      />
      <Row
        className={cx(styles.errorMessage, { [styles.isShow]: errorMessage })}
      >
        <Typography.Text className={cx(styles.textError)} type="danger">
          {errorMessage}
        </Typography.Text>
      </Row>
    </>
  );
};
