import React, { FC } from 'react';
import { Button, Radio, RadioChangeEvent, Row} from 'antd';
import { useHistory, Switch, Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { LoadedPage } from './LoadedPage';
import styles from './styles.module.less';

const optionsWithDisabled = [
  { label: 'Загрузчик', value: '/loader' },
  { label: 'Расчет', value: '/calculate' },
  { label: 'Спецификация', value: '/specification' },
  { label: 'КП', value: '/commerce', disabled: true }
];

export const HomePage: FC<{}> = () => {
  const history = useHistory();

  const changeRoute = ({ target }: RadioChangeEvent) => {
    history.push(target.value);
  };

  const logout = () => {
    Cookies.remove('auth');
    history.push('/auth');
  };

  return (
    <div className={styles.homePage}>
      <Row justify="end">
        <Button onClick={logout}>Выйти</Button>
      </Row>
      <Row justify="center">
        <Radio.Group
          options={optionsWithDisabled}
          onChange={changeRoute}
          value={history.location.pathname}
          optionType="button"
          buttonStyle="solid"
        />
      </Row>
      <Switch>
        <Route path="/loader" component={LoadedPage} />
        <Route
          path="/calculate"
          component={() => <div>Страница расчета</div>}
        />
        <Route
          path="/specification"
          component={() => <div>Страница спецификации</div>}
        />
        <Redirect exact from="/" to="/loader" />
      </Switch>
    </div>
  );
};
