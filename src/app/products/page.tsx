import { Suspense } from "react";
// Common components
import {
  DynamicProducts,
  ProductsFallback,
} from "./components/dynamic-products";

export const experimental_ppr = true;

export default async function Products() {
  return (
    <>
      {/* Static Content */}
      <div className="mb-6">
        <h3 className="text-3xl font-bold">Products</h3>
        <p className="text-slate-800 text-sm">list of all products in stock</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Dynamic Content */}
        <Suspense fallback={<ProductsFallback />}>
          <DynamicProducts />
        </Suspense>
      </div>
    </>
  );
}
