export { TableFormation } from './templates/TableFormation';
export { Input } from './components/Input';

// Action
export { selectTags, changeEntity } from './actions/entityActions';

// Reducer
export { mainTableReducer } from './reducers/mainTableReducer';

// Middleware
export { sortingHandler } from './middlewares/sortingHandler';
export { addPositionHandler } from './middlewares/addPositionHandler';

// Selector
export {
  getOnlyCheckedPositions,
  getSortedTableList
} from './reducers/mainTableReducer/selectors';

// Type
export type {
  MainTableState,
  PropNamesType,
  EntityType
} from './types/interfaceState';
