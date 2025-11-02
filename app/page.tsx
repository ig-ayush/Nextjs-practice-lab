import Link from 'next/link'

export default function Home() {
  return (
    <div className="container flex items-center flex-col">
      <h1 className="text-2xl">Hello coders</h1>
      <h2>Lets learn Next.jS</h2>
      <Link href="/user">user page</Link>
    </div>
  );
}
