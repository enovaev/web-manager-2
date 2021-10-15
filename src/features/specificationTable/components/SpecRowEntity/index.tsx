import React, { FC } from 'react';
import { useDispatch } from 'shared/hooks/customReduxHooks';
import { MenuOutlined } from '@ant-design/icons';
import { Checkbox } from 'features/mainTable/components/Checkbox';
import { MergedEntityType } from '../../reducer/specificationTable/selectors';
import { changeSpecEntity } from '../../actions';
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
  specNameSecond: 'spec_name_second'
};

export const SpecRowEntity: FC<SpecRowEntityProps> = ({
  entityProps,
  index
}) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id, name, spec_name_first, spec_name_second, check } = entityProps;

  const changeEntity = (propName: string) => (value: string | boolean) => {
    dispatch(changeSpecEntity(id, propName, value));
  };

  return (
    <>
      {mainSpecTableConfig.map(({ name: positionName }) => (
        <td>
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
            {positionName === 'drag' && <MenuOutlined />}
            {positionName === 'check' && (
              <Checkbox
                onChange={changeEntity(propNameMap.check)}
                value={check}
              />
            )}
          </div>
        </td>
      ))}
    </>
  );
};
