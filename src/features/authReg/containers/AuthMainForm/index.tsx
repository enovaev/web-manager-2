import React, { FC } from 'react';
import { Row, Col, Button, message } from 'antd';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { InputField } from 'shared/components/InputField';

import styles from './styles.module.less';

interface IFormInput {
  login: string;
  password: string;
}

const schema = yup.object().shape({
  login: yup.string().required('Обязательное поле'),
  password: yup.string().min(8, 'Пароль должен быть не менее 8 символов')
});

const testAccount = {
  login: 'test',
  password: '88888888'
};

export const AuthMainForm: FC<{}> = () => {
  const { replace } = useHistory();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    if (JSON.stringify(data) === JSON.stringify(testAccount)) {
      Cookies.set('auth', JSON.stringify(data));
      replace('/');
    } else {
      message.error('Такого пользователя не существует');
    }
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <Row gutter={[0, 10]}>
        <Col span={24}>
          <Controller
            name="login"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputField
                placeholder="login"
                errorMessage={errors.login?.message}
                {...field}
              />
            )}
          />
        </Col>
        <Col span={24}>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputField
                placeholder="password"
                password
                errorMessage={errors.password?.message}
                {...field}
              />
            )}
          />
        </Col>
        <Col span={24}>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Col>
      </Row>
    </form>
  );
};
