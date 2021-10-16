import React from 'react';
import { useSelector } from 'shared/hooks/customReduxHooks';
import { SpecRowEntity } from '../../components/SpecRowEntity';
import { SpecRowGroup } from '../../components/SpecRowGroup';
import { getSpecificationData } from '../../reducer/specificationTable/selectors';

export const SpecificationTableBody = () => {
  const list = useSelector(getSpecificationData);

  return (
    <tbody>
      {list.map((props, index) =>
        props.isGroup ? (
          <>
            <SpecRowGroup
              key={props.id}
              entityProps={props}
              index={(index + 1).toString()}
            />
            {props.entities.map((item, inGroupIndex) => (
              <SpecRowEntity
                key={item.id}
                entityProps={item}
                index={index}
                indexGroup={inGroupIndex}
              />
            ))}
          </>
        ) : (
          <SpecRowEntity key={props.id} entityProps={props} index={index} />
        )
      )}
    </tbody>
  );
};
