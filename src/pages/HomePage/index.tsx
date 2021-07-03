import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { TableFormation } from 'features/mainTable';
import { TableSettings } from 'features/tableSettings';
import styles from './styles.module.less';

export const HomePage: FC<{}> = () => (
  <div className={styles.homePage}>
    Home page
    <Link to="/auth">click</Link>
    <Button type="primary">Click</Button>
    <TableSettings />
    <TableFormation />
  </div>
);
