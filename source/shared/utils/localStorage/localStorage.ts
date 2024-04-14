"use client";

import { IProduct } from "@/components/productItem/productItem.interface";
import { IProductCart } from "@/stores/cart/cart.interface";


export const addProductToStorage = (products: IProductCart[]) => {
  const newProducts = JSON.stringify(products);

  localStorage.setItem("products", newProducts);
};

export const addFavotitesToStorage = (favorites: IProductCart[]) => {
  const newFavorites = JSON.stringify(favorites);

  localStorage.setItem("favorites", newFavorites);
};

export const removeProductFromStorage = (id: number) => {
  const products = localStorage.getItem("cart");

  if (products?.length) {
    let newProducts: IProduct[] = JSON.parse(products);

    newProducts = newProducts.filter(product => product.id !== id);
    localStorage.setItem("products", JSON.stringify(newProducts));
  } else {
    return false;
  }
};

export const getProductsFromStorage = () => {
  const products = localStorage.getItem("products");
  //@ts-ignore
  return JSON.parse(products) || [];
};