import type { Metadata } from "next";
import { searchItems } from "@/lib/fanza";
import WorkCard from "@/components/article/WorkCard";

export const revalidate = 3600;

const GENRE_LABELS: Record<string, string> = {
    fellatio: "フェラ特化",
    "m-male": "M男責め",
    big: "巨根",
    cosplay: "コスプレ",
    debut: "デビュー作",
    popular: "人気女優",
};

interface Props { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const label = GENRE_LABELS[id] ?? id;
    return {
        title: `ニューハーフ×${label} おすすめAV`,
        description: `ニューハーフ×${label}ジャンルのおすすめAV作品を一覧表示。`,
    };
}

export default async function GenreDetailPage({ params }: Props) {
    const { id } = await params;
    const label = GENRE_LABELS[id] ?? id;
    // ジャンルIDをキーワードとして検索（APIのgenreパラメータと対応させるには要カスタマイズ）
    const items = await searchItems(`ニューハーフ ${label}`, 20).catch(() => []);

    return (
        <div className="container" style={{ paddingTop: "24px", paddingBottom: "32px" }}>
            <h1 className="section-title" style={{ fontSize: "1.2rem" }}>
                ニューハーフ × {label}
            </h1>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", marginBottom: "20px" }}>
                {items.length}件の作品
            </p>
            {items.length === 0 ? (
                <p style={{ color: "var(--color-text-muted)" }}>作品が見つかりませんでした。</p>
            ) : (
                <div className="work-grid">
                    {items.map((item) => <WorkCard key={item.content_id} item={item} />)}
                </div>
            )}
        </div>
    );
}
