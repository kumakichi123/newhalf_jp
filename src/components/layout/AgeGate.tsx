"use client";

import { useEffect, useState } from "react";

const AGE_GATE_KEY = "nh_age_confirmed";

export default function AgeGate() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const confirmed = sessionStorage.getItem(AGE_GATE_KEY);
        if (!confirmed) setVisible(true);
    }, []);

    const handleConfirm = () => {
        sessionStorage.setItem(AGE_GATE_KEY, "1");
        setVisible(false);
    };

    const handleDeny = () => {
        window.location.href = "https://www.google.com";
    };

    if (!visible) return null;

    return (
        <div className="age-gate-overlay animate-fade-in" role="dialog" aria-modal="true" aria-labelledby="age-gate-title">
            {/* logo */}
            <div style={{ marginBottom: "24px" }}>
                <span
                    style={{
                        background: "var(--color-accent)",
                        color: "#fff",
                        fontWeight: 800,
                        fontSize: "1rem",
                        padding: "4px 12px",
                        borderRadius: "6px",
                        letterSpacing: "0.05em",
                    }}
                >
                    18+
                </span>
            </div>

            <h1
                id="age-gate-title"
                style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "12px" }}
            >
                成人向けコンテンツ
            </h1>

            <p style={{ color: "var(--color-text-secondary)", marginBottom: "8px", maxWidth: "360px" }}>
                このサイトは<strong style={{ color: "var(--color-text-primary)" }}>18歳以上</strong>の方を対象とした
                成人向けコンテンツを含みます。
            </p>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.82rem", marginBottom: "36px", maxWidth: "360px" }}>
                あなたは18歳以上ですか？
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "320px" }}>
                <button
                    onClick={handleConfirm}
                    className="btn-cta"
                    style={{ fontSize: "1.1rem" }}
                >
                    はい、18歳以上です
                </button>
                <button
                    onClick={handleDeny}
                    style={{
                        padding: "14px",
                        borderRadius: "var(--radius-lg)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-text-muted)",
                        fontSize: "0.95rem",
                        transition: "border-color var(--transition-fast)",
                    }}
                >
                    いいえ（退出）
                </button>
            </div>

            <p style={{ marginTop: "24px", fontSize: "0.7rem", color: "var(--color-text-muted)", maxWidth: "320px" }}>
                入場することで、プライバシーポリシーおよび免責事項に同意したものとみなされます。
            </p>
        </div>
    );
}
