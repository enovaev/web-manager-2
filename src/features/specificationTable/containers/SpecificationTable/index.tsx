import React, { FC } from 'react';
import { TableHeader } from 'features/mainTable';
import { mainSpecTableConfig } from '../../config/mainSpecTableConfig';
import { SpecificationTableBody } from '../SpecificationTableBody';
import styles from '../../../mainTable/templates/TableFormation/styles.module.less';

export const SpecificationTable: FC<{}> = () => {
  return (
    <table className={styles.mainTable}>
      <TableHeader tableConfig={mainSpecTableConfig} />
      <SpecificationTableBody />
    </table>
  );
};
