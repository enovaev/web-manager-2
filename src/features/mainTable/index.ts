export { TableFormation } from './templates/TableFormation';
export { Input } from './components/Input';

// Action
export { selectTags } from './actions/entityActions';

// Reducer
export { mainTableReducer } from './reducers/mainTableReducer';

// Middleware
export { sortingHandler } from './middlewares/sortingHandler';
export { addPositionHandler } from './middlewares/addPositionHandler';

// Selector
export { getOnlyCheckedPositions } from './reducers/mainTableReducer/selectors';

// Type
export type { MainTableState } from './types/interfaceState';
