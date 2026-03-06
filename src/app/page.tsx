import type { Metadata } from "next";
import { getNewhalfNewArrivals, getNewhalfRanking } from "@/lib/fanza";
import type { FanzaItem } from "@/types";
import WorkCard from "@/components/article/WorkCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ニューハーフJP | 最新作・ランキング毎日更新",
  description:
    "ニューハーフAVの新着・人気ランキングを毎日更新。女優別・ジャンル別に厳選したレビューを掲載。初心者から玄人まで楽しめる専門メディア。",
};

// ISR: 1時間ごとに再生成
export const revalidate = 3600;

export default async function HomePage() {
  // APIキーが未設定の場合はモックデータを使用
  const [newArrivals, rankings] = await Promise.all([
    getNewhalfNewArrivals(8).catch(() => MOCK_ITEMS),
    getNewhalfRanking(8).catch(() => MOCK_ITEMS),
  ]);

  return (
    <div className="container" style={{ paddingTop: "24px", paddingBottom: "32px" }}>
      {/* Column Teaser (審査用一時配置) */}
      <section style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <h2 className="section-title" style={{ marginBottom: 0, borderBottom: "none", paddingBottom: 0 }}>
            初心者ガイド＆コラム
          </h2>
          <Link href="/column" style={{ fontSize: "0.82rem", color: "var(--color-accent)" }}>
            すべて見る →
          </Link>
        </div>
        <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
          <Link href="/column/how-to-choose-shop" className="card" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <span className="badge badge-accent" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>ガイド</span>
            <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--color-text-primary)", lineHeight: 1.4 }}>初めてのデリヘル！お店の選び方と予約のコツ</span>
          </Link>
          <Link href="/column/glossary" className="card" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <span className="badge badge-accent" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>用語集</span>
            <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--color-text-primary)", lineHeight: 1.4 }}>「完パス」「オペ済」など業界用語を解説</span>
          </Link>
          <Link href="/column/play-manners" className="card" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <span className="badge badge-accent" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>マナー</span>
            <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--color-text-primary)", lineHeight: 1.4 }}>プレイで絶対NGな行動と神客の接し方</span>
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <h2 className="section-title" style={{ marginBottom: 0, borderBottom: "none", paddingBottom: 0 }}>
            新着作品
          </h2>
          <Link href="/review" style={{ fontSize: "0.82rem", color: "var(--color-accent)" }}>
            もっと見る →
          </Link>
        </div>
        <div className="work-grid">
          {newArrivals.slice(0, 8).map((item: FanzaItem) => (
            <WorkCard key={item.content_id} item={item} />
          ))}
        </div>
      </section>

      {/* Rankings */}
      <section style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <h2 className="section-title" style={{ marginBottom: 0, borderBottom: "none", paddingBottom: 0 }}>
            人気ランキング
          </h2>
          <Link href="/review?sort=rank" style={{ fontSize: "0.82rem", color: "var(--color-accent)" }}>
            もっと見る →
          </Link>
        </div>
        <div className="work-grid">
          {rankings.slice(0, 8).map((item: FanzaItem, i: number) => (
            <WorkCard key={item.content_id} item={item} rank={i + 1} />
          ))}
        </div>
      </section>

      {/* Category Links */}
      <section style={{ marginBottom: "40px" }}>
        <h2 className="section-title">ジャンルから探す</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "10px" }}>
          {GENRES.map((g) => (
            <Link
              key={g.id}
              href={`/genre/${g.id}`}
              className="card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 12px",
                fontSize: "0.85rem",
                fontWeight: 500,
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>{g.emoji}</span>
              {g.label}
            </Link>
          ))}
        </div>
      </section>

    </div>

  );
}

// ───── Static Data ─────
const GENRES = [
  { id: "fellatio", emoji: "💋", label: "フェラ特化" },
  { id: "m-male", emoji: "⛓️", label: "M男責め" },
  { id: "big", emoji: "📏", label: "巨根" },
  { id: "cosplay", emoji: "👗", label: "コスプレ" },
  { id: "debut", emoji: "🌟", label: "デビュー作" },
  { id: "popular", emoji: "👑", label: "人気女優" },
];

// ───── Mock Data（APIキー未設定時のフォールバック） ─────
const MOCK_ITEMS = Array.from({ length: 8 }).map((_, i) => ({
  content_id: `mock-${i}`,
  title: `【サンプル】ニューハーフ人気作品 Vol.${i + 1}`,
  URL: "#",
  affiliateURL: "#",
  imageURL: {
    list: `https://placehold.co/120x180/18181c/e0407a?text=NH+${i + 1}`,
    large: `https://placehold.co/240x360/18181c/e0407a?text=NH+${i + 1}`,
  },
  iteminfo: {
    actress: [{ id: `a${i}`, name: `サンプル女優 ${i + 1}` }],
    genre: [{ id: "newhalf", name: "ニューハーフ" }],
    maker: [],
  },
  date: new Date().toISOString().split("T")[0],
  prices: { price: "1,980" },
})) as any;
