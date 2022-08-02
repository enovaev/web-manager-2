import { EntitySpecType, SpecEntityType } from '../types/interfaceState';

export interface ValueType {
  value: SpecEntityType;
  index: number;
  index2: number | null;
}

const createValueObj = (
  value: SpecEntityType,
  index: number,
  index2: number | null
): ValueType => ({
  value,
  index,
  index2
});

export const findElements = <T extends SpecEntityType>(
  list: T[],
  params: { id: number }
): (ValueType | null)[] => {
  let from: ValueType | null = null;
  let to: ValueType | null = null;

  const checkArray = <R extends SpecEntityType>(
    arr: R[],
    index2: number | null = null
  ) => {
    arr.forEach((item, index) => {
      if (item.dragged) {
        from = createValueObj(item, index, index2);
      }
      if (params.id === item.id) {
        to = createValueObj(item, index, index2);
      }
      if (item.isGroup) {
        checkArray(item.entities, index);
      }
    });
  };

  checkArray(list);

  return [from, to];
};

export const isGroupElem = (item: ValueType) => item.value.isGroup;
export const inGroup = (item: ValueType) => typeof item.index2 === 'number';
