"use client";
import { Home, Menu, X } from "lucide-react";
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const navigation = [
	{ name: "Preloader", href: "/boot"},
	{ name: "Projects", href: "/projects"},
	{ name: "Contact", href: "/contact"},
];

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [isMobile, setIsMobile] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeTab, setActiveTab] = useState<string | null>(null);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleTabClick = (href: string) => {
		if (href === activeTab) {
				setIsMenuOpen(false); 
		}
		setActiveTab(href);
	};

	return (
    <header ref={ref}>
      {isMenuOpen && <div className="fixed inset-0 backdrop-blur-xl z-40"></div>}
      <div
        className={`fixed inset-x-0 top-0 backdrop-blur z-50 border-b ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800"
        }`}
      >
        <div className="container flex items-center justify-between p-6 mx-auto text-xl relative">
          {isMobile ? (
            <>
              <button 
                className="text-zinc-300 hover:text-zinc-100 z-50"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X onClick={toggleMenu}/> : <Menu onClick={toggleMenu}/>}
              </button>
              <div className="relative">
                {isMenuOpen && (
                  <div className="absolute top-20 inset-0 flex justify-center items-center z-40">
                    <div className="flex flex-col items-center gap-4 bg-zinc-900/500 p-4">
                      {navigation.map((item, index) => (
                        <React.Fragment key={item.href}>
                          <Link
                            href={item.href}
                            className={`text-zinc-400 hover:text-zinc-100 ${activeTab === item.href ? 'font-bold' : ''}`}
                            onClick={() => handleTabClick(item.href)}
                          >
                            {item.name}
                          </Link>
                          {index !== navigation.length - 1 && (
                            <div className="h-px w-full bg-zinc-600"/>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex justify-between gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-zinc-400 hover:text-zinc-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
          <Link
            href="/"
            className="text-zinc-300 hover:text-zinc-100 z-50"
          >
            <Home/>
          </Link>
        </div>
      </div>
    </header>
  );
};