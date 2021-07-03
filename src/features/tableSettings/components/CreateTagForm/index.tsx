import React, { FC, useState } from 'react';
import { Button, Select } from 'antd';
import { Input } from 'features/mainTable';

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
  chooseColors: string[];
}

export const CreateTagForm: FC<CreateTagProps> = ({
  createTag,
  chooseColors
}) => {
  const [color, setColor] = useState<string>('');
  const [name, setName] = useState<string>('');

  const createTagHandle = () => {
    createTag(name, color);
  };

  const formatColors = colors.filter(col => !chooseColors.includes(col));

  return (
    <div>
      <Select value={color} onChange={setColor} placeholder="Select color">
        {formatColors.map(col => (
          <Select.Option value={col}>{col}</Select.Option>
        ))}
      </Select>
      <Input
        value={name}
        onChange={setName}
        defaultProps={{
          placeholder: 'tag name',
          maxWidth: 100,
          bordered: false
        }}
      />
      <Button onClick={createTagHandle}>Create</Button>
    </div>
  );
};
