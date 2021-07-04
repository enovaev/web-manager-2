import React, { ChangeEvent, FC, useState } from 'react';
import { Tag, Typography, Input, Row, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { TagType } from '../../reducers/mainTableSettingsReducer';
import styles from './styles.module.less';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime'
];

interface CreateTagProps {
  createTag: (name: string, color: string) => void;
  deleteTag: (id: string) => void;
  tagList: Record<string, TagType>;
  setTags: (ids: string[]) => void;
  tagListSelected: TagType[];
}

export const CreateTagForm: FC<CreateTagProps> = ({
  tagListSelected,
  createTag,
  deleteTag,
  setTags,
  tagList
}) => {
  const [nameTag, setNameTag] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [selectTags, setSelectTags] = useState<TagType[]>(tagListSelected);

  const tags = Object.values(tagList);
  const useColors = tags.map(({ color }) => color);
  const targetColors = colors.filter(col => !useColors.includes(col));

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNameTag(target.value);
  };

  const createTagHandler = () => {
    if (nameTag) {
      createTag(nameTag, targetColors[0]);
      setNameTag('');
    }
    setVisible(false);
  };

  const showInput = () => {
    if (targetColors.length) {
      setVisible(true);
    }
  };

  const deleteTagHandler = (id: string) => () => {
    deleteTag(id);
  };

  const addForSelectTags = (tag: TagType) => () => {
    const findTag = selectTags.find(({ id }) => id === tag.id);

    if (!findTag) setSelectTags([...selectTags, tag]);
  };

  const deleteFromSelectTags = (idTag: string) => () => {
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
            closable
            onClose={deleteTagHandler(tag.id)}
            onClick={addForSelectTags(tag)}
          >
            {tag.name.toUpperCase()}
          </Tag>
        ))}
        {visible ? (
          <Input
            type="text"
            size="small"
            autoFocus
            className={styles.inputTag}
            value={nameTag}
            onChange={handleInputChange}
            onBlur={createTagHandler}
            onPressEnter={createTagHandler}
          />
        ) : (
          <Tag className={styles.tagAdded} onClick={showInput}>
            <PlusOutlined /> New Tag
          </Tag>
        )}
      </Row>
    </div>
  );
};
