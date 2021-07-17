import { PropNamesType } from 'features/mainTable';

interface SettingsEntityType {
  label: string;
  valueName: PropNamesType;
}

export const settingsListMap: SettingsEntityType[] = [
  {
    valueName: 'delivery',
    label: 'Расходы на доставку'
  },
  {
    valueName: 'cus_house',
    label: 'Таможенные расходы'
  },
  {
    valueName: 'nds',
    label: 'НДС'
  },
  {
    valueName: 'discount',
    label: 'Дисконт'
  }
];
