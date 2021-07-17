import React, { FC } from 'react';
import { useDispatch, useSelector } from 'shared/hooks/customReduxHooks';
import { generateID } from 'shared/lib/generateID';
import {
  getTagList,
  getSelectedTags
} from '../../reducers/mainTagReducer/selectors';
import { TagList } from '../../components/TagList';
import { createTag, deleteTag, selectTag } from '../../actions/tagActions';

export const TagSortedTabs: FC<{}> = () => {
  const dispatch = useDispatch();
  const tagList = useSelector(getTagList);
  const selectedTags = useSelector(getSelectedTags);

  const createTagHandler = (name: string, color: string) => {
    const ids = Object.keys(tagList).map(tagId => Number(tagId));
    const newId = generateID(ids);

    dispatch(createTag(newId, name, color));
  };

  const deleteTagHandler = (id: number) => {
    dispatch(deleteTag(id));
  };

  const selectTagsHandler = (id: number) => {
    dispatch(selectTag(id));
  };

  return (
    <TagList
      createTag={createTagHandler}
      deleteTag={deleteTagHandler}
      selectTag={selectTagsHandler}
      selectedTags={selectedTags}
      tagList={tagList}
    />
  );
};
