import React, { FC } from 'react';
import { useDispatch } from 'shared/hooks/customReduxHooks';
import { deleteEntity } from '../../actions/entityActions';
import styles from './styles.module.less';

interface DeletePositionProps {
  id: number;
}

export const DeletePosition: FC<DeletePositionProps> = ({ id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteEntity(id));
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <span className={styles.linkDelete} onClick={handleClick}>
      Delete
    </span>
  );
};
