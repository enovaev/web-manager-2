import React, { FC } from 'react';
import { useDispatch } from 'shared/hooks/customReduxHooks';
import { MenuOutlined } from '@ant-design/icons';
import { Checkbox } from 'features/mainTable/components/Checkbox';
import { MergedEntityType } from '../../reducer/specificationTable/selectors';
import { changeSpecEntity } from '../../actions';
import { mainSpecTableConfig } from '../../config/mainSpecTableConfig';
import { Input } from '../../../mainTable';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import styles from './styles.module.less';

interface SpecRowEntityProps {
  entityProps: MergedEntityType;
  index: number;
  indexGroup?: number;
}

const propNameMap = {
  check: 'check',
  specNameFirst: 'spec_name_first',
  specNameSecond: 'spec_name_second'
};

const getNumberPosition = (
  index: number,
  groupIndex: number | undefined
): string =>
  typeof groupIndex === 'number'
    ? `${index + 1}.${groupIndex + 1}`
    : (index + 1).toString();

export const SpecRowEntity: FC<SpecRowEntityProps> = ({
  entityProps,
  index,
  indexGroup
}) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id, name, spec_name_first, spec_name_second, check, dragged } =
    entityProps;

  const changeEntity = (propName: string) => (value: string | boolean) => {
    dispatch(changeSpecEntity(id, propName, value));
  };

  const { onDraggableHandler, ...rest } = useDragAndDrop(id, dragged);

  return (
    <tr className={styles.tableRow} {...rest}>
      {mainSpecTableConfig.map(({ name: positionName }) => (
        <td>
          {dragged ? (
            <div className={styles.emptyRow} />
          ) : (
            <div className={styles.rowContainer}>
              {positionName === 'number' &&
                getNumberPosition(index, indexGroup)}
              {positionName === 'name' && (
                <div className={styles.nameWrapper}>
                  <Input
                    onChange={changeEntity(propNameMap.specNameFirst)}
                    value={spec_name_first}
                    invalid={false}
                  />
                  <Input
                    onChange={changeEntity(propNameMap.specNameSecond)}
                    value={name || spec_name_second}
                    invalid={false}
                  />
                </div>
              )}
              {positionName === 'drag' && (
                <MenuOutlined onMouseDown={onDraggableHandler} />
              )}
              {positionName === 'check' && (
                <Checkbox
                  onChange={changeEntity(propNameMap.check)}
                  value={check}
                />
              )}
            </div>
          )}
        </td>
      ))}
    </tr>
  );
};
