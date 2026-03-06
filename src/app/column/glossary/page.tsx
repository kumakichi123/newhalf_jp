import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "「完パス」「オペ済」って何？初心者向けニューハーフ業界の専門用語一覧 | ニューハーフJP",
    description: "作品やお店のプロフィール欄でよく見る専門用語をわかりやすく解説します。これさえ読めば初心者でも迷わずに自分好みのキャストを探せます！",
};

export default function Glossary() {
    return (
        <div className="container" style={{ paddingTop: "32px", paddingBottom: "64px", maxWidth: "720px" }}>
            <section style={{ marginBottom: "40px", textAlign: "center" }}>
                <span className="badge badge-accent" style={{ marginBottom: "16px" }}>用語集</span>
                <h1 style={{
                    fontSize: "Clamp(1.6rem, 5vw, 2.2rem)",
                    fontWeight: 800,
                    lineHeight: 1.4,
                    marginBottom: "16px",
                    color: "var(--color-text-primary)"
                }}>
                    「完パス」「オペ済」って何？<br />
                    初心者向け！業界の専門用語一覧
                </h1>
                <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem" }}>
                    プロフィール欄の暗号を解読して、好みのタイプを見つけよう！
                </p>
            </section>

            <article className="card" style={{ padding: "32px", fontSize: "1.05rem", lineHeight: 1.8 }}>

                <p style={{ marginBottom: "32px" }}>
                    デリヘルのサイトや作品のパッケージ裏を見ると、「完パス娘！」「ノンオペ」といった独自の専門用語が並んでいます。
                    初心者のうちは「どういう状態の子なの？」と混乱しがちですよね？
                    本記事では、これさえ知っておけば迷わない、<strong>業界必須の専門用語</strong>について詳しく解説します。これからニューハーフの世界へ足を踏み入れる方は必見の内容です！
                </p>

                <h2 style={{ fontSize: "1.5rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "12px", marginBottom: "20px", marginTop: 0 }}>
                    1. 身体の特徴・手術歴に関する用語
                </h2>

                <div style={{ marginBottom: "24px" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-accent)", margin: "0 0 8px 0" }}>💉 オペ済 / 上オペ済</h3>
                    <p style={{ margin: 0, color: "var(--color-text-secondary)", paddingBottom: "16px", borderBottom: "1px dashed var(--color-border)" }}>
                        「オペ（手術）」をしている状態のこと。「上オペ済」とは豊胸手術を行っていることを指します。ホルモン注射だけでなく物理的に美しいバストを持っている場合によく使われます。
                    </p>
                </div>

                <div style={{ marginBottom: "24px" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-accent)", margin: "0 0 8px 0" }}>💉 ノンオペ / 未オペ</h3>
                    <p style={{ margin: 0, color: "var(--color-text-secondary)", paddingBottom: "16px", borderBottom: "1px dashed var(--color-border)" }}>
                        豊胸などの外科手術を行っていない状態のこと。「ホルモン（注射）のみ」で女性らしい身体を作っている場合や、自然な膨らみを楽しみたい方にアピールされることが多いですね。
                    </p>
                </div>

                <div style={{ marginBottom: "24px" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-accent)", margin: "0 0 8px 0" }}>💎 タマ抜き（玉抜き）/ 虚勢</h3>
                    <p style={{ margin: 0, color: "var(--color-text-secondary)", paddingBottom: "16px", borderBottom: "1px dashed var(--color-border)" }}>
                        精巣（睾丸）を摘出する手術を受けている状態のこと。男性ホルモンの分泌が抑えられるため、より女性らしい丸みを帯びた肌質・体型になりやすいのが特徴です。
                    </p>
                </div>

                <div style={{ marginBottom: "40px" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-accent)", margin: "0 0 8px 0" }}>⚧️ SRS（性別適合手術）/ 下オペ</h3>
                    <p style={{ margin: 0, color: "var(--color-text-secondary)", paddingBottom: "16px" }}>
                        男性器を完全に切除し、女性器を形成する手術のこと。通常、デリヘル等で「ニューハーフ」として在籍している場合はシンボル（男性器）が残っている状態を指します。SRS済みの場合は「女性（または元男の子）」として一般の店舗で働くケースが多いです。
                    </p>
                </div>

                <h2 style={{ fontSize: "1.5rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "12px", marginBottom: "20px", marginTop: 0 }}>
                    2. 見た目・ルックスに関する用語
                </h2>

                <div style={{ marginBottom: "24px" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-accent)", margin: "0 0 8px 0" }}>✨ 完パス（完全パス）</h3>
                    <p style={{ margin: 0, color: "var(--color-text-secondary)", paddingBottom: "16px", borderBottom: "1px dashed var(--color-border)" }}>
                        「完全に女性としてパスする（通用する）」という意味です。骨格や声、所作も含めて、街ですれ違っても絶対に男性だとバレないレベルの、非常に女性らしく美しいルックスのキャストに使われる最上級の褒め言葉！
                    </p>
                </div>

                <div style={{ marginBottom: "24px" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-accent)", margin: "0 0 8px 0" }}>👗 女装子（じょそこ）/ クロスドレッサー</h3>
                    <p style={{ margin: 0, color: "var(--color-text-secondary)", paddingBottom: "16px", borderBottom: "1px dashed var(--color-border)" }}>
                        ホルモン治療や手術を行わず、メイクや衣装だけで女性の格好をしている男性のこと。ニューハーフ（トランスジェンダー）とは異なり、性自認は男性であることが多いです。
                    </p>
                </div>

                <div style={{ padding: "20px", background: "rgba(224, 64, 122, 0.1)", borderLeft: "4px solid var(--color-accent)", borderRadius: "var(--radius-sm)", marginBottom: "32px", marginTop: "40px" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0 0 8px 0", color: "var(--color-accent)" }}>💡 このページの活用法</h3>
                    <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--color-text-primary)" }}>
                        お店のプロフィールを見るときは、まず「完パスかどうか」でルックスの系統を予想し、「オペの有無（上や玉抜き）」で身体の柔らかさやプレイ時の感触をイメージするのが上級者への第一歩です。
                        自分に合った理想的なキャスト探しの参考にしてください！
                    </p>
                </div>

                {/* CTA */}
                <div style={{ textAlign: "center", marginTop: "40px", padding: "32px", background: "var(--color-bg-elevated)", borderRadius: "var(--radius-lg)" }}>
                    <p style={{ fontWeight: 600, marginBottom: "20px", fontSize: "1.1rem" }}>
                        用語を覚えたら、次は遊び方の基本をチェック！
                    </p>
                    <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link
                            href="/column/how-to-choose-shop"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                background: "transparent",
                                border: "1px solid var(--color-border)",
                                color: "var(--color-text-primary)",
                                padding: "12px 32px",
                                borderRadius: "var(--radius-full)",
                                fontWeight: 600,
                                transition: "background 0.2s"
                            }}
                        >
                            お店の選び方ガイドに戻る →
                        </Link>
                    </div>
                </div>

            </article>
        </div>
    );
}
