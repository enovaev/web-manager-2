import { Middleware } from '@reduxjs/toolkit';
import { changeEntity } from 'features/mainTable';
import { changeSettingEntity } from '../../actions/sliderAction';
import { RootState } from '../../../../store/rootReducer';
import {
  formatDataToNumber,
  formatToString,
  currencyConvert
} from '../../lib/calculateHelper';
import { calculatePosition } from '../../actions/calculateActions';

const reactionOnChangeValue = [
  'price_value',
  'quantity',
  'price_currency',
  'price_end_currency',
  'price_in_currency'
];

export const calculateHandler: Middleware<{}, RootState> =
  store => next => action => {
    next(action);

    const conditionForCalculate =
      changeSettingEntity.match(action) ||
      (changeEntity.match(action) &&
        reactionOnChangeValue.includes(action.payload.propName));

    if (conditionForCalculate) {
      const { table, currency } = store.getState();
      const currencyList = currency.list;
      const listForCalculate = table.list.filter(({ visible }) => visible);

      const result: Record<number, object> = listForCalculate.reduce(
        (acc, entity) => {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const { price_currency, price_end_currency, price_in_currency } =
            entity;
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const { quantity, price_value, delivery, nds, discount, sale } =
            formatDataToNumber(entity);

          const price = quantity * price_value;
          const priceIn = price * delivery * nds * discount;
          const priceEnd = price * delivery * nds * sale;
          const profit = (priceEnd - priceIn) / priceEnd || 0;

          const priceInConvert = currencyConvert(
            priceIn,
            currencyList[price_currency],
            currencyList[price_in_currency]
          );
          const priceEndConvert = currencyConvert(
            priceEnd,
            currencyList[price_currency],
            currencyList[price_end_currency]
          );

          return {
            ...acc,
            [entity.id]: formatToString(priceInConvert, priceEndConvert, profit)
          };
        },
        {}
      );

      next(calculatePosition(result));
    }
  };
