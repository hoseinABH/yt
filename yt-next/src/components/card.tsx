interface CardProps {
  title: string;
  description: string;
  image: string;
}

export function Card({}: CardProps) {
  return <div className="min-w-64 p-6 rounded-md border"></div>;
}
