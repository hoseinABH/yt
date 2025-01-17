// Common components
import { Card } from "@/components/card";
// Actions
import { getAllProducts } from "@/actions/product";

export default async function Home() {
  const products = await getAllProducts();
  return (
    <>
      {/* Static Content */}
      <div className="mb-6">
        <h3 className="text-3xl font-bold">Products</h3>
        <p className="text-slate-800 text-sm">lis of all products in stock</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Dynamic Content */}
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
