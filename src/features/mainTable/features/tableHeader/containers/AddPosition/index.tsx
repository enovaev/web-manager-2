import React, { FC } from 'react';
import { Button } from 'antd';
import { useDispatch } from 'shared/hooks/customReduxHooks';
import { addPosition } from 'features/mainTable/actions/entityActions';

export const AddPosition: FC<{}> = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addPosition());
  };

  return <Button onClick={handleClick}>Add</Button>;
};
