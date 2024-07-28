"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => setProduct(data))
        .catch((error) => setError(error));
    }
  }, [id]);

  if (error) {
    return (
      <div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
        </nav>
        <h1>An error occurred</h1>
        <p>Sorry, something went wrong: {error.message}</p>
      </div>
    );
  }

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
      </nav>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} width="200" />
      <p>Price: ${product.price}</p>
    </div>
  );
}
