import React, { useState, FC } from 'react';
import { useDispatch } from 'shared/hooks/customReduxHooks';
import { MenuOutlined } from '@ant-design/icons';
import { Checkbox } from 'features/mainTable/components/Checkbox';
import { MergedEntityType } from '../../reducer/specificationTable/selectors';
import { changeSpecEntity, swapElements } from '../../actions';
import { mainSpecTableConfig } from '../../config/mainSpecTableConfig';
import { Input } from '../../../mainTable';
import styles from './styles.module.less';

interface SpecRowEntityProps {
  entityProps: MergedEntityType;
  index: string;
}

const propNameMap = {
  check: 'check',
  specNameFirst: 'spec_name_first',
  specNameSecond: 'spec_name_second',
  dragged: 'dragged'
};

export const SpecRowEntity: FC<SpecRowEntityProps> = ({
  entityProps,
  index
}) => {
  const [draggable, setDraggable] = useState(false);
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id, name, spec_name_first, spec_name_second, check, dragged } =
    entityProps;

  const changeEntity = (propName: string) => (value: string | boolean) => {
    dispatch(changeSpecEntity(id, propName, value));
  };

  const onDragStart = () => {
    setTimeout(() => {
      dispatch(changeSpecEntity(id, propNameMap.dragged, true));
    }, 200);
  };

  const onDragEnd = () => {
    setDraggable(false);
    dispatch(changeSpecEntity(id, propNameMap.dragged, false));
  };

  const onDragOver = () => {
    if (!dragged && !draggable) {
      dispatch(swapElements(id));
    }
  };

  return (
    <div
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      {mainSpecTableConfig.map(({ name: positionName }) => (
        <td>
          {dragged ? (
            <div style={{ height: 52 }} />
          ) : (
            <div className={styles.rowContainer}>
              {positionName === 'number' && index}
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
                <MenuOutlined onMouseDown={() => setDraggable(true)} />
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
    </div>
  );
};
