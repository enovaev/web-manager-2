export type TagType = {
  id: number;
  name: string;
  color: string;
};

export interface TagControllerState {
  list: Record<number, TagType>;
  selected: number[];
  selectAll: boolean;
}
