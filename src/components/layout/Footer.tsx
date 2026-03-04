import Link from "next/link";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "ニューハーフJP";

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid var(--color-border)",
                background: "var(--color-bg-card)",
                padding: "32px 0 16px",
                marginBottom: "60px", // tab bar height
            }}
        >
            <div className="container">
                <p style={{ fontWeight: 700, marginBottom: "16px", color: "var(--color-text-primary)" }}>
                    {siteName}
                </p>

                <nav style={{ display: "flex", flexWrap: "wrap", gap: "12px 20px", marginBottom: "24px" }}>
                    {[
                        { href: "/review", label: "レビュー一覧" },
                        { href: "/actress", label: "女優一覧" },
                        { href: "/genre", label: "ジャンル一覧" },
                        { href: "/column", label: "まとめ記事" },
                        { href: "/legal/privacy", label: "プライバシーポリシー" },
                        { href: "/legal/disclaimer", label: "免責事項" },
                    ].map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            style={{ color: "var(--color-text-muted)", fontSize: "0.82rem" }}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <div
                    style={{
                        background: "var(--color-bg-elevated)",
                        borderRadius: "var(--radius-md)",
                        padding: "12px 16px",
                        fontSize: "0.75rem",
                        color: "var(--color-text-muted)",
                        lineHeight: "1.6",
                        marginBottom: "20px",
                    }}
                >
                    <strong>【PR】本サイトの記事にはプロモーション（広告）が含まれています。</strong><br />
                    本サイトはFANZA（DMM.com）アフィリエイトプログラムに参加しています。
                    記事内のリンクから商品を購入・登録いただいた場合、サイト運営者に報酬が発生することがあります。
                    掲載されている成人向けコンテンツはすべて18歳以上の出演者・閲覧者を対象としています。
                    18歳未満の方の閲覧はご遠慮ください。
                </div>

                <p style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", textAlign: "center" }}>
                    © {new Date().getFullYear()} {siteName}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
