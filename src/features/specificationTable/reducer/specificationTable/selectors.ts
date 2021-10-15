import { createSelector } from 'reselect';
import { RootState } from 'store/rootReducer';
import { EntityType } from 'features/mainTable/types/interfaceState';
import {
  EntitySpecType,
  GroupSpecType,
  SpecEntityType
} from '../../types/interfaceState';

const getAllPositions = (state: RootState): EntityType[] => state.table.list;
const getSpecTable = (state: RootState): SpecEntityType[] =>
  state.specificationTable.list;

type PropsFromMainType = Pick<
  EntityType,
  'name' | 'quantity' | 'price_end_value' | 'price_end_currency'
>;
const getPropsFromMain = ({
  name,
  quantity,
  price_end_value,
  price_end_currency
}: EntityType): PropsFromMainType => ({
  name,
  quantity,
  price_end_value,
  price_end_currency
});

export type MergedEntityType = PropsFromMainType & EntitySpecType;
export type SpecificationDataType = (
  | MergedEntityType
  | (Omit<GroupSpecType, 'entities'> & Record<'entities', MergedEntityType[]>)
)[];

export const getSpecificationData = createSelector<
  RootState,
  EntityType[],
  SpecEntityType[],
  SpecificationDataType
>([getAllPositions, getSpecTable], (allList, specList) => {
  const mapAll: Record<string, EntityType> = allList.reduce(
    (acc, item) => ({ ...acc, [item.id]: item }),
    {}
  );

  return specList.map(item => {
    if (item.isGroup) {
      return {
        ...item,
        entities: item.entities.map(i => ({
          ...i,
          ...getPropsFromMain(mapAll[i.id])
        }))
      };
    }
    return {
      ...item,
      ...getPropsFromMain(mapAll[item.id])
    };
  });
});
