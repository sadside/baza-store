import { ItemOrderLk } from "@/source/features/lk-actual-info/ui/LkActualInfo";
import { formatManyofFull } from "@shared/utils/formatMany";


export const getLkOrderPrice = (arr: ItemOrderLk[]) => {
  let price = 0;
  arr.forEach(o => price += o.price * o.count);
  return formatManyofFull(price) + "₽";
};