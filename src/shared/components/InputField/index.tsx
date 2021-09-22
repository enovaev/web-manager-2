import React, { FC } from 'react';
import cx from 'classnames';
import { Input, Typography, Row, InputProps } from 'antd';

import styles from './styles.module.less';

interface InputFieldProps extends InputProps {
  errorMessage?: string | undefined;
  password?: boolean;
}

export const InputField: FC<InputFieldProps> = ({
  errorMessage,
  password,
  ...props
}) => {
  const InputComponent = password ? Input.Password : Input;

  return (
    <div className={styles.inputFieldContainer}>
      <InputComponent
        className={cx({ [styles.isErrorInput]: errorMessage })}
        {...props}
      />
      <Row
        className={cx(styles.errorMessage, { [styles.isShow]: errorMessage })}
      >
        <Typography.Text className={cx(styles.textError)} type="danger">
          {errorMessage}
        </Typography.Text>
      </Row>
    </div>
  );
};
