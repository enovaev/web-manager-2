import React, { FC } from 'react';
import { TableHeader } from '../../features/tableHeader';
import { TableBody } from '../../features/tableBody';
import styles from './styles.module.less';

export const TableFormation: FC<{}> = () => {
  return (
    <table className={styles.mainTable}>
      <TableHeader />
      <TableBody />
    </table>
  );
};
