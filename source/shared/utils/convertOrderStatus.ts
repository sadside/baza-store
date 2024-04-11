export const convertOrderStatus = (status: string) => {
  switch (status) {
    case "created":
      return "Создан";
    case "paid":
      return "Оплачен";
    case "in_delivery":
      return "В пути";
    case "delivered":
      return "Доставлен";
    case "received":
      return "Получен";
  }
};