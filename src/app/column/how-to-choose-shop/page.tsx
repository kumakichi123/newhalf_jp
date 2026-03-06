import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "初めてのニューハーフデリヘル！失敗しないお店の選び方と予約のコツ | ニューハーフJP",
    description: "初心者が安心してニューハーフデリヘルを楽しむために。悪質店の見抜き方、口コミの重要性、ヘルスやデリヘルの違いなどを徹底解説します。",
};

export default function HowToChooseShop() {
    return (
        <div className="container" style={{ paddingTop: "32px", paddingBottom: "64px", maxWidth: "720px" }}>
            <section style={{ marginBottom: "40px", textAlign: "center" }}>
                <span className="badge badge-accent" style={{ marginBottom: "16px" }}>遊び方ガイド</span>
                <h1 style={{
                    fontSize: "Clamp(1.6rem, 5vw, 2.2rem)",
                    fontWeight: 800,
                    lineHeight: 1.4,
                    marginBottom: "16px",
                    color: "var(--color-text-primary)"
                }}>
                    初めてのニューハーフデリヘル！<br />
                    失敗しないお店の選び方と予約のコツ
                </h1>
                <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem" }}>
                    初めての世界へ踏み出す時の不安を、知識で安心に変えましょう。
                </p>
            </section>

            <article className="card" style={{ padding: "32px", fontSize: "1.05rem", lineHeight: 1.8 }}>

                <p style={{ marginBottom: "32px" }}>
                    「映像を見て興味を持ったけど、実際のお店に行くのは少しハードルが高い…」「ぼったくりやトラブルが怖い」
                    そんな風に思っている方も多いのでは？今回は、初心者の方が安全に、そして最高に楽しめるお店（特にデリヘル）の選び方について詳しく解説します。これからデリヘルデビューする方は必見の内容です！
                </p>

                <h2 style={{ fontSize: "1.5rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "12px", marginBottom: "20px", marginTop: 0 }}>
                    1. 悪質店を見抜く！安全な店舗の絶対条件
                </h2>
                <p style={{ marginBottom: "16px" }}>
                    まずは「絶対に避けるべきお店」の特徴を知っておくことが防衛の第一歩です。安全な優良店を選ぶ基準は以下の3つ。
                </p>
                <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "32px", color: "var(--color-text-secondary)" }}>
                    <li style={{ marginBottom: "8px" }}><strong>料金体系が公式サイトに明記されているか：</strong> 追加オプションや交通費が不透明なサイトは避けましょう。ポッキリ価格を明記しているお店が安心です。</li>
                    <li style={{ marginBottom: "8px" }}><strong>年齢確認（18歳未満お断り）を徹底しているか：</strong> 法律を遵守していないお店は、客側もトラブルに巻き込まれるリスクが高いです。</li>
                    <li style={{ marginBottom: "8px" }}><strong>店舗の許可番号が記載されているか：</strong> 風営法の届出番号（公安委員会の許可）がサイトの最下部等に記載されているか確認してください。</li>
                </ul>

                <h2 style={{ fontSize: "1.5rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "12px", marginBottom: "20px" }}>
                    2. 口コミとパネル写真の「リアルな見方」
                </h2>
                <p style={{ marginBottom: "16px" }}>
                    ホームページの女の子の写真は、正直に言うと「盛られている」ことがほとんどです。これはニューハーフに限らず普通の風俗店でも同じですね。
                    ここで重要になるのが<strong>「口コミサイト」でのリアルな情報収集</strong>と、<strong>動画やブログの確認</strong>です。
                </p>
                <p style={{ marginBottom: "32px" }}>
                    最近はキャスト本人がX（旧Twitter）やお店のブログで動画や自撮りをアップしていることも多いです。パネル（宣材写真）だけを鵜呑みにせず、動いている姿や普段の文章を見ることで、実際の雰囲気や性格のミスマッチを防ぐことができます。
                </p>

                <div style={{ padding: "20px", background: "rgba(224, 64, 122, 0.1)", borderLeft: "4px solid var(--color-accent)", borderRadius: "var(--radius-sm)", marginBottom: "32px" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0 0 8px 0", color: "var(--color-accent)" }}>💡 予約時のワンポイントアドバイス</h3>
                    <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--color-text-primary)" }}>
                        電話予約の際、「ニューハーフのお店は初めてなので、優しくリードしてくれるタイプの子が良いです」と素直に伝えてみましょう。良いお店の受付（店長）なら、必ず初心者にぴったりな子を見繕ってくれます！
                    </p>
                </div>

                <h2 style={{ fontSize: "1.5rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "12px", marginBottom: "20px" }}>
                    3. ヘルスとデリヘルの違い
                </h2>
                <p style={{ marginBottom: "24px" }}>
                    代表的な風俗店の基本サービスは大きく2つに分かれます。
                </p>
                <ul style={{ listStyleType: "none", padding: 0, marginBottom: "32px" }}>
                    <li style={{ marginBottom: "16px" }}>
                        <strong>🏨 ヘルス（店舗型）</strong><br />
                        <span style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>お店（個室）に出向いてサービスを受けます。お風呂が完備されており、マットプレイ等があるのが特徴。準備の手間がなく、手ぶらで行けるのがメリットです。</span>
                    </li>
                    <li style={{ marginBottom: "16px" }}>
                        <strong>🏠 デリヘル（派遣型）</strong><br />
                        <span style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>自宅やホテルにキャストを呼ぶシステムです。誰かと顔を合わせるリスクが低く、リラックスした自分のテリトリーで遊べるため、近年はこちらが主流になりつつあります。</span>
                    </li>
                </ul>

                <h2 style={{ fontSize: "1.5rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "12px", marginBottom: "20px" }}>
                    まとめ：事前準備があれば怖くない！
                </h2>
                <p style={{ marginBottom: "32px" }}>
                    ニューハーフのキャストさん達は、非常に美意識が高く、また男性心理も女性心理も理解しているため、とても優しく接してくれることが多いです。
                    料金やルールが明瞭な優良店さえ選べれば、これほど魅惑的で非日常な体験はありません。自分に合った理想的なプレイを楽しめる風俗店探しの参考にしてください！
                </p>

                {/* CTA */}
                <div style={{ textAlign: "center", marginTop: "40px", padding: "32px", background: "var(--color-bg-elevated)", borderRadius: "var(--radius-lg)" }}>
                    <p style={{ fontWeight: 600, marginBottom: "20px", fontSize: "1.1rem" }}>
                        次は「プレイ中のNGマナー」もチェックしよう
                    </p>
                    <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link
                            href="/column/play-manners"
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
                            やってはいけないNG行動を読む →
                        </Link>
                    </div>
                </div>

            </article>
        </div>
    );
}
