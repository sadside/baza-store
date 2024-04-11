// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { products } from "./[id]/route";
import { NextResponse } from "next/server";


export async function GET() {
  return NextResponse.json(products);
}