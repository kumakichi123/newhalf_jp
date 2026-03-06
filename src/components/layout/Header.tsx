"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "ニューハーフJP";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            // Only apply hide logic on mobile/tablets (< 768px)
            if (window.innerWidth >= 768) {
                setIsVisible(true);
                return;
            }

            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 80,
                background: "rgba(13,13,15,0.92)",
                backdropFilter: "blur(16px)",
                borderBottom: "1px solid var(--color-border)",
                transform: isVisible ? "translateY(0)" : "translateY(-100%)",
                transition: "transform 0.3s ease-in-out",
            }}
        >


            <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "52px" }}>
                {/* Logo */}
                <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={30}
                        height={30}
                        style={{ objectFit: "contain" }}
                        priority
                    />
                    <span style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.02em" }}>
                        {siteName}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav
                    style={{ display: "flex", gap: "24px", alignItems: "center" }}
                    className="hidden-mobile"
                >
                    <Link href="/review" style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>レビュー</Link>
                    <Link href="/actress" style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>女優</Link>
                    <Link href="/genre" style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>ジャンル</Link>
                    <Link href="/column" style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>コラム</Link>
                </nav>

                {/* Search icon placeholder */}
                <button aria-label="検索" style={{ color: "var(--color-text-secondary)", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
