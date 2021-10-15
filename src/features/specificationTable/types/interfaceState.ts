export interface EntitySpecType {
  id: number;
  dragged: boolean;
  isGroup: false;
  spec_name_first: string;
  spec_name_second: string;
  check: boolean;
}

export interface GroupSpecType {
  id: number;
  isGroup: true;
  group_name: string;
  entities: EntitySpecType[];
}

export type SpecEntityType = EntitySpecType | GroupSpecType;

export interface SpecTableState {
  list: SpecEntityType[];
}
