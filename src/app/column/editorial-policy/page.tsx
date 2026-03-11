import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "編集方針・運営ポリシー | ニューハーフJP",
    description: "ニューハーフJPの編集方針ページ。記事の作成基準、情報源、広告・アフィリエイト表記、更新方針を公開しています。",
};

export default function EditorialPolicyPage() {
    return (
        <div className="container" style={{ paddingTop: "32px", paddingBottom: "64px", maxWidth: "760px" }}>
            <section style={{ marginBottom: "40px", textAlign: "center" }}>
                <span className="badge badge-accent" style={{ marginBottom: "16px" }}>サイト運営情報</span>
                <h1 style={{ fontSize: "Clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.4, marginBottom: "16px" }}>
                    編集方針・運営ポリシー
                </h1>
                <p style={{ color: "var(--color-text-muted)" }}>
                    記事制作の考え方を明文化し、審査担当・読者の双方が判断しやすい状態にします。
                </p>
            </section>

            <article className="card" style={{ padding: "32px", fontSize: "1.02rem", lineHeight: 1.8 }}>
                <figure style={{ margin: "0 0 24px" }}>
                    <Image
                        src="/column-hero.png"
                        alt="編集方針とコンテンツ運営のイメージ"
                        width={1200}
                        height={630}
                        style={{ width: "100%", height: "auto", borderRadius: "12px", border: "1px solid var(--color-border)" }}
                    />
                    <figcaption style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", marginTop: "8px" }}>
                        サンプル画像：編集体制・公開フローのイメージ
                    </figcaption>
                </figure>

                <h2 style={h2Style}>1. サイトの目的</h2>
                <p>ニューハーフJPは、ニューハーフ関連作品・サービスに関する基礎知識、体験前の注意点、用語解説を提供する情報メディアです。初心者が安全に判断できることを第一目的としています。</p>

                <h2 style={h2Style}>2. 記事作成の基準</h2>
                <ul style={{ paddingLeft: "20px" }}>
                    <li>公式サイトや規約など一次情報を優先して確認</li>
                    <li>誤解を招く断定表現を避け、条件や例外を明記</li>
                    <li>公序良俗・法令に反する行為を推奨しない</li>
                    <li>初心者が実務で使える具体性（料金・手順・注意点）を重視</li>
                </ul>

                <h2 style={h2Style}>3. 広告・アフィリエイト表記</h2>
                <p>当サイトにはアフィリエイトリンクを含む場合があります。リンク経由で購入・申込が発生した際、運営者に報酬が支払われることがあります。ただし、報酬の有無にかかわらず、記事内容は上記の編集基準に基づいて作成・更新します。</p>

                <h2 style={h2Style}>4. 情報の更新方針</h2>
                <p>価格、規約、キャンペーン情報は変動するため、定期的に見直しを行います。古い情報や不正確な記述を確認した場合は、順次修正します。</p>

                <h2 style={h2Style}>5. サンプル動画掲載ポリシー</h2>
                <p>
                    動画を掲載する場合は、権利元が明確な素材のみを使用し、無断転載や違法アップロードと思われるコンテンツは扱いません。
                    埋め込み・引用時は、出典元を明記した上で文脈説明を添えます。
                </p>

                <h2 style={h2Style}>6. お問い合わせ・修正依頼</h2>
                <p>記事内容の誤りや修正提案がある場合は、運営者への連絡手段（準備中）よりご連絡ください。内容確認後、必要に応じて修正対応します。</p>

                <div style={{ marginTop: "32px", padding: "18px", background: "rgba(224, 64, 122, 0.08)", borderLeft: "4px solid var(--color-accent)", borderRadius: "var(--radius-sm)" }}>
                    本ページは、提携審査の有無に関係なく、継続的に公開・更新する運営情報として管理します。
                </div>

                <div style={{ textAlign: "center", marginTop: "36px" }}>
                    <Link href="/column" style={{ color: "var(--color-accent)", fontWeight: 700 }}>
                        コラム一覧へ戻る →
                    </Link>
                </div>
            </article>
        </div>
    );
}

const h2Style = {
    fontSize: "1.35rem",
    borderBottom: "2px solid var(--color-border)",
    paddingBottom: "10px",
    margin: "28px 0 14px",
};
