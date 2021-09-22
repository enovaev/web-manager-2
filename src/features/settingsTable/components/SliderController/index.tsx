import React, { FC } from 'react';
import { Row } from 'antd';
import { Input } from 'features/mainTable';
import { Slider } from '../Slider';

interface SliderControllerProps {
  value: string;
  onChange: (val: string) => void;
  label?: string;
  min?: number;
  max?: number;
}

export const SliderController: FC<SliderControllerProps> = ({
  value,
  onChange,
  label,
  min,
  max
}) => {
  return (
    <>
      <Row justify="center">{label}</Row>
      <Row justify="center">
        <Input
          onChange={onChange}
          value={value}
          invalid={false}
          defaultProps={{ isNumber: true, maxWidth: 50 }}
        />
      </Row>
      <Slider value={value} onChange={onChange} min={min} max={max} />
    </>
  );
};
