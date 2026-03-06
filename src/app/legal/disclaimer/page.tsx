import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "免責事項 | ニューハーフJP",
    description: "当サイトのご利用に関する免責事項、アフィリエイトプログラム、および責任の制限について記載しています。",
};

export default function DisclaimerPage() {
    return (
        <div className="container" style={{ paddingTop: "32px", paddingBottom: "64px", maxWidth: "800px" }}>
            <h1 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "32px" }}>
                免責事項
            </h1>

            <div className="card" style={{ padding: "32px", fontSize: "0.95rem", lineHeight: 1.8 }}>
                <p style={{ marginBottom: "24px" }}>
                    ニューハーフJP（以下「当サイト」といいます）のコンテンツや情報において、可能な限り正確な情報を掲載するよう努めておりますが、
                    必ずしもその正確性や安全性を保証するものではありません。
                    当サイトの利用にあたり、以下の免責事項にご同意いただいたものとみなします。
                </p>

                <section style={{ marginBottom: "32px" }}>
                    <h2 style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "8px", marginBottom: "16px" }}>
                        1. アフィリエイトプログラムについて
                    </h2>
                    <p>
                        当サイトはアフィリエイトプログラムにより商品やサービスをご紹介致しております。
                        アフィリエイトプログラムとは、商品およびサービスの提供元と業務提携を結び商品やサービスを紹介するインターネット上のシステムです。
                        したがいまして、<strong>当サイトが直接商品を販売しているわけではありません。特定商取引法に基づく表記の対象外となります。</strong>
                    </p>
                </section>

                <section style={{ marginBottom: "32px" }}>
                    <h2 style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "8px", marginBottom: "16px" }}>
                        2. 損害やトラブルに対する免責
                    </h2>
                    <p style={{ marginBottom: "16px" }}>
                        お客様ご要望の商品、お支払い等はリンク先の販売店との直接のお取引となりますので、特商法に基づく表記につきましてはリンク先をご確認頂けますようお願い致します。
                    </p>
                    <p>
                        商品の価格 商品の詳細 消費税 送料 在庫数等の詳細は時として変わる場合も御座います。
                        当サイトの掲載情報をご利用頂く場合には、お客様のご判断と責任におきましてご利用頂けますようお願い致します。当サイトでは、一切の責任を負いかねます事ご了承願います。
                        なお、掲載商品に関するお問合せはリンク先に御座います企業宛までお願い致します。
                    </p>
                </section>

                <section style={{ marginBottom: "32px" }}>
                    <h2 style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "8px", marginBottom: "16px" }}>
                        3. 年齢制限について
                    </h2>
                    <p>
                        当サイトは18歳未満の方の閲覧を固く禁じている成人向けコンテンツへのリンクを含んでおります。
                        18歳未満の方の利用によって生じたトラブルや損害に関しても、当サイトは一切の責任を負いません。法令（18歳未満の閲覧禁止等）を遵守した上でご利用ください。
                    </p>
                </section>

                <section style={{ marginBottom: "32px" }}>
                    <h2 style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "8px", marginBottom: "16px" }}>
                        4. 著作権について
                    </h2>
                    <p>
                        当サイトに存在する、文章、画像、動画等の著作物の情報を無断転載することを禁止します。
                        当サイトは著作権の侵害を目的とするものではありません。使用している版権物の知的所有権は、それぞれの著作者・団体に帰属しております。
                        著作権や肖像権に関して問題が生じた場合は、迅速に対処いたします。
                    </p>
                </section>

                <div style={{ marginTop: "40px", paddingTop: "16px", borderTop: "1px dashed var(--color-border)", textAlign: "right", color: "var(--color-text-muted)", fontSize: "0.85rem" }}>
                    <p>制定日：2024年3月5日</p>
                    <p>ニューハーフJP 運営事務局</p>
                </div>
            </div>
        </div>
    );
}
