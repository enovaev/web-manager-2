import React, { useState } from 'react';
import { useDispatch } from 'shared/hooks/customReduxHooks';
import { Button, Popover, Space } from 'antd';
import { TagOutlined } from '@ant-design/icons';
import { Input } from 'features/mainTable/components/Input';
import { createGroup } from '../../../../actions';

export const GroupCreatorPopover = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [nameGroup, setNameGroup] = useState<string>('');

  const dispatch = useDispatch();
  // const list = useSelector(getSpecificationData);

  const createGroupHandler = () => {
    dispatch(createGroup(nameGroup));
  };

  const changeVisible = (value: boolean) => {
    setVisible(value);
  };

  return (
    <Popover
      visible={visible}
      onVisibleChange={changeVisible}
      placement="bottomLeft"
      trigger="click"
      content={
        <Space>
          <Input onChange={setNameGroup} value={nameGroup} invalid={false} />
          <Button
            size="small"
            type="primary"
            disabled={!nameGroup}
            onClick={createGroupHandler}
          >
            Создать группу
          </Button>
        </Space>
      }
    >
      <TagOutlined style={{ fontSize: '18px' }} />
    </Popover>
  );
};
