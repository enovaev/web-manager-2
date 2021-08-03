import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, message } from 'antd';
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
      <Controller
        name="login"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputField
            classes={styles.fieldForm}
            placeholder="login"
            errorMessage={errors.login?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputField
            className={styles.fieldForm}
            placeholder="password"
            password
            errorMessage={errors.password?.message}
            {...field}
          />
        )}
      />
      <Button className={styles.submitButton} type="primary" htmlType="submit">
        Войти
      </Button>
    </form>
  );
};
