import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'shared/hooks/customReduxHooks';
import { Popover } from 'antd';
import { TagOutlined } from '@ant-design/icons';
import { getOnlyCheckedPositions, selectTags } from 'features/mainTable';
import { InnerPopover } from '../../components/InnerPopover';
import { getTagList } from '../../../../reducers/mainTagReducer/selectors';

export const TagPopover: FC<{}> = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const dispatch = useDispatch();
  const checkedPositions = useSelector(getOnlyCheckedPositions);
  const tagList = useSelector(getTagList);

  const tagListSelected = Array.from(
    new Set(checkedPositions.flatMap(({ tags }) => tags))
  ).map(id => tagList[id]);

  const handleVisible = (value: boolean) => {
    if (checkedPositions.length) setVisible(value);
  };

  const setTagsHandler = (ids: number[]) => {
    dispatch(selectTags(ids));
    setVisible(false);
  };

  const PopoverContent = (
    <div>
      {visible && (
        <InnerPopover
          setTags={setTagsHandler}
          tagList={tagList}
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
      <TagOutlined />
    </Popover>
  );
};
