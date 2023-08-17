// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IProduct } from '@/components/productItem/productItem.interface'
import type { NextApiRequest, NextApiResponse } from 'next'
import { products } from './[id]/route'
import { NextResponse } from 'next/server';


export async function GET() {
  return NextResponse.json(products);
}