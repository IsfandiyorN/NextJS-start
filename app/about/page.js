import Link from 'next/link';

export default function About() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
      </nav>
      <h1 className=''>About Page</h1>
      <div className='ml-10'>
      <div><Link href="/about/teacher">Teacher</Link></div>
      <Link href="/about/student">Student</Link>
      </div>
    </div>
  );
}
