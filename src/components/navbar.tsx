"use client"; // Cần thiết để sử dụng useState cho menu mobile

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Danh sách các link để code gọn hơn
  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Dự án", href: "/projects" },
    { name: "Liên hệ", href: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Tên của bạn */}
          <Link
            href="/"
            className="text-xl font-bold text-emerald-600 dark:text-emerald-400 tracking-tighter"
          >
            Đào Hoàng Quỳnh Như
          </Link>

          {/* Menu cho máy tính (Desktop) */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Nút Hamburger cho điện thoại (Mobile) */}
          <button
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu xổ xuống khi ở màn hình nhỏ (Mobile Menu) */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-100 dark:border-gray-800 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)} // Đóng menu sau khi click
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
