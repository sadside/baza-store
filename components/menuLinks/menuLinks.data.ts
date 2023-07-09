export type Options = {
  categories?: boolean;
  products?: boolean;
};

export type LinkType = {
  title: string;
  link: string;
  options: Options;
};

export const links: LinkType[] = [
  {
    title: "Женщины",
    link: "zhenskoe",
    options: {
      categories: true,
    },
  },
  {
    title: "Мужчины",
    link: "muzhskoe",
    options: {
      categories: true,
    },
  },
  {
    title: "Дети",
    link: "kids",
    options: {
      categories: true,
    },
  },
  {
    title: "Доставка",
    link: "delivery",
    options: {
      categories: false,
    },
  },
  {
    title: "Программа лояльности",
    link: "loyalty",
    options: {
      categories: false,
    },
  },
];