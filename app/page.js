import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">
        This is me linking to the about page
      </Link>
    </div>
  );
}
