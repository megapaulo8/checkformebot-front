import { OptionLegend } from './option-legend';

export interface OptionColor {
  width?: number;
  height?: number;
  border?: string;
  chartArea?: any;
  legend?: OptionLegend;
  colors?: Array<string>;
  backgroundColor?: string;
}
