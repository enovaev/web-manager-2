import { Checkbox } from '../components/Checkbox';
import { Input } from '../components/Input';
import { Tags } from '../components/Tags';
import { Select } from '../components/Select';
import { currencyItems } from './SelectConfig';
import { ComponentControllerType } from '../types/configTypes';

export const componentController: ComponentControllerType = {
  check: {
    components: [
      {
        Component: Checkbox,
        defaultProps: {},
        propName: 'check'
      }
    ]
  },
  partname: {
    components: [
      {
        Component: Input,
        defaultProps: {},
        propName: 'partname'
      }
    ]
  },
  tags: {
    components: [
      {
        Component: Tags,
        defaultProps: {},
        propName: 'tags'
      }
    ]
  },
  exw: {
    components: [
      {
        Component: Input,
        defaultProps: {},
        propName: 'exw_value'
      },
      {
        Component: Select,
        defaultProps: {
          items: currencyItems
        },
        propName: 'exw_currency'
      }
    ]
  }
};
