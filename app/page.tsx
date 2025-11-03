import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div id="navbar" className='w-full h-[70px] bg-amber-500 pl-10 flex items-center'>
      <h1 id="logo" className='text-4xl font-bold'>ig-ayush</h1>
    </div>
      <div className='w-full  flex flex-col justify-center items-center text-2xl p-5'>
          <h1>Hello coder</h1>
          <h2>Get started in Next.js</h2>
      </div>
    </>
  );
}
