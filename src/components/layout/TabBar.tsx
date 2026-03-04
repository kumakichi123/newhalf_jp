"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const tabs = [
    {
        href: "/",
        label: "ホーム",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
    {
        href: "/review",
        label: "レビュー",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h10M7 12h10M7 17h6" />
            </svg>
        ),
    },
    {
        href: "/actress",
        label: "女優",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
        ),
    },
    {
        href: "/genre",
        label: "ジャンル",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
        ),
    },
    {
        href: "/column",
        label: "まとめ",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
    },
];

export default function TabBar() {
    const pathname = usePathname();

    return (
        <nav className="tab-bar" aria-label="メインナビゲーション">
            {tabs.map((tab) => {
                const isActive = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
                return (
                    <Link key={tab.href} href={tab.href} className={`tab-bar-item ${isActive ? "active" : ""}`}>
                        {tab.icon}
                        <span>{tab.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
