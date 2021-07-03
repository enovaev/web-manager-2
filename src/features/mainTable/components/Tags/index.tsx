import React, { FC, memo } from 'react';
import { Tag as AntdTag } from 'antd';

export interface TagsProps {
  value: string[];
  defaultProps?: object;
}

export const Tags: FC<TagsProps> = memo(
  ({ value }) => (
    <div style={{ maxWidth: '300' }}>
      {value.map(tag => (
        <AntdTag color="geekblue" key={tag}>
          {tag.toUpperCase()}
        </AntdTag>
      ))}
    </div>
  ),
  ({ value: valuePrev }, { value: valueNext }) => {
    return valuePrev.toString() === valueNext.toString();
  }
);
