import React, { FC } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { GroupSpecType } from '../../types/interfaceState';
import styles from '../SpecRowEntity/styles.module.less';

interface SpecRowEntityProps {
  entityProps: GroupSpecType;
  positionName: string;
  index: string;
}

export const SpecRowGroup: FC<SpecRowEntityProps> = ({
  positionName,
  entityProps,
  index
}) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { group_name } = entityProps;

  return (
    <td>
      <div className={styles.rowContainer}>
        {positionName === 'name' && group_name}
        {positionName === 'number' && index}
        {positionName === 'drag' && <MenuOutlined />}
      </div>
    </td>
  );
};
