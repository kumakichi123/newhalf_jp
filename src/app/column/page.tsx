import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "体験コラム・遊び方ガイド一覧 | ニューハーフJP",
    description: "初心者向けの遊び方ガイドから、奥深い魅力に迫るコラム、専門用語集まで。ニューハーフの世界をもっと楽しむための情報をお届けします。",
};

const articles = [
    {
        href: "/column/what-is-newhalf",
        title: "ニューハーフとは？ただのジャンルを超えた魅力",
        description: "ホリエモンも熱狂するその「ギャップ」と人間的な魅力の正体に迫る。",
        category: "体験コラム"
    },
    {
        href: "/column/how-to-choose-shop",
        title: "初めてのニューハーフデリヘル！失敗しないお店の選び方と予約のコツ",
        description: "安心して遊ぶために絶対に知っておきたい悪質店の見抜き方や、ジャンル（ヘルス・デリヘル）の違いを徹底解説。",
        category: "遊び方ガイド"
    },
    {
        href: "/column/play-manners",
        title: "プレイで絶対NGな行動とは？嬢に喜ばれる「神客」マナー",
        description: "本番行為の強要など法的なNG行動から、「女性として扱う」といった精神的なマナーまでをまとめました。",
        category: "遊び方ガイド"
    },
    {
        href: "/column/bar-and-showpub",
        title: "ニューハーフバー＆ショーパブ体験記！ゲイバーとの違いって？",
        description: "新宿二丁目などで人気のニューハーフバーの雰囲気や料金相場。初めてでも入りやすいお店の特徴。",
        category: "体験コラム"
    },
    {
        href: "/column/glossary",
        title: "「完パス」「オペ済」って何？初心者向け業界の専門用語一覧",
        description: "作品やお店のプロフィール欄でよく見る専門用語をわかりやすく解説します。これさえ読めば迷わない！",
        category: "用語集"
    },
    {
        href: "/column/first-visit-checklist",
        title: "初回利用チェックリスト｜予約前に確認すべき7項目",
        description: "料金・規約・口コミの見方を、サンプル画像つきで確認できる実践ガイド。",
        category: "初心者向け"
    },
    {
        href: "/column/editorial-policy",
        title: "編集方針・運営ポリシー",
        description: "記事作成基準、広告表記、サンプル動画掲載ポリシーを含む運営方針を公開。",
        category: "運営情報"
    }
];

export default function ColumnIndex() {
    return (
        <div className="container" style={{ paddingTop: "32px", paddingBottom: "64px", maxWidth: "720px" }}>
            <section style={{ marginBottom: "40px", textAlign: "center" }}>
                <h1 style={{
                    fontSize: "Clamp(1.8rem, 5vw, 2.5rem)",
                    fontWeight: 800,
                    lineHeight: 1.4,
                    marginBottom: "16px",
                    color: "var(--color-text-primary)"
                }}>
                    コラム・遊び方ガイド
                </h1>
                <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem" }}>
                    初めての世界へ足を踏み入れるあなたへ。<br className="hidden-mobile" />
                    知っておきたい基礎知識や体験談をお届けします！
                </p>
            </section>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {articles.map((article, index) => (
                    <Link href={article.href} key={index} className="card" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "12px", textDecoration: "none" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
                            <span className="badge badge-accent">{article.category}</span>
                        </div>
                        <h2 style={{ fontSize: "1.3rem", fontWeight: 700, margin: 0, color: "var(--color-text-primary)", lineHeight: 1.4 }}>
                            {article.title}
                        </h2>
                        <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem", margin: 0, lineHeight: 1.6 }}>
                            {article.description}
                        </p>
                        <div style={{ marginTop: "8px", fontWeight: 600, color: "var(--color-accent)", fontSize: "0.9rem" }}>
                            記事を読む →
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
