import '@/source/shared/styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';
import '@/source/shared/styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { Layout } from '@app/ui/layout';
import '@shared/styles/globals.scss';
import { Toaster } from '@shared/ui/shadcn/ui/sonner';

export const metadata = {
  title: 'BAZA',
  manifest: '/manifest.json',
  themeColor: '#ffffff',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <link rel="manifest" href="https://progressier.app/oArYkg1IG28DPvIUlFmQ/progressier.json" />
      <script defer src="https://progressier.app/oArYkg1IG28DPvIUlFmQ/script.js"></script>
      <body>
        <Toaster />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
