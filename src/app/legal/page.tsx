import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "プライバシーポリシー・免責事項",
};

export default function LegalPage() {
    const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "ニューハーフJP";

    return (
        <div className="container" style={{ paddingTop: "32px", paddingBottom: "48px", maxWidth: "720px" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "32px", borderBottom: "1px solid var(--color-border)", paddingBottom: "16px" }}>
                プライバシーポリシー・免責事項
            </h1>

            {/* プライバシーポリシー */}
            <section style={{ marginBottom: "40px" }}>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-accent)", marginBottom: "16px" }}>
                    プライバシーポリシー
                </h2>
                <div style={{ color: "var(--color-text-secondary)", lineHeight: 1.8, fontSize: "0.9rem" }}>
                    <h3 style={{ fontWeight: 600, color: "var(--color-text-primary)", margin: "16px 0 8px" }}>個人情報の収集</h3>
                    <p>当サイトでは、アクセス解析ツールを使用してアクセスログを収集することがあります。取得した情報はサイト改善の目的にのみ使用し、第三者への開示は行いません。</p>

                    <h3 style={{ fontWeight: 600, color: "var(--color-text-primary)", margin: "16px 0 8px" }}>Cookieの使用</h3>
                    <p>当サイトは年齢確認のためにsessionStorageを使用します。また、アフィリエイトプログラムの追跡のためCookieが設定される場合があります。</p>

                    <h3 style={{ fontWeight: 600, color: "var(--color-text-primary)", margin: "16px 0 8px" }}>アフィリエイト広告</h3>
                    <p>
                        当サイトは<strong>FANZAアフィリエイトプログラム（DMM.com）</strong>に参加しています。
                        記事内のリンクから商品を購入・会員登録された場合、当サイトに報酬が発生することがあります。
                        掲載コンテンツはすべて18歳以上の出演者によるものであり、18歳未満の方の閲覧は固くお断りします。
                    </p>
                </div>
            </section>

            {/* 免責事項 */}
            <section style={{ marginBottom: "40px" }}>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-accent)", marginBottom: "16px" }}>
                    免責事項
                </h2>
                <div style={{ color: "var(--color-text-secondary)", lineHeight: 1.8, fontSize: "0.9rem" }}>
                    <p style={{ marginBottom: "12px" }}>
                        当サイトの情報は作成時点のものであり、価格・仕様・配信状況は変更になる場合があります。
                        最新情報はFANZA公式サイトにてご確認ください。
                    </p>
                    <p style={{ marginBottom: "12px" }}>
                        当サイトは合法的に販売されているコンテンツのみを紹介しています。
                        サードパーティサイトへのリンクについて、当サイトは一切の責任を負いません。
                    </p>
                    <p>
                        当サイトの内容の正確性・完全性については保証しておりません。
                        当サイトの利用により生じた損害について、運営者は責任を負いかねます。
                    </p>
                </div>
            </section>

            {/* 運営者情報 */}
            <section>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-accent)", marginBottom: "16px" }}>
                    運営者情報
                </h2>
                <div style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                    <p>サイト名：{siteName}</p>
                    <p>運営形態：個人運営</p>
                    <p>お問い合わせ：contact[at]example.com（スパム対策のため@を[at]と表記しています）</p>
                </div>
            </section>
        </div>
    );
}
