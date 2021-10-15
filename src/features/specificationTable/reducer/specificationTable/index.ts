/* eslint-disable no-return-assign, no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { addPositionPrepared } from 'features/mainTable/actions/entityActions';
import { changeSpecEntity, createGroup, swapElements } from '../../actions';
import { SpecTableState, EntitySpecType } from '../../types/interfaceState';
import {
  changeValueFromList,
  filterCheckedList,
  findElements
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
      const [from, to] = findElements(state.list, payload);
      // console.log(from, to);

      if (from && to) {
        state.list = state.list.map(item => {
          if (item.id === from.id) {
            return to;
          }
          if (item.id === to.id) {
            return from;
          }
          return item;
        });
      }
    });
});
