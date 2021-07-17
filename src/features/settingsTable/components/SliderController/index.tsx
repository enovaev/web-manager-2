import React, { FC } from 'react';
import { Input } from 'features/mainTable';
import { Slider } from '../Slider';
import styles from './styles.module.less';

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
    <div className={styles.wrapper}>
      {label}
      <Input
        onChange={onChange}
        value={value}
        invalid={false}
        defaultProps={{ isNumber: true, maxWidth: 50 }}
      />
      <Slider value={value} onChange={onChange} min={min} max={max} />
    </div>
  );
};
