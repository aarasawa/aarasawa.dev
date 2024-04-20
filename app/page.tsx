import React from 'react';
import Link from 'next/link';

const navigation = [
  { name: "Projects", href:"/projects"},
  { name: "Contact", href:"/contact"},
];

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-screen h-screen overflow-hidden">
      <div className="bg-black">

        <h1 className="text-center mt-5 bg-white cursor-default font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl bg-clip-text">
            Alexander Arasawa
        </h1>
        
        <nav className="my-3">
          <ul className="flex items-center justify-center gap-4 text-2xl">

            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-m text-zinc-500 hover:text-white"
              >
                {item.name}
              </Link>
            ))}

          </ul>
        </nav>
      </div>
    </div>
  )
}
