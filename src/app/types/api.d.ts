export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Demonyms;
  flag?: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: CoatOfArms;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = 'left',
  Right = 'right',
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = 'Africa',
  Antarctica = 'Antarctica',
  Asia = 'Asia',
  Europe = 'Europe',
  NorthAmerica = 'North America',
  Oceania = 'Oceania',
  SouthAmerica = 'South America',
}

export interface Currencies {
  MYR?: Aed;
  HTG?: Aed;
  TJS?: Aed;
  USD?: Aed;
  EUR?: Aed;
  MXN?: Aed;
  MKD?: Aed;
  WST?: Aed;
  GBP?: Aed;
  GGP?: Aed;
  LAK?: Aed;
  NAD?: Aed;
  ZAR?: Aed;
  KYD?: Aed;
  EGP?: Aed;
  KHR?: Aed;
  CKD?: Aed;
  NZD?: Aed;
  SCR?: Aed;
  ILS?: Aed;
  BOB?: Aed;
  AED?: Aed;
  XCD?: Aed;
  CNY?: Aed;
  DKK?: Aed;
  VUV?: Aed;
  AUD?: Aed;
  SBD?: Aed;
  TRY?: Aed;
  KWD?: Aed;
  XOF?: Aed;
  BIF?: Aed;
  RSD?: Aed;
  BND?: Aed;
  SGD?: Aed;
  BSD?: Aed;
  BHD?: Aed;
  DOP?: Aed;
  ANG?: Aed;
  KPW?: Aed;
  SSP?: Aed;
  AWG?: Aed;
  CZK?: Aed;
  SYP?: Aed;
  TZS?: Aed;
  PGK?: Aed;
  ERN?: Aed;
  MDL?: Aed;
  UZS?: Aed;
  UYU?: Aed;
  CDF?: Aed;
  TVD?: Aed;
  CAD?: Aed;
  CHF?: Aed;
  XAF?: Aed;
  LYD?: Aed;
  RWF?: Aed;
  BTN?: Aed;
  INR?: Aed;
  BWP?: Aed;
  MOP?: Aed;
  XPF?: Aed;
  BGN?: Aed;
  SZL?: Aed;
  DZD?: Aed;
  KES?: Aed;
  VES?: Aed;
  BAM?: BAM;
  SOS?: Aed;
  NOK?: Aed;
  GMD?: Aed;
  BZD?: Aed;
  PYG?: Aed;
  GNF?: Aed;
  JOD?: Aed;
  ZWL?: Aed;
  MZN?: Aed;
  CLP?: Aed;
  GTQ?: Aed;
  LSL?: Aed;
  PEN?: Aed;
  DJF?: Aed;
  STN?: Aed;
  AZN?: Aed;
  FJD?: Aed;
  PLN?: Aed;
  SLL?: Aed;
  MRU?: Aed;
  RUB?: Aed;
  NIO?: Aed;
  GHS?: Aed;
  HNL?: Aed;
  MVR?: Aed;
  NPR?: Aed;
  TWD?: Aed;
  LBP?: Aed;
  OMR?: Aed;
  JEP?: Aed;
  RON?: Aed;
  IMP?: Aed;
  BYN?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  KID?: Aed;
  FKP?: Aed;
  SEK?: Aed;
  HUF?: Aed;
  MAD?: Aed;
  COP?: Aed;
  SDG?: BAM;
  HKD?: Aed;
  SHP?: Aed;
  TMT?: Aed;
  ARS?: Aed;
  SAR?: Aed;
  BMD?: Aed;
  ETB?: Aed;
  MUR?: Aed;
  MMK?: Aed;
  LRD?: Aed;
  TND?: Aed;
  ISK?: Aed;
  JMD?: Aed;
  MNT?: Aed;
  IDR?: Aed;
  GEL?: Aed;
  ALL?: Aed;
  BRL?: Aed;
  GIP?: Aed;
  IRR?: Aed;
  NGN?: Aed;
  KRW?: Aed;
  AOA?: Aed;
  KMF?: Aed;
  BBD?: Aed;
  THB?: Aed;
  PAB?: Aed;
  GYD?: Aed;
  YER?: Aed;
  SRD?: Aed;
  CVE?: Aed;
  VND?: Aed;
  TTD?: Aed;
  MWK?: Aed;
  HRK?: Aed;
  MGA?: Aed;
  AMD?: Aed;
  AFN?: Aed;
  ZMW?: Aed;
  BDT?: Aed;
  CRC?: Aed;
  FOK?: Aed;
  UGX?: Aed;
  KZT?: Aed;
  TOP?: Aed;
  UAH?: Aed;
  QAR?: Aed;
  IQD?: Aed;
  LKR?: Aed;
  JPY?: Aed;
  KGS?: Aed;
  PHP?: Aed;
  PKR?: Aed;
}

export interface Aed {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export enum StartOfWeek {
  Monday = 'monday',
  Sunday = 'sunday',
  Turday = 'turday',
}

export enum Status {
  OfficiallyAssigned = 'officially-assigned',
  UserAssigned = 'user-assigned',
}
