import {
  TypedUseSelectorHook,
  useDispatch as reduxUseDispatch,
  useSelector as reduxUseSelector
} from 'react-redux';
import type { AppDispatch } from 'store';
import type { RootState } from 'store/rootReducer';

export const useDispatch = () => reduxUseDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = reduxUseSelector;
