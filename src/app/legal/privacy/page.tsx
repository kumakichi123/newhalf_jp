import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "プライバシーポリシー | ニューハーフJP",
    description: "当サイトにおける個人情報の取り扱い、Cookieの使用に関する指針（プライバシーポリシー）を記載しています。",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container" style={{ paddingTop: "32px", paddingBottom: "64px", maxWidth: "800px" }}>
            <h1 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "32px" }}>
                プライバシーポリシー
            </h1>

            <div className="card" style={{ padding: "32px", fontSize: "0.95rem", lineHeight: 1.8 }}>
                <p style={{ marginBottom: "24px" }}>
                    ニューハーフJP（以下「当サイト」といいます）は、利用者のプライバシーの保護を最重要視しています。
                    当サイトの利用にあたり、以下の通りプライバシーポリシー（個人情報保護方針）を定めます。
                </p>

                <section style={{ marginBottom: "32px" }}>
                    <h2 style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "8px", marginBottom: "16px" }}>
                        1. 個人情報の収集について
                    </h2>
                    <p>
                        当サイトは、年齢認証（Cookieを利用した18歳以上の同意確認）やアクセス解析、広告配信の目的でのみ情報を収集します。
                        氏名、住所、電話番号、メールアドレスなど、利用者個人を特定できる情報を意図的に収集・保管することはありません。
                    </p>
                </section>

                <section style={{ marginBottom: "32px" }}>
                    <h2 style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "8px", marginBottom: "16px" }}>
                        2. Cookie（クッキー）の使用について
                    </h2>
                    <p style={{ marginBottom: "16px" }}>
                        当サイトでは、サービスの向上、年齢認証状態の記憶、アクセス解析、およびアフィリエイト広告の配信のために「Cookie」を使用しています。
                        Cookieとは、利用者のコンピューターに一時的にデータを書き込んで保存させる仕組みですが、これによって個人を特定できる情報は収集されません。
                    </p>
                    <p>
                        利用者は、お使いのブラウザの設定によりCookieを無効化することも可能です。ただし、その場合は一部のサイト機能（年齢認証のスキップ等）が正常に動作しない場合があります。
                    </p>
                </section>

                <section style={{ marginBottom: "32px" }}>
                    <h2 style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "8px", marginBottom: "16px" }}>
                        3. アクセス解析ツールについて
                    </h2>
                    <p>
                        当サイトでは、サイトの利用状況を把握するためにGoogle等のアクセス解析ツールを利用しています。
                        これらにより収集されるデータは匿名化されており、個人を特定するものではありません。
                    </p>
                </section>

                <section style={{ marginBottom: "32px" }}>
                    <h2 style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "8px", marginBottom: "16px" }}>
                        4. 広告の配信について
                    </h2>
                    <p>
                        当サイトは、第三者配信の広告サービス「FANZAアフィリエイト」等を利用しています。
                        広告配信事業者は、利用者の興味に応じた広告を表示するためにCookieを使用することがあります。
                        当サイト経由で得られた広告収益は、サイトの運営・維持管理費に充てられています。
                    </p>
                </section>

                <section style={{ marginBottom: "32px" }}>
                    <h2 style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "8px", marginBottom: "16px" }}>
                        5. 本ポリシーの変更
                    </h2>
                    <p>
                        当サイトは、法令の変更やサービス内容の変更に伴い、事前の予告なく本プライバシーポリシーを変更する場合があります。
                        変更後のポリシーは、当サイトに掲載された時点から効力を生じるものとします。
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
