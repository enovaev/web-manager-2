import React, { FC, useState } from 'react';
import { v4 as genId } from 'uuid';
import { useSelector, useDispatch } from 'shared/hooks/customReduxHooks';
import { Popover } from 'antd';
import { TagOutlined } from '@ant-design/icons';
import { getOnlyCheckedPositions, selectTag } from 'features/mainTable';
import { CreateTagForm } from '../../components/CreateTagForm';
import { createTag } from '../../actions/tagActions';
import { getChooseColors } from '../../reducers/mainTableSettingsReducer/selectors';

export const TagCreator: FC<{}> = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const dispatch = useDispatch();
  const checkedPositions = useSelector(getOnlyCheckedPositions);
  const chooseColors = useSelector(getChooseColors);

  const handleVisible = (value: boolean) => {
    if (checkedPositions.length) setVisible(value);
  };

  const createTagHandler = (name: string, color: string) => {
    const id = genId();

    setVisible(false);
    dispatch(createTag(id, name, color));
    dispatch(selectTag(id));
  };

  const PopoverContent = (
    <div>
      {visible && (
        <CreateTagForm
          createTag={createTagHandler}
          chooseColors={chooseColors}
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
