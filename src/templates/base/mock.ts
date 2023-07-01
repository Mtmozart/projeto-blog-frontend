import { BaseTemplateProps } from '.';
import { data } from '../../api/data.json';

export default {
  settings: data.setting,
  children: 'Olá mundo',
} as BaseTemplateProps;
