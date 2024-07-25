"use client";

import { ProductType } from "@/app/page";
import Link from "next/link";
import { useState } from "react";

export const Product = ({ product }: { product: ProductType }) => {
  const [likes, setLikes] = useState(0);

  const onLikeClick = (e) => {
    e.preventDefault();
    setLikes(likes + 1);
  };

  return (
    <Link href={`/vinyl/${product.slug}`} className="hover:shadow-lg duration-150">
      <div className="flex flex-col gap-2 px-10 py-14 border-2 rounded-xl">
        <h1 className="text-2xl font-bold">{product.title}</h1>

        <img src={product.big_img} alt={`${product.artist}_${product.title}`} className="rounded-xl" />

        <h4>By: {product.artist}</h4>
        <h4>{product.label_no_country}</h4>

        <div>
          <button className="border bg-gray-400 px-4 py-2 rounded-md shadow-lg text-white" onClick={onLikeClick}>
            Like
          </button>
          <span>{likes}</span>
        </div>
      </div>
    </Link>
  );
};
