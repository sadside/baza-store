/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * OpenAPI spec version: 0.0.0
 */
export type SchemaRetrieve200Four = { [key: string]: {} };

export type SchemaRetrieve200Three = { [key: string]: {} };

export type SchemaRetrieve200Two = { [key: string]: {} };

export type SchemaRetrieve200One = { [key: string]: {} };

export type SchemaRetrieveLang = (typeof SchemaRetrieveLang)[keyof typeof SchemaRetrieveLang];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SchemaRetrieveLang = {
  af: 'af',
  ar: 'ar',
  'ar-dz': 'ar-dz',
  ast: 'ast',
  az: 'az',
  be: 'be',
  bg: 'bg',
  bn: 'bn',
  br: 'br',
  bs: 'bs',
  ca: 'ca',
  ckb: 'ckb',
  cs: 'cs',
  cy: 'cy',
  da: 'da',
  de: 'de',
  dsb: 'dsb',
  el: 'el',
  en: 'en',
  'en-au': 'en-au',
  'en-gb': 'en-gb',
  eo: 'eo',
  es: 'es',
  'es-ar': 'es-ar',
  'es-co': 'es-co',
  'es-mx': 'es-mx',
  'es-ni': 'es-ni',
  'es-ve': 'es-ve',
  et: 'et',
  eu: 'eu',
  fa: 'fa',
  fi: 'fi',
  fr: 'fr',
  fy: 'fy',
  ga: 'ga',
  gd: 'gd',
  gl: 'gl',
  he: 'he',
  hi: 'hi',
  hr: 'hr',
  hsb: 'hsb',
  hu: 'hu',
  hy: 'hy',
  ia: 'ia',
  id: 'id',
  ig: 'ig',
  io: 'io',
  is: 'is',
  it: 'it',
  ja: 'ja',
  ka: 'ka',
  kab: 'kab',
  kk: 'kk',
  km: 'km',
  kn: 'kn',
  ko: 'ko',
  ky: 'ky',
  lb: 'lb',
  lt: 'lt',
  lv: 'lv',
  mk: 'mk',
  ml: 'ml',
  mn: 'mn',
  mr: 'mr',
  ms: 'ms',
  my: 'my',
  nb: 'nb',
  ne: 'ne',
  nl: 'nl',
  nn: 'nn',
  os: 'os',
  pa: 'pa',
  pl: 'pl',
  pt: 'pt',
  'pt-br': 'pt-br',
  ro: 'ro',
  ru: 'ru',
  sk: 'sk',
  sl: 'sl',
  sq: 'sq',
  sr: 'sr',
  'sr-latn': 'sr-latn',
  sv: 'sv',
  sw: 'sw',
  ta: 'ta',
  te: 'te',
  tg: 'tg',
  th: 'th',
  tk: 'tk',
  tr: 'tr',
  tt: 'tt',
  udm: 'udm',
  uk: 'uk',
  ur: 'ur',
  uz: 'uz',
  vi: 'vi',
  'zh-hans': 'zh-hans',
  'zh-hant': 'zh-hant',
} as const;

export type SchemaRetrieveFormat = (typeof SchemaRetrieveFormat)[keyof typeof SchemaRetrieveFormat];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SchemaRetrieveFormat = {
  json: 'json',
  yaml: 'yaml',
} as const;

export type SchemaRetrieveParams = {
  format?: SchemaRetrieveFormat;
  lang?: SchemaRetrieveLang;
};

/**
 * * `created` - Created
 * `paid` - Paid
 * `in_delivery` - In Delivery
 * `delivered` - Delivered
 * `received` - Received
 * `cancelled` - Cancelled
 */
export type ViewOrderStatusEnum = (typeof ViewOrderStatusEnum)[keyof typeof ViewOrderStatusEnum];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ViewOrderStatusEnum = {
  created: 'created',
  paid: 'paid',
  in_delivery: 'in_delivery',
  delivered: 'delivered',
  received: 'received',
  cancelled: 'cancelled',
} as const;

export interface ViewOrder {
  address?: string | null;
  amount?: number;
  apartment_number?: number | null;
  code?: string | null;
  email: string;
  floor_number?: number | null;
  readonly id: number;
  intercom?: number | null;
  is_paid?: boolean;
  is_received?: boolean;
  loaylty_awarded?: boolean;
  loyalty_received?: number;
  name: string;
  order_date?: string;
  payment_type: PaymentTypeEnum;
  phone: string;
  readonly products: string;
  receiving: ReceivingEnum;
  receiving_date?: string | null;
  status?: ViewOrderStatusEnum;
  surname: string;
}

export interface UserDataSerialzier {
  birthday_date: string;
  readonly email: string;
  readonly id: number;
  name?: string | null;
  readonly phone: string;
  surname?: string | null;
}

/**
 * * `courier` - Доставка
 * `cdek` - Пункт СДЕК
 * `pickup` - Самовывоз
 */
export type ReceivingEnum = (typeof ReceivingEnum)[keyof typeof ReceivingEnum];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ReceivingEnum = {
  courier: 'courier',
  cdek: 'cdek',
  pickup: 'pickup',
} as const;

export interface ProductsCalculate {
  color: string;
  image: string;
  message: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  status: string;
}

export interface ProductPath {
  readonly children: string;
  readonly id: number;
  name: string;
  slug?: string;
}

export interface Product {
  category: number;
  readonly color_images: string;
  description?: string | null;
  readonly full_path: string;
  readonly id: number;
  image?: string;
  readonly modifications: string;
  name: string;
  path: AloneProductPath;
  price: number;
  readonly slug_path: string;
}

export interface PhoneNumber {
  phone: string;
}

/**
 * * `online` - Картой онлайн
 * `cash` - Наличными
 * `sbp` - СБП
 */
export type PaymentTypeEnum = (typeof PaymentTypeEnum)[keyof typeof PaymentTypeEnum];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PaymentTypeEnum = {
  online: 'online',
  cash: 'cash',
  sbp: 'sbp',
} as const;

export interface Payment {
  readonly amount: number;
  readonly description: string;
  readonly details: string;
  readonly error_code: string;
  readonly id: number;
  readonly message: string;
  readonly order_id: string;
  payment_fail?: boolean;
  readonly payment_id: string;
  /** Ссылка на страницу оплаты. По умолчанию ссылка доступна в течении 24 часов. */
  readonly payment_url: string;
  readonly status: string;
  readonly success: boolean;
}

export interface PatchedAddress {
  address?: string;
  apartment_number?: number | null;
  code?: string | null;
  floor_number?: number | null;
  readonly id?: number;
  intercom?: number | null;
  is_main?: boolean;
  type?: string;
  readonly user_id?: number;
}

/**
 * * `marketing` - Marketing
 * `bring_in` - Bring In
 */
export type OperationEnum = (typeof OperationEnum)[keyof typeof OperationEnum];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OperationEnum = {
  marketing: 'marketing',
  bring_in: 'bring_in',
} as const;

/**
 * * `black` - Black
 * `gold` - Gold
 * `platinum` - Platinum
 */
export type LoyaltyStatusEnum = (typeof LoyaltyStatusEnum)[keyof typeof LoyaltyStatusEnum];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LoyaltyStatusEnum = {
  black: 'black',
  gold: 'gold',
  platinum: 'platinum',
} as const;

export interface LoyaltyHistory {
  datetime?: string;
  operation?: OperationEnum;
  total?: number;
  readonly user_id: number;
  value?: number;
}

export interface Loyalty {
  awaiting_balance?: number;
  balance?: number;
  remained?: number | null;
  status?: LoyaltyStatusEnum;
  readonly user_id: number;
}

export interface Login {
  code: string;
  phone: string;
}

export interface ListProducts {
  readonly colors_count: string;
  readonly images: string;
  readonly modification_id: string;
  readonly name: string;
  readonly old_price: string;
  readonly path: string;
  readonly price: string;
  readonly product_id: string;
  readonly slug: string;
}

export interface FilterProductModification {
  readonly breadcrumbs: string;
  readonly products: string;
}

export interface CreateOrder {
  address?: string | null;
  apartment_number?: number | null;
  code?: string | null;
  email: string;
  floor_number?: number | null;
  readonly id: number;
  intercom?: number | null;
  name: string;
  payment_type: PaymentTypeEnum;
  phone: string;
  receiving: ReceivingEnum;
  surname: string;
}

export interface Cart {
  readonly product: string;
  quantity?: number;
}

export interface Calculate {
  available_loyalty: number;
  price: number;
  products: ProductsCalculate[];
}

export interface AloneProductPath {
  readonly id: number;
  name: string;
  slug?: string;
}

export interface Address {
  address: string;
  price?: number;
  apartment_number?: number | null;
  code?: string | null;
  floor_number?: number | null;
  readonly id: number;
  intercom?: number | null;
  is_main?: boolean;
  type: string;
  readonly user_id: number;
}
