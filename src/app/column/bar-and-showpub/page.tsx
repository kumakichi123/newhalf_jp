import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "ニューハーフバー＆ショーパブ体験記！ゲイバーとの違いって？ | ニューハーフJP",
    description: "風俗デビューはまだ早いかも…という方におすすめ！お酒を飲みながら楽しく交流できるニューハーフバーや、圧巻のショーパブの体験談をまとめました。",
};

export default function BarAndShowpub() {
    return (
        <div className="container" style={{ paddingTop: "32px", paddingBottom: "64px", maxWidth: "720px" }}>
            <section style={{ marginBottom: "40px", textAlign: "center" }}>
                <span className="badge badge-accent" style={{ marginBottom: "16px" }}>体験コラム</span>
                <h1 style={{
                    fontSize: "Clamp(1.6rem, 5vw, 2.2rem)",
                    fontWeight: 800,
                    lineHeight: 1.4,
                    marginBottom: "16px",
                    color: "var(--color-text-primary)"
                }}>
                    ニューハーフバー＆ショーパブ体験記！<br />
                    ゲイバーとの違いとは？
                </h1>
                <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem" }}>
                    いきなり夜のお店はハードルが高い…そんな方は健全な「バー」から！
                </p>
            </section>

            <article className="card" style={{ padding: "32px", fontSize: "1.05rem", lineHeight: 1.8 }}>

                <p style={{ marginBottom: "32px" }}>
                    「ニューハーフの世界には興味があるけど、いきなりデリヘルや風俗を呼ぶ勇気はない…」
                    そんな初心者の方に全力でおすすめしたいのが、<strong>ニューハーフバー</strong>や<strong>ショーパブ</strong>です。
                    本記事では、新宿二丁目などを中心に盛り上がりを見せる健全なお店の実体験や、楽しむコツについて詳しく解説します。これから夜の街デビューする方はもちろん、まだ行ったことのない業種に挑戦したい方も必見の内容です！
                </p>

                <h2 style={{ fontSize: "1.5rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "12px", marginBottom: "20px", marginTop: 0 }}>
                    1. 意外と知らない？「ゲイバー」との違い
                </h2>
                <p style={{ marginBottom: "16px" }}>
                    よく混同されがちですが、お店のコンセプトやキャストの属性が全く異なります。
                </p>
                <ul style={{ listStyleType: "none", padding: 0, marginBottom: "32px" }}>
                    <li style={{ marginBottom: "16px", background: "var(--color-bg-elevated)", padding: "16px", borderRadius: "var(--radius-md)" }}>
                        <strong>👬 ゲイバー</strong><br />
                        <span style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>男性（同性愛者）が男性を接客するお店。ママが男性の姿のまま女言葉で話す（オネエ系）お店も多いですが、基本的には「男性の姿」です。トークの面白さや、お客さん同士の交流がメインです。</span>
                    </li>
                    <li style={{ marginBottom: "16px", background: "rgba(224, 64, 122, 0.05)", borderLeft: "4px solid var(--color-accent)", padding: "16px", borderRadius: "0 8px 8px 0" }}>
                        <strong>👠 ニューハーフバー</strong><br />
                        <span style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>キャストは「女性として生きている」トランスジェンダーの方々。美しいドレスやメイクで着飾り、キャバクラやガールズバーのように女性としての接客をしてくれます！</span>
                    </li>
                </ul>

                <h2 style={{ fontSize: "1.5rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "12px", marginBottom: "20px" }}>
                    2. 初心者におすすめの「ショーパブ」の魅力
                </h2>
                <p style={{ marginBottom: "20px" }}>
                    会話メインのバーに加えて、圧倒的におすすめしたいのが<strong>「ショーパブ（ショーレストラン）」</strong>です。
                    東京の六本木や新宿、地方の温泉街、さらにはタイ・バンコク（カリプソキャバレーなど）の本格的なショーは、一生に一度は見ておきたいエンターテインメント！
                </p>
                <div style={{ marginBottom: "32px", color: "var(--color-text-secondary)" }}>
                    <strong>体験談：圧巻のステージング</strong>
                    <br />
                    人生で初めてショーパブに行った時、最初は「お笑い系なのかな？」と思っていました。しかし、幕が開くとそこには豪華絢爛な衣装に身を包んだ、モデル顔負けの美女たちの本格的なダンス！
                    美しさの中に男性の骨格がもたらす力強いダイナミックさがあり、<strong>「この世のものとは思えない美のオーラ」</strong>に完全に圧倒されました。ショーの後の写真撮影タイムでは気さくに話しかけてくれて、その親しみやすさのギャップに完全にやられましたね（笑）。
                </div>

                <h2 style={{ fontSize: "1.5rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "12px", marginBottom: "20px" }}>
                    3. 料金システムや初心者向けのアドバイス
                </h2>
                <p style={{ marginBottom: "16px" }}>
                    料金体系はキャバクラやスナックに近く、基本サービスや料金相場は以下のようになります。
                </p>
                <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "32px", color: "var(--color-text-secondary)" }}>
                    <li style={{ marginBottom: "8px" }}><strong>セット料金制：</strong> 「1時間3,000円〜5,000円（飲み放題）」の明朗会計が多く、意外とリーズナブルに楽しめます。</li>
                    <li style={{ marginBottom: "8px" }}><strong>キャストドリンク：</strong> 良い話が聞けたな、楽しませてくれたなと思ったら「一杯どうですか？」と勧めるのがスマートな遊び方です。</li>
                    <li style={{ marginBottom: "8px" }}><strong>入りやすい客層：</strong> 女性客やカップルでの来店も非常に多く、いやらしい雰囲気は全くありません。女子会で使われることも多いほどクリーンです。</li>
                </ul>

                <div style={{ padding: "20px", background: "rgba(255, 215, 0, 0.05)", borderLeft: "4px solid var(--color-gold)", borderRadius: "var(--radius-sm)", marginBottom: "32px" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0 0 8px 0", color: "var(--color-gold)" }}>💡 初心者への一言</h3>
                    <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--color-text-primary)" }}>
                        「初めて来ました」と伝えれば、ママや女の子たちが喜んで優しくリードしてくれます！
                        まずは友人を誘って、華やかな夜のエンターテインメントを体験してみてはいかがでしょうか？新しい世界を探求する参考にしてください！
                    </p>
                </div>

                {/* CTA */}
                <div style={{ textAlign: "center", marginTop: "40px", padding: "32px", background: "var(--color-bg-elevated)", borderRadius: "var(--radius-lg)" }}>
                    <p style={{ fontWeight: 600, marginBottom: "20px", fontSize: "1.1rem" }}>
                        業界の専門用語も知っておくと便利です！
                    </p>
                    <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link
                            href="/column/glossary"
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
                            よく使う用語集をチェック →
                        </Link>
                    </div>
                </div>

            </article>
        </div>
    );
}
