import React, { FC } from 'react';
import { Slider as AntdSlider } from 'antd';
import styles from './styles.module.less';

interface SliderProps {
  value: string;
  onChange: (val: string) => void;
  min?: number;
  max?: number;
}

export const Slider: FC<SliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100
}) => {
  const handleChange = (val: number) => {
    onChange(val.toString());
  };

  return (
    <div className={styles.sliderWrapper}>
      <AntdSlider
        tooltipVisible={false}
        value={Number(value)}
        onChange={handleChange}
        min={min}
        max={max}
        step={1}
      />
    </div>
  );
};
