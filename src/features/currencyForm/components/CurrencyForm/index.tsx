import React, { FC } from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { currencyItems, CurrencyValues } from '../../config/currencyList';
import { InputField } from '../../../../shared/components/InputField';
import styles from './styles.module.less';

type FormInterface = {
  [Property in CurrencyValues]: string;
};

const schema = yup.object().shape(
  currencyItems.reduce((acc, { value }) => {
    // @ts-ignore
    acc[value] = yup.string().required('Обязательное поле');
    return acc;
  }, {})
);

export const CurrencyForm: FC<{}> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInterface>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<FormInterface> = data => {
    console.log(data);
  };

  return (
    <form className={styles.currencyForm} onSubmit={handleSubmit(onSubmit)}>
      <Row gutter={[0, 10]}>
        <Col span={24}>
          <Typography.Text strong>Задать валюты:</Typography.Text>
        </Col>
        {currencyItems.map(({ name, value }) => (
          <Col span={24}>
            <Controller
              name={value}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputField
                  placeholder={name}
                  isNumber
                  errorMessage={errors[value]?.message}
                  {...field}
                />
              )}
            />
          </Col>
        ))}
        <Col span={24}>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </Col>
      </Row>
    </form>
  );
};
