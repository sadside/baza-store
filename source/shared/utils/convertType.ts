export const convertType = (type: string | undefined) => {
  switch (type) {
    case "name": {
      return "Имя";
    }
    case "surname": {
      return "Фамилия";
    }
    case "dateOfBth": {
      return "Дата рождения";
    }
    case "mail": {
      return "E-mail";
    }
    case "phoneNumber": {
      return "Телефон";
    }
    case "city": {
      return "Город";
    }
    case "street": {
      return "Улица";
    }
    case "house": {
      return "Дом";
    }
    case "frame": {
      return "Корпус";
    }
    case "room": {
      return "Квартира";
    }
  }
};