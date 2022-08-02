import { Middleware } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';
import {
  swapElements,
  dropAction,
  removeFromList,
  addToList
} from '../../actions';
import { findElements, isGroupElem, inGroup } from '../../lib/middlewareHelper';

export const dragAndDropHandler: Middleware<{}, RootState> =
  store => next => action => {
    if (dropAction.match(action)) {
      const { id } = action.payload;
      const { list } = store.getState().specificationTable;

      const [from, to] = findElements(list, { id });

      if (from && to) {
        if (isGroupElem(from) && inGroup(to)) {
          return next(action);
        }
        if ((isGroupElem(from) || !inGroup(from)) && !inGroup(to)) {
          return next(swapElements(from, to));
        }
        if (inGroup(from) && inGroup(to)) {
          return next(swapElements(from, to));
        }
        if (!inGroup(from) && !isGroupElem(from) && inGroup(to)) {
          store.dispatch(removeFromList(from.value.id));
          return next(addToList({ ...to, value: from.value }));
        }
      }
    }
    return next(action);
  };
