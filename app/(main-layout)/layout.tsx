import '@/source/shared/styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import { API_URL } from '@/source/shared/api/http/custom-instance';
import { Layout } from '@/source/layouts/main-layout';
import '@shared/styles/globals.scss';

export const metadata = {
<<<<<<< HEAD
  title: 'BAZA',
  manifest: '/manifest.json',
  themeColor: '#ffffff',
=======
  title: "BAZA",
  manifest: "/manifest.json",
  themeColor: "#ffffff"
>>>>>>> main
};

const getData = async () => {
  const res = await fetch(`${API_URL}products/path/`, {
<<<<<<< HEAD
    cache: 'no-store',
=======
    cache: "no-store"
>>>>>>> main
  });

  const links = await res.json();

  if (!res.ok) throw new Error('error');

  return links;
};

<<<<<<< HEAD
export default async function MainLayout({ children }: { children: React.ReactNode }) {
=======
export default async function MainLayout({
                                           children
                                         }: {
  children: React.ReactNode;
}) {
>>>>>>> main
  const links = await getData();

  return (
    <section>
      <ToastContainer pauseOnHover={false} />
      <Layout links={links}>{children}</Layout>
    </section>
  );
}
