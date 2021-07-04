import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'shared/hooks/customReduxHooks';
import { Popover } from 'antd';
import { TagOutlined } from '@ant-design/icons';
import { getOnlyCheckedPositions, selectTags } from 'features/mainTable';
import { CreateTagForm } from '../../components/CreateTagForm';
import { createTag, deleteTag } from '../../actions/tagActions';
import { getTagList } from '../../reducers/mainTableSettingsReducer/selectors';
import { generateID } from '../../lib/tagHelper';

export const TagCreator: FC<{}> = () => {
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

  const createTagHandler = (name: string, color: string) => {
    const ids = Object.keys(tagList).map(tagId => Number(tagId));
    const newId = generateID(ids);

    dispatch(createTag(newId, name, color));
  };

  const deleteTagHandler = (id: number) => {
    dispatch(deleteTag(id));
  };

  const setTagsHandler = (ids: number[]) => {
    dispatch(selectTags(ids));
    setVisible(false);
  };

  const PopoverContent = (
    <div>
      {visible && (
        <CreateTagForm
          createTag={createTagHandler}
          deleteTag={deleteTagHandler}
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
