import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
      </nav>
      <h1>Home Page</h1>
    </div>
  );
}
