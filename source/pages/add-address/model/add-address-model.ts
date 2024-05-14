import { invoke } from "@withease/factories";
import { createSelect } from "@/source/features/add-address-cdek/ui/select/model/select-model";

type AddressTypes = {
  type: string;
  label: string;
};

const selectItems: AddressTypes[] = [
  {
    type: "cdek",
    label: "В пункте ПВЗ СДЕК"
  },
  {
    type: "personal",
    label: "Курьером"
  }
];

export const deliveryTypeSelect = invoke(createSelect<AddressTypes, "label">, {
  renderField: "label",
  items: selectItems
});
