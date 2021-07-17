import React, { useState, FC } from 'react';
import { Drawer, Button } from 'antd';
import { SettingsList } from '../SettingsList';

export const SettingsSidebar: FC<{}> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggleHandler = () => setIsOpen(!isOpen);

  const text = `${isOpen ? 'Close' : 'Open'} settings`;

  return (
    <>
      <Button onClick={onToggleHandler}>{text}</Button>
      <Drawer
        placement="left"
        onClose={onToggleHandler}
        visible={isOpen}
        mask={false}
      >
        <SettingsList />
      </Drawer>
    </>
  );
};
