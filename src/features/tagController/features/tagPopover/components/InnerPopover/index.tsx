import React, { FC, useState } from 'react';
import { Tag, Typography, Row, Button } from 'antd';
import { TagType } from '../../../../types/interfaceState';
import styles from './styles.module.less';

interface InnerPopoverProps {
  tagList: Record<number, TagType>;
  setTags: (ids: number[]) => void;
  tagListSelected: TagType[];
}

export const InnerPopover: FC<InnerPopoverProps> = ({
  tagListSelected,
  setTags,
  tagList
}) => {
  const [selectTags, setSelectTags] = useState<TagType[]>(tagListSelected);

  const tags = Object.values(tagList);

  const addForSelectTags = (tag: TagType) => () => {
    const findTag = selectTags.find(({ id }) => id === tag.id);

    if (!findTag) setSelectTags([...selectTags, tag]);
  };

  const deleteFromSelectTags = (idTag: number) => () => {
    setSelectTags(selectTags.filter(({ id }) => id !== idTag));
  };

  const setTagsForPositions = () => {
    setTags(selectTags.map(({ id }) => id));
  };

  return (
    <div style={{ width: 300 }}>
      <Typography.Text strong>Присвоить теги:</Typography.Text>
      <Row className={styles.selectTags}>
        {selectTags.map(({ color, name, id }) => (
          <Tag
            key={id}
            color={color}
            className={styles.tag}
            closable
            onClose={deleteFromSelectTags(id)}
          >
            {name.toUpperCase()}
          </Tag>
        ))}
      </Row>
      <Row justify="end">
        <Button size="small" type="primary" onClick={setTagsForPositions}>
          Присвоить
        </Button>
      </Row>
      <Typography.Text strong>Все теги:</Typography.Text>
      <Row>
        {tags.map(tag => (
          <Tag
            key={tag.id}
            color={tag.color}
            className={styles.tag}
            onClick={addForSelectTags(tag)}
          >
            {tag.name.toUpperCase()}
          </Tag>
        ))}
      </Row>
    </div>
  );
};
