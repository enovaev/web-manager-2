import React, { FC } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const menuLinks = [
  {
    to: '/',
    label: 'Главная'
  },
  {
    to: '/groups',
    label: 'Группы'
  }
];

interface  PropsMenuItems {
  closeSidebar: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MenuItems: FC<PropsMenuItems> = ({ closeSidebar }) => (
  <Menu defaultSelectedKeys={['/']} mode="vertical">
    {menuLinks.map(({ to, label }) => (
      <Menu.Item key={to}>
        <NavLink to={to}>{label}</NavLink>
      </Menu.Item>
    ))}
  </Menu>
);
