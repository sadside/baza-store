import { IFullProduct } from '@shared/types/models/Product';
import { ProductPage } from '@pages/product';
import { redirect } from 'next/navigation';
import CategoriesService from '@/services/CategoriesService';

type params = {
  params: {
    slug: string;
  };
};

async function getProducts(category: string) {
  const response = await CategoriesService.getProductsByCategory(category);

  if (!response.ok) {
    throw new Error(`На сервере произошла ошибка. Попробуйте позже.`);
  }

  const products = await response.json();

  return products;
}

export default async function ({ params: { slug } }: params) {
  const product = await getProducts(slug);

  return <div>{slug}</div>;
}
