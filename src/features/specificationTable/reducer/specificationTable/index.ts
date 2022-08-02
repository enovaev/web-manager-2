/* eslint-disable no-return-assign, no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { addPositionPrepared } from 'features/mainTable/actions/entityActions';
import {
  changeSpecEntity,
  createGroup,
  swapElements,
  removeFromList,
  addToList
} from '../../actions';
import { SpecTableState, EntitySpecType } from '../../types/interfaceState';
import {
  changeValueFromList,
  filterCheckedList
} from '../../lib/reducerHelper';

const initialEntitySpec: Omit<EntitySpecType, 'id'> = {
  dragged: false,
  spec_name_first: '',
  spec_name_second: '',
  check: false,
  isGroup: false
};

const initialState = {
  list: []
} as SpecTableState;

export const specificationTable = createReducer(initialState, builder => {
  builder
    .addCase(addPositionPrepared, (state, { payload }) => {
      const { id } = payload;
      state.list = [...state.list, { id, ...initialEntitySpec }];
    })
    .addCase(changeSpecEntity, (state, { payload }) => {
      state.list = changeValueFromList(state.list, payload);
    })
    .addCase(createGroup, (state, { payload }) => {
      const [list, checkedList] = filterCheckedList(state.list);

      const updated = list.map(item => {
        if (item.isGroup) {
          const [newList, checked] = filterCheckedList(item.entities);
          checkedList.push(...checked);

          return {
            ...item,
            entities: newList
          };
        }
        return item;
      });
      state.list = [
        {
          id: Math.random(),
          isGroup: true,
          dragged: false,
          group_name: payload,
          entities: checkedList
        },
        ...updated
      ];
    })
    .addCase(swapElements, (state, { payload }) => {
      const { from, to } = payload;

      if (from.index2 !== null && to.index2 !== null) {
        state.list[from.index2].entities[from.index] = to.value;
        state.list[to.index2].entities[to.index] = from.value;
      } else {
        state.list[from.index] = to.value;
        state.list[to.index] = from.value;
      }
    })
    .addCase(removeFromList, (state, { payload }) => {
      state.list = state.list.reduce<SpecTableState['list']>((acc, item) => {
        if (item.id === payload) return acc;

        if (item.isGroup) {
          acc.push({
            ...item,
            entities: item.entities.filter(i => i.id !== payload)
          });
          return acc;
        }

        acc.push(item);
        return acc;
      }, []);
    })
    .addCase(addToList, (state, { payload }) => {
      const { value, index, index2 } = payload;

      if (index2 !== null) {
        const copy = { ...state.list[index2] };
        copy.entities.splice(index, 0, value);
        state.list[index2] = copy;
      } else {
        const copy = [...state.list];
        copy.splice(index, 0, value);
        state.list = copy;
      }
    });
});
