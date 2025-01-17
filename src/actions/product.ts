"use server";
// Utilities
import { sleep } from "@/utils";
// Types
import type { Product } from "@/types/product";

const api_url = "https://fakestoreapi.com";

export async function getAllProducts(): Promise<Product[]> {
  // Simulate slow response
  await sleep(6000);
  const result = await fetch(`${api_url}/products`, { cache: "no-cache" });
  const response = await result.json();
  return response;
}
