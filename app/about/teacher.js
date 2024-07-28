import Link from 'next/link';

export default function Teacher() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
      </nav>
      <h1>Teacher Page</h1>
    </div>
  );
}
