import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withAppRouterHandler } from 'shared/decorators/withAppRouterHandler';
import { HomePage } from './HomePage';
import { AuthRegPage } from './AuthRegPage';
import '../styles/main.less';

const AppPagesComponent: FC<{}> = () => {
  return (
    <Switch>
      <Route path="/auth" component={AuthRegPage} />
      <Route component={HomePage} />
    </Switch>
  );
};

export const AppPages = withAppRouterHandler<{}>(AppPagesComponent);
