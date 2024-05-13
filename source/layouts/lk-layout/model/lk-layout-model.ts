import { sample } from "effector";
import { redirectFx } from "@shared/lib/utils/helpers/router-instance";
import { $user, getUserFx, getUserFxStatus, logoutFx } from "@entities/user/model/user-model";
import { createGate } from "effector-react";
import { invoke } from "@withease/factories";
import { createSelect } from "@/source/features/add-address-cdek/ui/select/model/select-model";

export const lkGate = createGate();

sample({
  clock: getUserFx.done,
  source: {
    user: $user,
    opened: lkGate.status
  },
  filter: ({ user, opened }) => !user && Boolean(opened),
  fn: () => "/",
  target: redirectFx
});

sample({
  clock: logoutFx.doneData,
  fn: () => "/",
  target: redirectFx
});


type LkTypes = {
  name: string;
  value: string;
  btn?: boolean
};

const selectItems: LkTypes[] = [
  { name: "Личный кабинет", value: "/lk" },
  { name: "избранное", value: "/lk/favourite" },
  { name: "Заказы", value: "/lk/orders" },
  { name: "LOYALTY", value: "/lk/baza-loyalty" },
  { name: "профиль", value: "/lk/profile" },
  { name: "адреса", value: "/lk/addresses" },
  { name: "Выход", value: "", btn: true }
];

export const lkTypeSelect = invoke(createSelect<LkTypes, "name">, {
  renderField: "name",
  items: selectItems
});
