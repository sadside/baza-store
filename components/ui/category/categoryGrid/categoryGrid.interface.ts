export interface ICategoryGrid {
  firstColumnItems?: IColumnItem[];
  secondColumnItems?: IColumnItem[];
  thirdColumnItems?: IColumnItem[];
}

export interface IColumnItem {
  title: string;
  link: string;
  image: string;
}
