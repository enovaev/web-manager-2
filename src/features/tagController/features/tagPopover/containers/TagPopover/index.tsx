import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'shared/hooks/customReduxHooks';
import { Popover } from 'antd';
import { TagOutlined } from '@ant-design/icons';
import { getOnlyCheckedPositions, assignTags } from 'features/mainTable';
import { InnerPopover } from '../../components/InnerPopover';
import { getTagStore } from '../../../../reducers/mainTagReducer/selectors';

export const TagPopover: FC<{}> = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const dispatch = useDispatch();
  const checkedPositions = useSelector(getOnlyCheckedPositions);
  const { list } = useSelector(getTagStore);

  const tagListSelected = Array.from(
    new Set(checkedPositions.flatMap(({ tags }) => tags))
  ).map(id => list[id]);

  const handleVisible = (value: boolean) => {
    if (checkedPositions.length) setVisible(value);
  };

  const setTagsHandler = (ids: number[]) => {
    dispatch(assignTags(ids));
    setVisible(false);
  };

  const PopoverContent = (
    <div>
      {visible && (
        <InnerPopover
          setTags={setTagsHandler}
          tagList={list}
          tagListSelected={tagListSelected}
        />
      )}
    </div>
  );

  return (
    <Popover
      visible={visible}
      onVisibleChange={handleVisible}
      placement="bottomLeft"
      trigger="click"
      content={PopoverContent}
    >
      <TagOutlined style={{ fontSize: '18px' }} />
    </Popover>
  );
};
