import React, { FC, memo } from 'react';
import { useSelector } from 'shared/hooks/customReduxHooks';
import { Tag as AntdTag } from 'antd';
import { getTagStore } from 'features/tagController';

export interface TagsProps {
  value: number[];
  defaultProps?: object;
}

export const Tags: FC<TagsProps> = memo(
  ({ value }) => {
    const { list } = useSelector(getTagStore);

    return (
      <div>
        {value.map(id => (
          <AntdTag color={list[id].color} key={id}>
            {list[id].name.toUpperCase()}
          </AntdTag>
        ))}
      </div>
    );
  },
  ({ value: valuePrev }, { value: valueNext }) => {
    return valuePrev.toString() === valueNext.toString();
  }
);
