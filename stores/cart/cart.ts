import { sample } from "effector";
import { IProductCart } from "./cart.interface";
import { createListWithNewProduct } from "./cart.helper";
import { pageMounted, $cart, productAddedToCart, addToStorageFx, mouseEnteredToCart, $showCart, mouseLeavedFromCart } from "./init";

interface addToStorageFxProps {
  products: IProductCart[],
}

sample({
  clock: pageMounted,
  fn: () => (JSON.parse(localStorage.getItem('products') || '[]')),
  target: $cart
})
 
sample({ 
  clock: productAddedToCart,
  source: $cart,
  fn: createListWithNewProduct,
  target: [addToStorageFx, $cart]
})

$showCart.watch(state => console.log(state))