import { Checkbox } from '../components/Checkbox';
import { Input } from '../components/Input';
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
  option: {
    components: [
      {
        Component: Input,
        defaultProps: {},
        propName: 'option'
      }
    ]
  }
};
