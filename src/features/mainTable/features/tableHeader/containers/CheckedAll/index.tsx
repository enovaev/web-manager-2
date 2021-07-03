import React, { FC } from 'react';
import { useSelector, useDispatch } from 'shared/hooks/customReduxHooks';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { getCheckedPositions } from '../../../../reducers/mainTableReducer/selectors';
import { checkAllEntities } from '../../../../actions/entityActions';

export const CheckedAll: FC<{}> = () => {
  const dispatch = useDispatch();
  const checkedPositions = useSelector(getCheckedPositions);

  const allChecked = checkedPositions.every(c => c);
  const allNotChecked = checkedPositions.every(c => !c);
  const indeterminate = !allChecked && !allNotChecked;

  const handleChange = ({ target }: CheckboxChangeEvent) => {
    dispatch(checkAllEntities(target.checked));
  };

  return (
    <Checkbox
      indeterminate={indeterminate}
      checked={allChecked}
      onChange={handleChange}
    />
  );
};
