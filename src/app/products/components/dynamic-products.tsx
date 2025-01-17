// Common components
import { Card, CardSkeleton } from "@/components/card";
// Actions
import { getAllProducts } from "@/actions/product";

export async function DynamicProducts() {
  const products = await getAllProducts();
  return products.map((product) => <Card key={product.id} product={product} />);
}

export function ProductsFallback() {
  return Array.from(Array(12)).map((_, index) => <CardSkeleton key={index} />);
}
