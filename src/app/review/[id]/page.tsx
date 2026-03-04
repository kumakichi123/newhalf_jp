import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getItemById, getNewhalfNewArrivals } from "@/lib/fanza";
import StickyCTA from "@/components/ui/StickyCTA";
import WorkCard from "@/components/article/WorkCard";
import { notFound } from "next/navigation";

export const revalidate = 3600;

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const item = await getItemById(id).catch(() => null);
    if (!item) return { title: "作品が見つかりません" };

    const actress = item.iteminfo?.actress?.[0]?.name ?? "";
    return {
        title: `${item.title} | レビュー`,
        description: `${actress ? `${actress}主演。` : ""}${item.title}のレビュー・見どころ・サンプル画像・FANZAリンクをまとめました。`,
        openGraph: {
            title: item.title,
            images: [{ url: item.imageURL.large }],
        },
    };
}

export default async function ReviewDetailPage({ params }: Props) {
    const { id } = await params;
    const [item, related] = await Promise.all([
        getItemById(id).catch(() => null),
        getNewhalfNewArrivals(4).catch(() => []),
    ]);

    if (!item) notFound();

    const actress = item.iteminfo?.actress?.[0];
    const genres = item.iteminfo?.genre ?? [];
    const maker = item.iteminfo?.maker?.[0];
    const samples = item.sampleImageURL?.sample_s?.image ?? [];

    return (
        <>
            <article className="container animate-fade-in" style={{ paddingTop: "24px", paddingBottom: "120px" }}>

                {/* Breadcrumb */}
                <nav style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: "16px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    <Link href="/">ホーム</Link>
                    <span>/</span>
                    <Link href="/review">レビュー</Link>
                    <span>/</span>
                    <span style={{ color: "var(--color-text-secondary)" }}>{item.title.slice(0, 20)}...</span>
                </nav>

                {/* Hero layout: image + meta */}
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,160px) 1fr", gap: "16px", marginBottom: "24px" }}>
                    <div style={{ position: "relative", aspectRatio: "2/3", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
                        <Image src={item.imageURL.large} alt={item.title} fill style={{ objectFit: "cover" }} sizes="160px" priority />
                    </div>
                    <div>
                        {/* Genres */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "8px" }}>
                            {genres.slice(0, 3).map((g) => (
                                <Link key={g.id} href={`/genre/${g.id}`}>
                                    <span className="badge badge-accent" style={{ fontSize: "0.65rem" }}>{g.name}</span>
                                </Link>
                            ))}
                        </div>
                        {/* Title */}
                        <h1 style={{ fontSize: "clamp(0.95rem, 3.5vw, 1.25rem)", fontWeight: 700, lineHeight: 1.4, marginBottom: "10px" }}>
                            {item.title}
                        </h1>
                        {/* Actress */}
                        {actress && (
                            <Link href={`/actress/${actress.id}`} style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
                                <span style={{ width: "24px", height: "24px", background: "var(--color-accent)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", color: "#fff", fontWeight: 700 }}>
                                    {actress.name.slice(0, 1)}
                                </span>
                                <span style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>{actress.name}</span>
                            </Link>
                        )}
                        {/* Spec table */}
                        <table style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", borderCollapse: "collapse", width: "100%" }}>
                            <tbody>
                                {maker && <tr><td style={{ paddingBottom: "4px", width: "60px" }}>メーカー</td><td style={{ color: "var(--color-text-secondary)" }}>{maker.name}</td></tr>}
                                {item.volume && <tr><td style={{ paddingBottom: "4px" }}>収録時間</td><td style={{ color: "var(--color-text-secondary)" }}>{item.volume}分</td></tr>}
                                <tr><td style={{ paddingBottom: "4px" }}>発売日</td><td style={{ color: "var(--color-text-secondary)" }}>{item.date}</td></tr>
                                <tr><td>価格</td><td style={{ color: "var(--color-accent)", fontWeight: 700 }}>¥{item.prices.price}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* CTA #1 – ファーストビュー内 */}
                <a href={item.affiliateURL} target="_blank" rel="noopener noreferrer nofollow" className="btn-cta" style={{ marginBottom: "32px" }}>
                    🎬 FANZAで今すぐ視聴する（無料サンプルあり）
                </a>

                {/* Article body */}
                <div className="article-body">
                    <h2>この作品の見どころ</h2>
                    <p style={{ color: "var(--color-text-secondary)" }}>
                        {/* 記事本文はAIが生成したテキストがここに入る */}
                        ※ 記事本文は準備中です。AI記事生成機能実装後に追加されます。
                    </p>

                    {/* Sample images */}
                    {samples.length > 0 && (
                        <>
                            <h2>サンプル画像</h2>
                            <div className="image-strip">
                                {samples.slice(0, 6).map((src, i) => (
                                    <Image key={i} src={src} alt={`サンプル ${i + 1}`} width={180} height={270} style={{ borderRadius: "var(--radius-sm)", width: "100%", height: "auto", objectFit: "cover" }} />
                                ))}
                            </div>
                        </>
                    )}

                    <h2>おすすめする人</h2>
                    <ul style={{ color: "var(--color-text-secondary)", paddingLeft: "1em", listStyleType: "disc" }}>
                        <li>ニューハーフAV初心者でまず何を見ればいいか迷っている方</li>
                        <li>{actress ? `${actress.name}さんのファン` : "この女優のファン"}</li>
                        {genres[0] && <li>{genres[0].name}系が好きな方</li>}
                    </ul>
                </div>

                {/* CTA #2 – 記事末尾 */}
                <div style={{ marginTop: "36px" }}>
                    <p style={{ textAlign: "center", fontSize: "0.82rem", color: "var(--color-text-muted)", marginBottom: "10px" }}>
                        ▼ 無料サンプル動画も配信中
                    </p>
                    <a href={item.affiliateURL} target="_blank" rel="noopener noreferrer nofollow" className="btn-cta">
                        FANZAで購入・視聴する → ¥{item.prices.price}
                    </a>
                </div>

                {/* Related works */}
                {related.length > 0 && (
                    <section style={{ marginTop: "40px" }}>
                        <h2 className="section-title">関連作品</h2>
                        <div className="work-grid">
                            {related.map((r) => (
                                <WorkCard key={r.content_id} item={r} />
                            ))}
                        </div>
                    </section>
                )}
            </article>

            {/* Sticky CTA */}
            <StickyCTA href={item.affiliateURL} />
        </>
    );
}
