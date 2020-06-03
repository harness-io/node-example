import { Asset } from './Asset';
import { Customer } from './Customer';

export declare type Theme = {
  customer: Customer | string[]; // Stored as an array of strings on AT API, converted to a Customer object once sanitised
  id?: number;
  logo?: Asset | [Asset]; // Stored as an array on AT API, converted to an Asset object once sanitised
  primaryColor?: string;
};
