import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SidebarController } from 'features/menuSidebar';
import { HomePage } from './HomePage';
import { AuthRegPage } from './AuthRegPage';
import '../styles/main.less';

export const AppPages: FC<{}> = () => (
  <SidebarController>
    <Switch>
      <Route path="/auth" component={AuthRegPage} />
      <Route component={HomePage} />
    </Switch>
  </SidebarController>
);
