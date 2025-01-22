"use client";

import Image from 'next/image';
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { Menu, Search,X } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-blue-800 py-4 shadow-md fixed top-0 left-0 w-full z-50">
            <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8">
                <div className="flex items-center">
                    <Image src={Logo} alt="Logo" width={150} height={50} />
                </div>
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/" className="text-white font-medium hover:text-gray-200 transition">
                        HOME
                    </Link>
                    <Link href="#" className="text-white font-medium hover:text-gray-200 transition">
                        QUEM SOMOS
                    </Link>
                    <Link href="#" className="text-white font-medium hover:text-gray-200 transition">
                        PRODUTOS
                    </Link>
                    <Link href="#" className="text-white font-medium hover:text-gray-200 transition">
                        BLOG
                    </Link>
                    <Link href="#" className="text-white font-medium hover:text-gray-200 transition">
                        FALE CONOSCO
                    </Link>
                    <Link href="/login" className="text-white font-medium hover:text-gray-200 transition">
                        LOGIN
                    </Link>
                </div>
                <div className="flex items-center gap-4 lg:gap-6">
                    <button className="text-white hover:text-gray-200 transition">
                        <Search size={24} />
                    </button>
                    <button
                        className="text-white lg:hidden focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <Menu size={32} />
                    </button>
                </div>
            </nav>

            {/* Menu mobile */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-blue-800 text-white shadow-lg lg:hidden">
                    <div className="flex flex-col items-center gap-6 p-6">
                    <button className="text-red-600 hover:text-red-700 transition" onClick={()=>setMenuOpen(false)}>
                        <X size={24} />
                    </button>
                        <Link href="#" className="font-medium hover:text-gray-200 transition">
                            HOME
                        </Link>
                        <Link href="#" className="font-medium hover:text-gray-200 transition">
                            QUEM SOMOS
                        </Link>
                        <Link href="#" className="font-medium hover:text-gray-200 transition">
                            PRODUTOS
                        </Link>
                        <Link href="#" className="font-medium hover:text-gray-200 transition">
                            BLOG
                        </Link>
                        <Link href="#" className="font-medium hover:text-gray-200 transition">
                            FALE CONOSCO
                        </Link>
                        <Link href="#" className="font-medium hover:text-gray-200 transition">
                            LOGIN
                        </Link>
                        <Link
                            href="#"
                            className="bg-green-500 text-white font-medium px-4 py-2 rounded-md hover:bg-green-600 transition"
                        >
                            QUERO REVENDEDOR
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
