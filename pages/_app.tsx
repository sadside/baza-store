import "@/styles/globals.scss";
import Layout from "@/components/ui/layout/Layout";
import type { AppProps } from "next/app";
// import { MenuService } from "@/services/menu/menu.servive";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
