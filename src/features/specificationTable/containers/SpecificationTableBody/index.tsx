import React from 'react';
import { useSelector } from 'shared/hooks/customReduxHooks';
import { SpecRowEntity } from '../../components/SpecRowEntity';
import { SpecRowGroup } from '../../components/SpecRowGroup';
import { getSpecificationData } from '../../reducer/specificationTable/selectors';
import { mainSpecTableConfig } from '../../config/mainSpecTableConfig';
import styles from './styles.module.less';

export const SpecificationTableBody = () => {
  const list = useSelector(getSpecificationData);

  return (
    <tbody>
      {list.map((props, index) =>
        props.isGroup ? (
          <>
            <tr key={props.id} className={styles.tableRow}>
              {mainSpecTableConfig.map(({ name }) => (
                <SpecRowGroup
                  key={name}
                  entityProps={props}
                  positionName={name}
                  index={(index + 1).toString()}
                />
              ))}
            </tr>
            {props.entities.map((item, index2) => (
              <tr key={item.id} className={styles.tableRow}>
                <SpecRowEntity
                  entityProps={item}
                  index={`${index + 1}.${index2 + 1}`}
                />
              </tr>
            ))}
          </>
        ) : (
          <tr key={props.id} className={styles.tableRow}>
            <SpecRowEntity entityProps={props} index={(index + 1).toString()} />
          </tr>
        )
      )}
    </tbody>
  );
};
