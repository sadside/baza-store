export const convertTypeTwo = (type: string | undefined) => {
  switch (type) {
    case "street": {
      return "улицу";
    }
    case "city": {
      return "город";
    }
    case "house": {
      return "номер дома";
    }
    case "frame": {
      return "номер корпуса";
    }
    case "room": {
      return "номер квартиры";
    }
    default: {
      return undefined;
    }
  }
};