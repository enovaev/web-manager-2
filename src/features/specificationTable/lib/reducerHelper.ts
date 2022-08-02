import { SpecEntityType, EntitySpecType } from '../types/interfaceState';

interface PayloadType {
  id: number;
  propName: string;
  value: string | boolean;
}

export const changeValueFromList = <T extends SpecEntityType>(
  list: T[],
  payload: PayloadType
): SpecEntityType[] =>
  list.map(item => {
    const entities =
      item.isGroup && changeValueFromList(item.entities, payload);

    const result = {
      ...item,
      ...(entities && { entities })
    };

    if (item.id === payload.id) {
      return {
        ...result,
        [payload.propName]: payload.value
      };
    }
    return result;
  });

export const filterCheckedList = <T extends SpecEntityType>(
  list: T[]
): [T[], EntitySpecType[]] => {
  let withChecked: EntitySpecType[] = [];

  const result = list.filter(item => {
    if (!item.isGroup && item.check) {
      withChecked = [...withChecked, item];
      return false;
    }
    return true;
  });

  return [result, withChecked];
};
