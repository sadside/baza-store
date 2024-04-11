/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * OpenAPI spec version: 0.0.0
 */
import type {
  Cart,
  ListProducts,
  Login,
  PaginatedListProductList,
  Payment,
  PhoneNumber,
  Product,
  ProductsFilterListParams,
  SchemaRetrieve200Four,
  SchemaRetrieve200One,
  SchemaRetrieve200Three,
  SchemaRetrieve200Two,
  SchemaRetrieveParams,
  UserDataSerialzier,
  ViewOrder
} from "./generated-api.schemas";
import type { BodyType } from "../http/custom-instance";
import { $api } from "../http/custom-instance";

// https://stackoverflow.com/questions/49579094/typescript-conditional-types-filter-out-readonly-properties-pick-only-requir/49579497#49579497
type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <
    T,
  >() => T extends Y ? 1 : 2
  ? A
  : B;

type WritableKeys<T> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    P
  >;
}[keyof T];

type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
type DistributeReadOnlyOverUnions<T> = T extends any ? NonReadonly<T> : never;

type Writable<T> = Pick<T, WritableKeys<T>>;
type NonReadonly<T> = [T] extends [UnionToIntersection<T>] ? {
  [P in keyof Writable<T>]: T[P] extends object
    ? NonReadonly<NonNullable<T[P]>>
    : T[P];
} : DistributeReadOnlyOverUnions<T>;


export const authLoginCreate = (
  login: BodyType<Login>
) => {
  return $api<Login>(
    {
      url: `/api/auth/login/`, method: "POST",
      headers: { "Content-Type": "application/json" },
      data: login
    }
  );
};

export const authLogoutRetrieve = () => {
  return $api<void>(
    {
      url: `/api/auth/logout/`, method: "GET"
    }
  );
};

export const authPhoneCodeRetrieve = () => {
  return $api<void>(
    {
      url: `/api/auth/phone-code/`, method: "GET"
    }
  );
};

export const authSendCodeCreate = (
  phoneNumber: BodyType<PhoneNumber>
) => {
  return $api<PhoneNumber>(
    {
      url: `/api/auth/send-code/`, method: "POST",
      headers: { "Content-Type": "application/json" },
      data: phoneNumber
    }
  );
};

export const ordersCalculateRetrieve = () => {
  return $api<void>(
    {
      url: `/api/orders/calculate/`, method: "GET"
    }
  );
};

export const ordersOrdersRetrieve = () => {
  return $api<ViewOrder>(
    {
      url: `/api/orders/orders/`, method: "GET"
    }
  );
};

export const ordersOrdersCreate = (
  viewOrder: BodyType<NonReadonly<ViewOrder>>
) => {
  return $api<ViewOrder>(
    {
      url: `/api/orders/orders/`, method: "POST",
      headers: { "Content-Type": "application/json" },
      data: viewOrder
    }
  );
};

export const ordersPaymentRetrieve = () => {
  return $api<Payment>(
    {
      url: `/api/orders/payment/`, method: "GET"
    }
  );
};

export const ordersPaymentStatusRetrieve = () => {
  return $api<Payment>(
    {
      url: `/api/orders/payment/status/`, method: "GET"
    }
  );
};

export const productsDetailRetrieve = (
  slug: string
) => {
  return $api<void>(
    {
      url: `/api/products/detail/${slug}/`, method: "GET"
    }
  );
};

export const productsFilterList = (
  params?: ProductsFilterListParams
) => {
  return $api<PaginatedListProductList>(
    {
      url: `/api/products/filter/`, method: "GET",
      params
    }
  );
};

export const productsPathRetrieve = () => {
  return $api<void>(
    {
      url: `/api/products/path/`, method: "GET"
    }
  );
};

export const productsProductRetrieve = (
  id: number
) => {
  return $api<Product>(
    {
      url: `/api/products/product/${id}/`, method: "GET"
    }
  );
};

export const productsProductsList = () => {
  return $api<ListProducts[]>(
    {
      url: `/api/products/products/`, method: "GET"
    }
  );
};

export const profileCartRetrieve = () => {
  return $api<Cart>(
    {
      url: `/api/profile/cart/`, method: "GET"
    }
  );
};

export const profileCartCreate = (
  cart: BodyType<NonReadonly<Cart>>
) => {
  return $api<Cart>(
    {
      url: `/api/profile/cart/`, method: "POST",
      headers: { "Content-Type": "application/json" },
      data: cart
    }
  );
};

export const profileCartDestroy = () => {
  return $api<void>(
    {
      url: `/api/profile/cart/`, method: "DELETE"
    }
  );
};

export const profileCartAddCreate = (
  cart: BodyType<NonReadonly<Cart>>
) => {
  return $api<Cart>(
    {
      url: `/api/profile/cart/add/`, method: "POST",
      headers: { "Content-Type": "application/json" },
      data: cart
    }
  );
};

export const profileCartClearRetrieve = () => {
  return $api<void>(
    {
      url: `/api/profile/cart/clear/`, method: "GET"
    }
  );
};

export const profileCartMaximizationRetrieve = () => {
  return $api<Cart>(
    {
      url: `/api/profile/cart/maximization/`, method: "GET"
    }
  );
};

export const profileCartRemoveCreate = (
  cart: BodyType<NonReadonly<Cart>>
) => {
  return $api<Cart>(
    {
      url: `/api/profile/cart/remove/`, method: "POST",
      headers: { "Content-Type": "application/json" },
      data: cart
    }
  );
};

export const profileFavoritesRetrieve = () => {
  return $api<void>(
    {
      url: `/api/profile/favorites/`, method: "GET"
    }
  );
};

export const profileFavoritesCreate = () => {
  return $api<void>(
    {
      url: `/api/profile/favorites/`, method: "POST"
    }
  );
};

export const profileFavoritesDestroy = () => {
  return $api<void>(
    {
      url: `/api/profile/favorites/`, method: "DELETE"
    }
  );
};

export const profileInfoRetrieve = () => {
  return $api<UserDataSerialzier>(
    {
      url: `/api/profile/info/`, method: "GET"
    }
  );
};

export const profileInfoCreate = (
  userDataSerialzier: BodyType<NonReadonly<UserDataSerialzier>>
) => {
  return $api<UserDataSerialzier>(
    {
      url: `/api/profile/info/`, method: "POST",
      headers: { "Content-Type": "application/json" },
      data: userDataSerialzier
    }
  );
};

export const profileSearchAddressRetrieve = () => {
  return $api<void>(
    {
      url: `/api/profile/search-address/`, method: "GET"
    }
  );
};

/**
 * OpenApi3 schema for this API. Format can be selected via content negotiation.

 - YAML: application/vnd.oai.openapi
 - JSON: application/vnd.oai.openapi+json
 */
export const schemaRetrieve = (
  params?: SchemaRetrieveParams
) => {
  return $api<SchemaRetrieve200One | SchemaRetrieve200Two | SchemaRetrieve200Three | SchemaRetrieve200Four>(
    {
      url: `/api/schema/`, method: "GET",
      params
    }
  );
};

export type AuthLoginCreateResult = NonNullable<Awaited<ReturnType<typeof authLoginCreate>>>
export type AuthLogoutRetrieveResult = NonNullable<Awaited<ReturnType<typeof authLogoutRetrieve>>>
export type AuthPhoneCodeRetrieveResult = NonNullable<Awaited<ReturnType<typeof authPhoneCodeRetrieve>>>
export type AuthSendCodeCreateResult = NonNullable<Awaited<ReturnType<typeof authSendCodeCreate>>>
export type OrdersCalculateRetrieveResult = NonNullable<Awaited<ReturnType<typeof ordersCalculateRetrieve>>>
export type OrdersOrdersRetrieveResult = NonNullable<Awaited<ReturnType<typeof ordersOrdersRetrieve>>>
export type OrdersOrdersCreateResult = NonNullable<Awaited<ReturnType<typeof ordersOrdersCreate>>>
export type OrdersPaymentRetrieveResult = NonNullable<Awaited<ReturnType<typeof ordersPaymentRetrieve>>>
export type OrdersPaymentStatusRetrieveResult = NonNullable<Awaited<ReturnType<typeof ordersPaymentStatusRetrieve>>>
export type ProductsDetailRetrieveResult = NonNullable<Awaited<ReturnType<typeof productsDetailRetrieve>>>
export type ProductsFilterListResult = NonNullable<Awaited<ReturnType<typeof productsFilterList>>>
export type ProductsPathRetrieveResult = NonNullable<Awaited<ReturnType<typeof productsPathRetrieve>>>
export type ProductsProductRetrieveResult = NonNullable<Awaited<ReturnType<typeof productsProductRetrieve>>>
export type ProductsProductsListResult = NonNullable<Awaited<ReturnType<typeof productsProductsList>>>
export type ProfileCartRetrieveResult = NonNullable<Awaited<ReturnType<typeof profileCartRetrieve>>>
export type ProfileCartCreateResult = NonNullable<Awaited<ReturnType<typeof profileCartCreate>>>
export type ProfileCartDestroyResult = NonNullable<Awaited<ReturnType<typeof profileCartDestroy>>>
export type ProfileCartAddCreateResult = NonNullable<Awaited<ReturnType<typeof profileCartAddCreate>>>
export type ProfileCartClearRetrieveResult = NonNullable<Awaited<ReturnType<typeof profileCartClearRetrieve>>>
export type ProfileCartMaximizationRetrieveResult = NonNullable<Awaited<ReturnType<typeof profileCartMaximizationRetrieve>>>
export type ProfileCartRemoveCreateResult = NonNullable<Awaited<ReturnType<typeof profileCartRemoveCreate>>>
export type ProfileFavoritesRetrieveResult = NonNullable<Awaited<ReturnType<typeof profileFavoritesRetrieve>>>
export type ProfileFavoritesCreateResult = NonNullable<Awaited<ReturnType<typeof profileFavoritesCreate>>>
export type ProfileFavoritesDestroyResult = NonNullable<Awaited<ReturnType<typeof profileFavoritesDestroy>>>
export type ProfileInfoRetrieveResult = NonNullable<Awaited<ReturnType<typeof profileInfoRetrieve>>>
export type ProfileInfoCreateResult = NonNullable<Awaited<ReturnType<typeof profileInfoCreate>>>
export type ProfileSearchAddressRetrieveResult = NonNullable<Awaited<ReturnType<typeof profileSearchAddressRetrieve>>>
export type SchemaRetrieveResult = NonNullable<Awaited<ReturnType<typeof schemaRetrieve>>>
