import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "まとめ・解説記事一覧",
    description: "ニューハーフAVのジャンル解説、おすすめランキング、女優紹介などのまとめ記事一覧。",
};

// TODO: ここにCMSまたはMarkdownファイルからコラム一覧を取得する処理を追加
const MOCK_COLUMNS = [
    { id: "beginner-guide", title: "ニューハーフAV初心者ガイド：最初に見るべきおすすめ10選", date: "2026-03-01" },
    { id: "top10-2025", title: "2025年最新！ニューハーフAV人気女優ランキングTOP10", date: "2026-02-20" },
    { id: "genre-guide", title: "ニューハーフ×M男責め特集：おすすめ作品まとめ", date: "2026-02-10" },
];

export default function ColumnListPage() {
    return (
        <div className="container" style={{ paddingTop: "24px", paddingBottom: "32px" }}>
            <h1 className="section-title" style={{ fontSize: "1.3rem" }}>まとめ・解説記事</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {MOCK_COLUMNS.map((col) => (
                    <a
                        key={col.id}
                        href={`/column/${col.id}`}
                        className="card"
                        style={{ display: "block", padding: "16px 20px" }}
                    >
                        <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: "6px" }}>{col.date}</p>
                        <p style={{ fontWeight: 600, lineHeight: 1.4, color: "var(--color-text-primary)" }}>{col.title}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}
