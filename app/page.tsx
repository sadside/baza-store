import React from 'react';
import { API_URL } from '@shared/api/http/axios-instance';
import { HomePage } from '@/source/pages/home';

export interface Category {
  id: number;
  name: string;
  slug: string;
  children: Category[];
}

type ReturnT = {
  links: Category[];
  video: Blob;
};

const getOverlayLinks = async (): Promise<ReturnT> => {
  const res = await fetch(`${API_URL}products/path/`, {
    cache: 'no-store',
  });

  const video = await fetch(`https://thebaza.ru/service/videostreaming/blob/`, {
    cache: 'no-store',
  });

  const blob = await video.blob();
  const links = (await res.json()) as Category[];

  if (!res.ok) throw new Error('error');

  return {
    links,
    video: blob,
  };
};

export default async function Home() {
  const { links, video } = await getOverlayLinks();

  const src = URL.createObjectURL(video);

  return <HomePage links={links} src={src} />;
}
