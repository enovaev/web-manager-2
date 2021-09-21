import React, { FC } from 'react';
import { useDispatch, useSelector } from 'shared/hooks/customReduxHooks';
import { generateID } from 'shared/lib/generateID';
import { getTagStore } from '../../reducers/mainTagReducer/selectors';
import { TagList } from '../../components/TagList';
import {
  createTag,
  deleteTag,
  selectTag,
  selectAllTag
} from '../../actions/tagActions';

export const TagSortedTabs: FC<{}> = () => {
  const dispatch = useDispatch();
  const { list, selected, selectAll } = useSelector(getTagStore);

  const createTagHandler = (name: string, color: string) => {
    const ids = Object.keys(list).map(tagId => Number(tagId));
    const newId = generateID(ids);

    dispatch(createTag(newId, name, color));
  };

  const deleteTagHandler = (id: number) => {
    dispatch(deleteTag(id));
  };

  const selectTagsHandler = (id: number) => {
    dispatch(selectTag(id));
  };

  const selectTagsAllHandler = () => {
    dispatch(selectAllTag());
  };

  return (
    <TagList
      createTag={createTagHandler}
      deleteTag={deleteTagHandler}
      selectTag={selectTagsHandler}
      selectAll={selectTagsAllHandler}
      isSelectAll={selectAll}
      selectedTags={selected}
      tagList={list}
    />
  );
};
