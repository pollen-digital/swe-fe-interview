import { Product } from "@/components/Product";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();
  console.log(products);

  return (
    <main className="grid grid-cols-3 items-center justify-between p-24 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </main>
  );
}

export interface ProductType {
  id: number;
  title: string;
  artist: string;
  label_no_country: string;
  big_img: string;
  slug: string;
}
const getProducts = async (): Promise<ProductType[]> => {
  const res = await fetch("https://apinew.soundshelter.net/explore/trending/0");
  const json = await res.json();

  return json.results.releases;
};
