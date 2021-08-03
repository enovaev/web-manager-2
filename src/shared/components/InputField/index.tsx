import React, { FC } from 'react';
import { Input, Typography, InputProps } from 'antd';

import styles from './styles.module.less';

interface InputFieldProps extends InputProps {
  errorMessage?: string | undefined;
  classes?: string;
  password?: boolean;
}

export const InputField: FC<InputFieldProps> = ({
  errorMessage,
  classes,
  password,
  ...props
}) => {
  const InputComponent = password ? Input.Password : Input;

  return (
    <div className={styles.inputFieldContainer}>
      <InputComponent className={classes} {...props} />
      <Typography.Text className={styles.errorMessage} type="danger">
        {errorMessage}
      </Typography.Text>
    </div>
  );
};
