import React, { FC } from 'react';
import { useDispatch, useSelector } from 'shared/hooks/customReduxHooks';
import { getSortedTableList } from 'features/mainTable';
import { SliderController } from '../../components/SliderController';
import { settingsListMap } from '../../config/settingsListMap';
import { changeSettingEntity } from '../../actions/sliderAction';
import styles from './styles.module.less';

export const SettingsList: FC<{}> = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(getSortedTableList);

  const firstPosition = list[0];

  const changeValue = (propName: string) => (value: string) => {
    dispatch(changeSettingEntity(propName, value));
  };

  return (
    <div className={styles.listSettingsWrapper}>
      {settingsListMap.map(({ valueName, label }) => (
        <>
          <SliderController
            label={label}
            value={firstPosition[valueName] as string}
            onChange={changeValue(valueName)}
          />
        </>
      ))}
      <SliderController
        label="Наценка"
        value={firstPosition.sale}
        onChange={changeValue('sale')}
        min={-100}
      />
    </div>
  );
};
