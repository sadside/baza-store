import '@/source/shared/styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import { API_URL } from '@/source/shared/api/http/custom-instance';
import '@shared/styles/globals.scss';
import { Layout } from '@/source/layouts/product-layout';
import { Toaster } from '@shared/ui/shadcn/ui/sonner';

export const metadata = {
  title: 'BAZA',
  manifest: '/manifest.json',
  themeColor: '#ffffff',
};

const getData = async () => {
  const res = await fetch(`${API_URL}products/path/`, {
    cache: 'no-store',
  });

  const links = await res.json();

  if (!res.ok) throw new Error('error');

  return links;
};

export default async function ProductLayout({ children }: { children: React.ReactNode }) {
  const links = await getData();

  return (
    <section>
      <Layout links={links}>{children}</Layout>
    </section>
  );
}
