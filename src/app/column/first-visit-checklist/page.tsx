import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "初回利用チェックリスト｜予約前に確認すべき7項目 | ニューハーフJP",
    description: "ニューハーフ系サービスを初めて利用する人向けに、予約前の確認事項を7項目で整理。料金・身分確認・当日の流れまで、トラブル回避の基本をまとめました。",
};

export default function FirstVisitChecklistPage() {
    return (
        <div className="container" style={{ paddingTop: "32px", paddingBottom: "64px", maxWidth: "760px" }}>
            <section style={{ marginBottom: "32px", textAlign: "center" }}>
                <span className="badge badge-accent" style={{ marginBottom: "16px" }}>初心者向け</span>
                <h1 style={{ fontSize: "Clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.4, marginBottom: "16px" }}>
                    初回利用チェックリスト<br />
                    予約前に確認すべき7項目
                </h1>
                <p style={{ color: "var(--color-text-muted)" }}>
                    画像と具体例で「何を確認すれば安全か」を最短で把握できるようにまとめました。
                </p>
            </section>

            <article className="card" style={{ padding: "32px", fontSize: "1.02rem", lineHeight: 1.8 }}>
                <p>
                    初回利用時は、勢いで予約すると失敗しがちです。下の7項目を順にチェックすれば、
                    料金トラブル・認識違い・当日キャンセルのリスクを大きく下げられます。
                </p>

                <figure style={{ margin: "22px 0 30px" }}>
                    <Image
                        src="/column-hero.png"
                        alt="初回利用前に確認するチェック項目のイメージ"
                        width={1200}
                        height={630}
                        style={{ width: "100%", height: "auto", borderRadius: "12px", border: "1px solid var(--color-border)" }}
                    />
                    <figcaption style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", marginTop: "8px" }}>
                        サンプル画像：予約前の確認ポイントを可視化（当サイト制作用のイメージ）
                    </figcaption>
                </figure>

                <h2 style={h2Style}>1. 料金表に「総額」が書かれているか</h2>
                <p>基本料金だけでなく、指名料・交通費・深夜料金を含めた総額の目安を確認しましょう。料金が曖昧な店舗は避けるのが無難です。</p>

                <h2 style={h2Style}>2. 届出番号・利用規約の有無</h2>
                <p>届出情報や利用規約が明記されているかは、運営の透明性を判断する重要ポイントです。記載が見つからない場合は他店舗を検討してください。</p>

                <h2 style={h2Style}>3. 口コミは「直近3か月」を優先</h2>
                <p>古いレビューだけでは現在の運営状態がわかりません。直近の口コミで、受付対応・時間厳守・清潔感に関する記述を重視しましょう。</p>

                <h2 style={h2Style}>4. 連絡手段と返信速度</h2>
                <p>電話・LINE・フォームなど複数手段があり、返信が早い店舗は当日のトラブル対応も比較的スムーズです。</p>

                <h2 style={h2Style}>5. 当日の禁止事項を事前確認</h2>
                <p>NG行為、オプション範囲、キャンセルポリシーは必ず予約前に確認。認識違いはトラブルの最大要因です。</p>

                <h2 style={h2Style}>6. 身分証・年齢確認の案内</h2>
                <p>年齢確認を明確に実施している店舗は、法令順守への意識が高い傾向があります。案内が一切ない店舗は注意しましょう。</p>

                <h2 style={h2Style}>7. 予算と時間の上限を決めておく</h2>
                <p>事前に「予算」「終了時刻」を決めることで、感情に流されず安全に楽しめます。初回は短時間コースから始めるのが基本です。</p>

                <section style={{ marginTop: "30px", padding: "20px", borderRadius: "12px", background: "var(--color-bg-elevated)" }}>
                    <h3 style={{ marginTop: 0, fontSize: "1.1rem" }}>動画で確認したい人向け</h3>
                    <p style={{ marginBottom: "10px" }}>
                        初心者向けの流れ解説は、短い動画で見るとイメージしやすくなります。外部動画を見る時は、
                        投稿日と概要欄の情報源を必ず確認してください。
                    </p>
                    <a href="https://www.youtube.com/results?search_query=%E5%88%9D%E3%82%81%E3%81%A6+%E4%BA%88%E7%B4%84+%E6%B5%81%E3%82%8C" target="_blank" rel="noreferrer" style={{ color: "var(--color-accent)", fontWeight: 700 }}>
                        参考動画を探す（YouTube検索） ↗
                    </a>
                </section>

                <div style={{ textAlign: "center", marginTop: "36px" }}>
                    <Link href="/column" style={{ color: "var(--color-accent)", fontWeight: 700 }}>
                        コラム一覧に戻る →
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
