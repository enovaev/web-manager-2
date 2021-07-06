import React, { FC } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { Link, useHistory, Switch, Route, Redirect } from 'react-router-dom';
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

  return (
    <div className={styles.homePage}>
      Home page
      <Link to="/auth">click</Link>
      <Radio.Group
        options={optionsWithDisabled}
        onChange={changeRoute}
        value={history.location.pathname}
        optionType="button"
        buttonStyle="solid"
      />
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
