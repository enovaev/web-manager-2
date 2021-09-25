import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'shared/hooks/customReduxHooks';
import { Popover } from 'antd';
import { DollarOutlined } from '@ant-design/icons';
import { saveCurrency } from '../../actions/currencyActions';
import { getCurrencySelector } from '../../reducers/currencyReducer/selectors';
import { CurrencyForm } from '../../components/CurrencyForm';
import { CurrencyListForSubmit } from '../../types/intefaceState';

export const CurrencyPopover: FC<{}> = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { list } = useSelector(getCurrencySelector);

  const handleVisible = (value: boolean) => {
    setVisible(value);
  };

  const submitFormHandler = (data: CurrencyListForSubmit): void => {
    dispatch(saveCurrency(data));
  };

  return (
    <Popover
      visible={visible}
      onVisibleChange={handleVisible}
      placement="bottomLeft"
      destroyTooltipOnHide
      trigger="click"
      content={
        <CurrencyForm
          submitForm={submitFormHandler}
          initialCurrency={list}
          onClose={handleVisible}
        />
      }
    >
      <DollarOutlined style={{ fontSize: '18px' }} />
    </Popover>
  );
};
