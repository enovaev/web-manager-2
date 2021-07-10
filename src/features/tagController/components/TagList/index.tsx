import React, { ChangeEvent, useState, FC } from 'react';
import { Input, Row, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import cx from 'classnames';
import { TagType } from '../../types/interfaceState';
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

interface TagListProps {
  createTag: (name: string, color: string) => void;
  deleteTag: (id: number) => void;
  tagList: Record<number, TagType>;
  selectTag: (id: number) => void;
  selectedTags: number[];
}

export const TagList: FC<TagListProps> = ({
  tagList,
  deleteTag,
  selectTag,
  createTag,
  selectedTags
}) => {
  const [nameTag, setNameTag] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  const tags = Object.values(tagList);
  const useColors = tags.map(({ color }) => color);
  const targetColors = colors.filter(col => !useColors.includes(col));

  const deleteTagHandler = (id: number) => () => {
    deleteTag(id);
  };

  const createTagHandler = () => {
    if (nameTag) {
      createTag(nameTag, targetColors[0]);
      setNameTag('');
    }
    setVisible(false);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNameTag(target.value);
  };

  const showInput = () => {
    if (targetColors.length) {
      setVisible(true);
    }
  };

  return (
    <Row>
      {tags.map(tag => (
        <Tag
          key={tag.id}
          color={tag.color}
          className={cx(styles.tag, {
            [styles.notSelected]: !selectedTags.includes(tag.id)
          })}
          closable
          onClose={deleteTagHandler(tag.id)}
          onClick={() => selectTag(tag.id)}
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
  );
};
