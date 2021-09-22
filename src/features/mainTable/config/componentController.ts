import { currencyItems } from 'features/currencyForm';
import { Checkbox } from '../components/Checkbox';
import { Input } from '../components/Input';
import { Tags } from '../components/Tags';
import { Select } from '../components/Select';
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
  name: {
    components: [
      {
        Component: Input,
        defaultProps: {},
        propName: 'name'
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
  price: {
    components: [
      {
        Component: Input,
        defaultProps: {
          isNumber: true
        },
        propName: 'price_value'
      },
      {
        Component: Select,
        defaultProps: {
          items: currencyItems
        },
        propName: 'price_currency'
      }
    ]
  },
  quantity: {
    components: [
      {
        Component: Input,
        defaultProps: {
          isNumber: true,
          maxWidth: 70
        },
        propName: 'quantity'
      }
    ]
  },
  price_end: {
    components: [
      {
        Component: Input,
        defaultProps: {
          isNumber: true
        },
        propName: 'price_end_value'
      },
      {
        Component: Select,
        defaultProps: {
          items: currencyItems
        },
        propName: 'price_end_currency'
      }
    ]
  },
  price_in: {
    components: [
      {
        Component: Input,
        defaultProps: {
          isNumber: true
        },
        propName: 'price_in_value'
      },
      {
        Component: Select,
        defaultProps: {
          items: currencyItems
        },
        propName: 'price_in_currency'
      }
    ]
  }
};
