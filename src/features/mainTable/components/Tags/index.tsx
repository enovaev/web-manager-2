import React, { FC, memo } from 'react';
import { useSelector } from 'shared/hooks/customReduxHooks';
import { Tag as AntdTag } from 'antd';
import { getTagList } from 'features/tagController';

export interface TagsProps {
  value: number[];
  defaultProps?: object;
}

export const Tags: FC<TagsProps> = memo(
  ({ value }) => {
    const tagList = useSelector(getTagList);

    return (
      <div>
        {value.map(id => (
          <AntdTag color={tagList[id].color} key={id}>
            {tagList[id].name.toUpperCase()}
          </AntdTag>
        ))}
      </div>
    );
  },
  ({ value: valuePrev }, { value: valueNext }) => {
    return valuePrev.toString() === valueNext.toString();
  }
);
