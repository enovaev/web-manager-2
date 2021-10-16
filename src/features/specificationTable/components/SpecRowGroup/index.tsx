import React, { FC } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { GroupSpecType } from '../../types/interfaceState';
import { mainSpecTableConfig } from '../../config/mainSpecTableConfig';
import styles from '../SpecRowEntity/styles.module.less';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

interface SpecRowEntityProps {
  entityProps: GroupSpecType;
  index: string;
}

export const SpecRowGroup: FC<SpecRowEntityProps> = ({
  entityProps,
  index
}) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { group_name, id, dragged } = entityProps;

  const { onDraggableHandler, ...rest } = useDragAndDrop(id, dragged);

  return (
    <tr className={styles.tableRow} {...rest}>
      {mainSpecTableConfig.map(({ name: positionName }) => (
        <td>
          <div className={styles.rowContainer}>
            {positionName === 'name' && group_name}
            {positionName === 'number' && index}
            {positionName === 'drag' && (
              <MenuOutlined onMouseDown={onDraggableHandler} />
            )}
          </div>
        </td>
      ))}
    </tr>
  );
};
