/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * OpenAPI spec version: 0.0.0
 */
import type {
  Address,
  Calculate,
  Cart,
  CreateOrder,
  FilterProductModification,
  ListProducts,
  Login,
  Loyalty,
  LoyaltyHistory,
  OrdersPaymentRetrieveParams,
  PatchedAddress,
  Payment,
  PhoneNumber,
  Product,
  ProductPath,
  SchemaRetrieve200Four,
  SchemaRetrieve200One,
  SchemaRetrieve200Three,
  SchemaRetrieve200Two,
  SchemaRetrieveParams,
  UserDataSerialzier,
  ViewOrder,
} from './generated-api.schemas';
import { $apiWithGuard } from '../http/axios-instance';
import type { BodyType } from '../http/axios-instance';

// https://stackoverflow.com/questions/49579094/typescript-conditional-types-filter-out-readonly-properties-pick-only-requir/49579497#49579497
type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;

type WritableKeys<T> = {
  [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P>;
}[keyof T];

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
type DistributeReadOnlyOverUnions<T> = T extends any ? NonReadonly<T> : never;

type Writable<T> = Pick<T, WritableKeys<T>>;
type NonReadonly<T> = [T] extends [UnionToIntersection<T>]
  ? {
      [P in keyof Writable<T>]: T[P] extends object ? NonReadonly<NonNullable<T[P]>> : T[P];
    }
  : DistributeReadOnlyOverUnions<T>;

export const authLoginCreate = (login: BodyType<Login>) => {
  return $apiWithGuard<Login>({
    url: `/auth/login/`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: login,
  });
};

export const authLogoutCreate = () => {
  return $apiWithGuard<void>({ url: `/auth/logout/`, method: 'POST' });
};

export const authPhoneCodeRetrieve = () => {
  return $apiWithGuard<void>({ url: `/auth/phone-code/`, method: 'GET' });
};

export const authSendCodeCreate = (phoneNumber: BodyType<PhoneNumber>) => {
  return $apiWithGuard<PhoneNumber>({
    url: `/auth/send-code/`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: phoneNumber,
  });
};

/**
 * @summary Предподсчет корзины
 */
export const ordersCalculateRetrieve = () => {
  return $apiWithGuard<Calculate>({ url: `/orders/calculate/`, method: 'GET' });
};

/**
 * @summary Просмотр всех заказов
 */
export const ordersOrdersList = () => {
  return $apiWithGuard<ViewOrder[]>({ url: `/orders/orders/`, method: 'GET' });
};

/**
 * @summary Создание заказа
 */
export const ordersOrdersCreate = (createOrder: BodyType<NonReadonly<CreateOrder>>) => {
  return $apiWithGuard<ViewOrder>({
    url: `/orders/orders/`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: createOrder,
  });
};

export const ordersOrdersCancelRetrieve = () => {
  return $apiWithGuard<void>({ url: `/orders/orders/cancel/`, method: 'GET' });
};

/**
 * @summary Предподсчет корзины
 */
export const ordersPaymentRetrieve = (params?: OrdersPaymentRetrieveParams) => {
  return $apiWithGuard<Payment>({ url: `/orders/payment/`, method: 'GET', params });
};

export const ordersPaymentResponseFailRetrieve = (paymentId: number) => {
  return $apiWithGuard<Payment>({ url: `/orders/payment/response/fail/${paymentId}`, method: 'GET' });
};

export const ordersPaymentResponseSuccessRetrieve = (paymentId: number) => {
  return $apiWithGuard<Payment>({ url: `/orders/payment/response/success/${paymentId}`, method: 'GET' });
};

export const ordersPaymentStatusRetrieve = () => {
  return $apiWithGuard<Payment>({ url: `/orders/payment/status/`, method: 'GET' });
};

export const productsDetailRetrieve = (slug: string) => {
  return $apiWithGuard<void>({ url: `/products/detail/${slug}/`, method: 'GET' });
};

export const productsFilterRetrieve = () => {
  return $apiWithGuard<FilterProductModification>({ url: `/products/filter/`, method: 'GET' });
};

export const productsPathList = () => {
  return $apiWithGuard<ProductPath[]>({ url: `/products/path/`, method: 'GET' });
};

export const productsProductRetrieve = (id: number) => {
  return $apiWithGuard<Product>({ url: `/products/product/${id}/`, method: 'GET' });
};

export const productsProductsList = () => {
  return $apiWithGuard<ListProducts[]>({ url: `/products/products/`, method: 'GET' });
};

/**
 * Адресы пользователя.

Добавление и получение списка адресов пользователя, доступно только для
текущего пользователю.
 */
export const profileAddressList = () => {
  return $apiWithGuard<Address[]>({ url: `/profile/address/`, method: 'GET' });
};

/**
 * Адресы пользователя.

Добавление и получение списка адресов пользователя, доступно только для
текущего пользователю.
 */
export const profileAddressCreate = (address: BodyType<NonReadonly<Address>>) => {
  return $apiWithGuard<Address>({
    url: `/profile/address/`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: address,
  });
};

/**
 * Адрес пользователя.

Обновление и удаление адреса, доступно только для адреса, принадлежащего
текущему пользователю.
 */
export const profileAddressRetrieve = (id: number) => {
  return $apiWithGuard<Address>({ url: `/profile/address/${id}/`, method: 'GET' });
};

/**
 * Адрес пользователя.

Обновление и удаление адреса, доступно только для адреса, принадлежащего
текущему пользователю.
 */
export const profileAddressUpdate = (id: number, address: BodyType<NonReadonly<Address>>) => {
  return $apiWithGuard<Address>({
    url: `/profile/address/${id}/`,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    data: address,
  });
};

/**
 * Адрес пользователя.

Обновление и удаление адреса, доступно только для адреса, принадлежащего
текущему пользователю.
 */
export const profileAddressPartialUpdate = (id: number, patchedAddress: BodyType<NonReadonly<PatchedAddress>>) => {
  return $apiWithGuard<Address>({
    url: `/profile/address/${id}/`,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    data: patchedAddress,
  });
};

/**
 * Адрес пользователя.

Обновление и удаление адреса, доступно только для адреса, принадлежащего
текущему пользователю.
 */
export const profileAddressDestroy = (id: number) => {
  return $apiWithGuard<void>({ url: `/profile/address/${id}/`, method: 'DELETE' });
};

export const profileAddressSearchRetrieve = () => {
  return $apiWithGuard<void>({ url: `/profile/address/search/`, method: 'GET' });
};

export const profileCartRetrieve = () => {
  return $apiWithGuard<Cart>({ url: `/profile/cart/`, method: 'GET' });
};

export const profileCartCreate = (cart: BodyType<NonReadonly<Cart>>) => {
  return $apiWithGuard<Cart>({
    url: `/profile/cart/`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: cart,
  });
};

export const profileCartDestroy = () => {
  return $apiWithGuard<void>({ url: `/profile/cart/`, method: 'DELETE' });
};

export const profileCartAddCreate = (cart: BodyType<NonReadonly<Cart>>) => {
  return $apiWithGuard<Cart>({
    url: `/profile/cart/add/`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: cart,
  });
};

export const profileCartClearRetrieve = () => {
  return $apiWithGuard<void>({ url: `/profile/cart/clear/`, method: 'GET' });
};

export const profileCartMaximizationRetrieve = () => {
  return $apiWithGuard<Cart>({ url: `/profile/cart/maximization/`, method: 'GET' });
};

export const profileCartRemoveCreate = (cart: BodyType<NonReadonly<Cart>>) => {
  return $apiWithGuard<Cart>({
    url: `/profile/cart/remove/`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: cart,
  });
};

export const profileFavoritesRetrieve = () => {
  return $apiWithGuard<void>({ url: `/profile/favorites/`, method: 'GET' });
};

export const profileFavoritesCreate = () => {
  return $apiWithGuard<void>({ url: `/profile/favorites/`, method: 'POST' });
};

export const profileFavoritesDestroy = () => {
  return $apiWithGuard<void>({ url: `/profile/favorites/`, method: 'DELETE' });
};

export const profileInfoRetrieve = () => {
  return $apiWithGuard<UserDataSerialzier>({ url: `/profile/info/`, method: 'GET' });
};

export const profileInfoCreate = (userDataSerialzier: BodyType<NonReadonly<UserDataSerialzier>>) => {
  return $apiWithGuard<UserDataSerialzier>({
    url: `/profile/info/`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: userDataSerialzier,
  });
};

export const profileLoyaltyRetrieve = () => {
  return $apiWithGuard<Loyalty>({ url: `/profile/loyalty/`, method: 'GET' });
};

export const profileLoyaltyDestroy = () => {
  return $apiWithGuard<void>({ url: `/profile/loyalty/`, method: 'DELETE' });
};

export const profileLoyaltyFakerCreate = () => {
  return $apiWithGuard<void>({ url: `/profile/loyalty/faker/`, method: 'POST' });
};

export const profileLoyaltyHistoryList = () => {
  return $apiWithGuard<LoyaltyHistory[]>({ url: `/profile/loyalty/history/`, method: 'GET' });
};

/**
 * OpenApi3 schema for this API. Format can be selected via content negotiation.

- YAML: application/vnd.oai.openapi
- JSON: application/vnd.oai.openapi+json
 */
export const schemaRetrieve = (params?: SchemaRetrieveParams) => {
  return $apiWithGuard<SchemaRetrieve200One | SchemaRetrieve200Two | SchemaRetrieve200Three | SchemaRetrieve200Four>({
    url: `/schema/`,
    method: 'GET',
    params,
  });
};

export type AuthLoginCreateResult = NonNullable<Awaited<ReturnType<typeof authLoginCreate>>>;
export type AuthLogoutCreateResult = NonNullable<Awaited<ReturnType<typeof authLogoutCreate>>>;
export type AuthPhoneCodeRetrieveResult = NonNullable<Awaited<ReturnType<typeof authPhoneCodeRetrieve>>>;
export type AuthSendCodeCreateResult = NonNullable<Awaited<ReturnType<typeof authSendCodeCreate>>>;
export type OrdersCalculateRetrieveResult = NonNullable<Awaited<ReturnType<typeof ordersCalculateRetrieve>>>;
export type OrdersOrdersListResult = NonNullable<Awaited<ReturnType<typeof ordersOrdersList>>>;
export type OrdersOrdersCreateResult = NonNullable<Awaited<ReturnType<typeof ordersOrdersCreate>>>;
export type OrdersOrdersCancelRetrieveResult = NonNullable<Awaited<ReturnType<typeof ordersOrdersCancelRetrieve>>>;
export type OrdersPaymentRetrieveResult = NonNullable<Awaited<ReturnType<typeof ordersPaymentRetrieve>>>;
export type OrdersPaymentResponseFailRetrieveResult = NonNullable<
  Awaited<ReturnType<typeof ordersPaymentResponseFailRetrieve>>
>;
export type OrdersPaymentResponseSuccessRetrieveResult = NonNullable<
  Awaited<ReturnType<typeof ordersPaymentResponseSuccessRetrieve>>
>;
export type OrdersPaymentStatusRetrieveResult = NonNullable<Awaited<ReturnType<typeof ordersPaymentStatusRetrieve>>>;
export type ProductsDetailRetrieveResult = NonNullable<Awaited<ReturnType<typeof productsDetailRetrieve>>>;
export type ProductsFilterRetrieveResult = NonNullable<Awaited<ReturnType<typeof productsFilterRetrieve>>>;
export type ProductsPathListResult = NonNullable<Awaited<ReturnType<typeof productsPathList>>>;
export type ProductsProductRetrieveResult = NonNullable<Awaited<ReturnType<typeof productsProductRetrieve>>>;
export type ProductsProductsListResult = NonNullable<Awaited<ReturnType<typeof productsProductsList>>>;
export type ProfileAddressListResult = NonNullable<Awaited<ReturnType<typeof profileAddressList>>>;
export type ProfileAddressCreateResult = NonNullable<Awaited<ReturnType<typeof profileAddressCreate>>>;
export type ProfileAddressRetrieveResult = NonNullable<Awaited<ReturnType<typeof profileAddressRetrieve>>>;
export type ProfileAddressUpdateResult = NonNullable<Awaited<ReturnType<typeof profileAddressUpdate>>>;
export type ProfileAddressPartialUpdateResult = NonNullable<Awaited<ReturnType<typeof profileAddressPartialUpdate>>>;
export type ProfileAddressDestroyResult = NonNullable<Awaited<ReturnType<typeof profileAddressDestroy>>>;
export type ProfileAddressSearchRetrieveResult = NonNullable<Awaited<ReturnType<typeof profileAddressSearchRetrieve>>>;
export type ProfileCartRetrieveResult = NonNullable<Awaited<ReturnType<typeof profileCartRetrieve>>>;
export type ProfileCartCreateResult = NonNullable<Awaited<ReturnType<typeof profileCartCreate>>>;
export type ProfileCartDestroyResult = NonNullable<Awaited<ReturnType<typeof profileCartDestroy>>>;
export type ProfileCartAddCreateResult = NonNullable<Awaited<ReturnType<typeof profileCartAddCreate>>>;
export type ProfileCartClearRetrieveResult = NonNullable<Awaited<ReturnType<typeof profileCartClearRetrieve>>>;
export type ProfileCartMaximizationRetrieveResult = NonNullable<
  Awaited<ReturnType<typeof profileCartMaximizationRetrieve>>
>;
export type ProfileCartRemoveCreateResult = NonNullable<Awaited<ReturnType<typeof profileCartRemoveCreate>>>;
export type ProfileFavoritesRetrieveResult = NonNullable<Awaited<ReturnType<typeof profileFavoritesRetrieve>>>;
export type ProfileFavoritesCreateResult = NonNullable<Awaited<ReturnType<typeof profileFavoritesCreate>>>;
export type ProfileFavoritesDestroyResult = NonNullable<Awaited<ReturnType<typeof profileFavoritesDestroy>>>;
export type ProfileInfoRetrieveResult = NonNullable<Awaited<ReturnType<typeof profileInfoRetrieve>>>;
export type ProfileInfoCreateResult = NonNullable<Awaited<ReturnType<typeof profileInfoCreate>>>;
export type ProfileLoyaltyRetrieveResult = NonNullable<Awaited<ReturnType<typeof profileLoyaltyRetrieve>>>;
export type ProfileLoyaltyDestroyResult = NonNullable<Awaited<ReturnType<typeof profileLoyaltyDestroy>>>;
export type ProfileLoyaltyFakerCreateResult = NonNullable<Awaited<ReturnType<typeof profileLoyaltyFakerCreate>>>;
export type ProfileLoyaltyHistoryListResult = NonNullable<Awaited<ReturnType<typeof profileLoyaltyHistoryList>>>;
export type SchemaRetrieveResult = NonNullable<Awaited<ReturnType<typeof schemaRetrieve>>>;
