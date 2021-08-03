import React, { FC } from 'react';
import { AuthMainForm } from 'features/authReg';
import styles from './styles.module.less';

export const AuthRegPage: FC<{}> = () => (
  <div className={styles.authPageContainer}>
    <AuthMainForm />
  </div>
);
