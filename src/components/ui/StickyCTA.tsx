"use client";

import { useEffect, useState } from "react";

interface StickyCTAProps {
    href: string;
    label?: string;
    sublabel?: string;
}

export default function StickyCTA({
    href,
    label = "FANZAで今すぐ見る",
    sublabel = "無料サンプルあり・会員登録でさらにお得",
}: StickyCTAProps) {
    const [visible, setVisible] = useState(false);

    // スクロール後に表示
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!visible) return null;

    return (
        <div className="sticky-cta animate-fade-in">
            {sublabel && (
                <p style={{ textAlign: "center", fontSize: "0.72rem", color: "var(--color-text-muted)", marginBottom: "8px" }}>
                    ▼ {sublabel}
                </p>
            )}
            <a href={href} target="_blank" rel="noopener noreferrer nofollow" className="btn-cta">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {label}
            </a>
        </div>
    );
}
