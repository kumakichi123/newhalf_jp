import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "ニューハーフとは？ただの「ジャンル」を超えた奥深い魅力 | ニューハーフJP",
    description: "著名人をも魅了するニューハーフの世界。女性の美しさと男性特有の魅力が同居する「ギャップ」や、知識人が惹きつけられる理由について解説します。",
};

export default function WhatIsNewhalf() {
    return (
        <div className="container" style={{ paddingTop: "32px", paddingBottom: "64px", maxWidth: "720px" }}>
            {/* ヒーローセクション */}
            <section style={{ marginBottom: "40px", textAlign: "center" }}>
                <span className="badge badge-accent" style={{ marginBottom: "16px" }}>体験コラム</span>
                <h1 style={{
                    fontSize: "Clamp(1.8rem, 5vw, 2.5rem)",
                    fontWeight: 800,
                    lineHeight: 1.4,
                    marginBottom: "16px",
                    color: "var(--color-text-primary)"
                }}>
                    ニューハーフとは？<br />
                    <span style={{ color: "var(--color-accent)", fontSize: "0.8em" }}>
                        ただの「ジャンル」を超えた奥深い魅力
                    </span>
                </h1>
                <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem" }}>
                    なぜ、これほどまでに根強い人気を誇るのか。
                </p>
            </section>

            {/* 記事本文 */}
            <article className="card" style={{ padding: "32px", fontSize: "1.05rem", lineHeight: 1.8 }}>

                <h2 style={{ fontSize: "1.5rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "12px", marginBottom: "20px", marginTop: 0 }}>
                    「ギャップ」が生み出す唯一無二の美しさ
                </h2>
                <p style={{ marginBottom: "24px" }}>
                    ニューハーフというジャンルは、単なる「ニッチな趣味」として片付けられるものではありません！その最大の魅力は、圧倒的な<strong>「ギャップ」</strong>にあります。
                </p>
                <p style={{ marginBottom: "24px" }}>
                    女性顔負け、あるいはそれ以上の洗練された美貌と滑らかな曲線美。そこに突如として現れる男性特有のシンボル。この視覚的なコントラストは、人間の本能的な好奇心を強烈に刺激しますよね。
                    「美しさ」と「雄々しさ」が1つの身体に同居する奇跡的なバランスこそが、多くの人を惹きつけてやまない理由です。
                </p>

                <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "32px" }}>
                    <Image
                        src="/column-hero.png"
                        alt="ニューハーフの魅力 ── 美しさと力強さの共存をイメージしたアート"
                        width={800}
                        height={450}
                        style={{ width: "100%", height: "auto", display: "block" }}
                    />
                </div>

                <h2 style={{ fontSize: "1.5rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "12px", marginBottom: "20px" }}>
                    ホリエモンも語る「ニューハーフ」の引力
                </h2>
                <p style={{ marginBottom: "24px" }}>
                    実は、このジャンルは多くの知識人や成功者たちをも魅了しています。その代表的な一人が、実業家の<strong>ホリエモン（堀江貴文氏）</strong>です。
                </p>
                <p style={{ marginBottom: "24px" }}>
                    彼は過去に何度も「ニューハーフ好き」を公言しており、独自の視点でその魅力を語っています。数々の経験を積み、あらゆるエンターテインメントを知り尽くした彼のような人物が、なぜ惹かれるのか気になりますよね？
                </p>

                <div className="video-responsive-shorts">
                    <iframe
                        width="315"
                        height="560"
                        src="https://www.youtube.com/embed/CQbbk_Qt2JM"
                        title="ホリエモンがニューハーフについて語る動画"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

                <p style={{ marginBottom: "32px", marginTop: "24px" }}>
                    それは単なる性的嗜好にとどまらず、既存の枠組みやジェンダー観を超越した<strong>「人間としての深み」や「圧倒的な個性」</strong>へのリスペクトがあるからだと言えます。
                    常識に囚われない自由な表現の先にある、ある種の「究極の美」として捉えられているのです。
                </p>

                <h2 style={{ fontSize: "1.5rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "12px", marginBottom: "20px" }}>
                    まずは、その世界を覗いてみませんか？
                </h2>
                <p style={{ marginBottom: "32px" }}>
                    言葉で語るよりも、実際にその目で見てみるのが一番です！現在のニューハーフ作品は、映像美やストーリー性において、かつてないほどの進化を遂げています。
                    少しでも興味を持たれたなら、まずは人気の作品からその奥深い世界を体験してみてください。
                </p>

                {/* CTA */}
                <div style={{ textAlign: "center", marginTop: "40px", padding: "32px", background: "var(--color-bg-elevated)", borderRadius: "var(--radius-lg)" }}>
                    <p style={{ fontWeight: 600, marginBottom: "20px", fontSize: "1.1rem" }}>
                        今すぐ人気の作品をチェックする
                    </p>
                    <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link
                            href="/"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                background: "var(--color-accent)",
                                color: "#fff",
                                padding: "12px 32px",
                                borderRadius: "var(--radius-full)",
                                fontWeight: 600,
                                opacity: 0.95,
                                transition: "all 0.2s"
                            }}
                        >
                            トップページへ戻る
                        </Link>
                    </div>
                </div>

            </article>
        </div>
    );
}
