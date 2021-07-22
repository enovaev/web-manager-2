import { Middleware } from '@reduxjs/toolkit';
import { changeEntity } from 'features/mainTable';
import { changeSettingEntity } from '../../actions/sliderAction';
import { RootState } from '../../../../store/rootReducer';
import { formatDataToNumber, formatToString } from '../../lib/calculateHelper';
import { calculatePosition } from '../../actions/calculateActions';

const reactionOnChangeValue = ['price_value', 'quantity'];

export const calculateHandler: Middleware<{}, RootState> =
  store => next => action => {
    next(action);

    const conditionForCalculate =
      changeSettingEntity.match(action) ||
      (changeEntity.match(action) &&
        reactionOnChangeValue.includes(action.payload.propName));

    if (conditionForCalculate) {
      const { list } = store.getState().table;
      const listForCalculate = list.filter(({ visible }) => visible);

      const result: Record<number, object> = listForCalculate.reduce(
        (acc, entity) => {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const { quantity, price_value, delivery, nds, discount, sale } =
            formatDataToNumber(entity);

          const price = quantity * price_value;
          const priceIn = price * delivery * nds * discount;
          const priceEnd = price * delivery * nds * sale;
          const profit = (priceEnd - priceIn) / priceEnd || 0;

          return {
            ...acc,
            [entity.id]: formatToString(priceIn, priceEnd, profit)
          };
        },
        {}
      );

      next(calculatePosition(result));
    }
  };
