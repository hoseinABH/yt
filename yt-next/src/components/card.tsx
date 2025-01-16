import Image from "next/image";
import Link from "next/link";
// Types
import type { Product } from "@/types/product";

interface CardProps {
  product: Product;
}

export function Card({ product }: CardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="min-w-64 p-6 group flex flex-col gap-3 justify-between rounded-md border"
    >
      <Image
        className="group-hover:scale-90 transition-all"
        src={product.image}
        width={256}
        height={200}
        alt={product.title}
      />
      <h4 className="group-hover:text-lime-600 transition-all">
        {product.title}
      </h4>
    </Link>
  );
}
export function CardSkeleton() {
  return (
    <div className="min-w-64 p-6 flex flex-col gap-3 justify-between rounded-md border animate-pulse">
      <div className="w-full h-48 bg-gray-200"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
}
