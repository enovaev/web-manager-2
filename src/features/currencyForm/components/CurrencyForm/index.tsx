import React, { FC } from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { currencyItems } from '../../config/currencyList';
import { CurrencyListForSubmit } from '../../types/intefaceState';
import { InputField } from '../../../../shared/components/InputField';
import styles from './styles.module.less';

interface CurrencyFormProps {
  onClose: (v: boolean) => void;
  submitForm: (data: CurrencyListForSubmit) => void;
  initialCurrency: CurrencyListForSubmit;
}

const prepareData = (data: CurrencyListForSubmit) =>
  Object.entries(data).reduce((acc, [key, value]) => {
    if (value) {
      // @ts-ignore
      acc[key] = value;
    }
    return acc;
  }, {});

const prepareCurrencyItems = currencyItems.filter(
  ({ value }) => value !== 'RUB'
);

export const CurrencyForm: FC<CurrencyFormProps> = ({
  onClose,
  submitForm,
  initialCurrency: { RUB, ...otherCurrency }
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<CurrencyListForSubmit>({
    defaultValues: otherCurrency
  });
  const onSubmit: SubmitHandler<CurrencyListForSubmit> = data => {
    submitForm(prepareData(data));
    onClose(false);
  };

  return (
    <form className={styles.currencyForm} onSubmit={handleSubmit(onSubmit)}>
      <Row gutter={[0, 10]}>
        <Col span={24}>
          <Typography.Text strong>Задать валюты:</Typography.Text>
        </Col>
        {prepareCurrencyItems.map(({ name, value }) => (
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
        {/* <Button */}
        {/*  onClick={() => { */}
        {/*    const blob = new Blob(['test text'], { */}
        {/*      type: 'text/plain;charset=utf-8' */}
        {/*    }); */}
        {/*    FileSaver.saveAs(blob, 'testfile1.txt'); */}
        {/*  }} */}
        {/* > */}
        {/*  Test */}
        {/* </Button> */}
      </Row>
    </form>
  );
};
