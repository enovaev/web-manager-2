import React, { useState, FC } from 'react';
import { Drawer, Button } from 'antd';
import { MenuItems } from '../MenuItems';

interface PropsSidebarController {
  children: React.ReactNode;
}

export const SidebarController: FC<PropsSidebarController> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onCloseHandler = () => setIsOpen(false);

  const onOpenHandler = () => setIsOpen(true);

  return (
    <>
      <Button onClick={onOpenHandler}>Click</Button>
      <Drawer
        placement="left"
        closable={false}
        onClose={onCloseHandler}
        visible={isOpen}
      >
        <MenuItems closeSidebar={onCloseHandler} />
      </Drawer>
      {children}
    </>
  );
};
