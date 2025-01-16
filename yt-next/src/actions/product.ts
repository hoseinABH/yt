"use server";

import { Product } from "@/types/product";

const api_url = "https://fakestoreapi.com";

export async function getAllProducts(): Promise<Product[]> {
  const result = await fetch(`${api_url}/products`);
  const response = await result.json();
  return response;
}
