import type { Metadata } from "next";
import { getNewhalfNewArrivals } from "@/lib/fanza";
import WorkCard from "@/components/article/WorkCard";

export const metadata: Metadata = {
    title: "ニューハーフAVレビュー一覧",
    description: "ニューハーフAVのレビュー記事を新着順・人気順で一覧表示。毎日更新中。",
};
export const revalidate = 3600;

export default async function ReviewListPage() {
    const items = await getNewhalfNewArrivals(20).catch(() => []);

    return (
        <div className="container" style={{ paddingTop: "24px", paddingBottom: "32px" }}>
            <h1 className="section-title" style={{ fontSize: "1.3rem" }}>
                レビュー一覧
            </h1>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", marginBottom: "20px" }}>
                {items.length}件のレビューを掲載中
            </p>
            <div className="work-grid">
                {items.map((item) => (
                    <WorkCard key={item.content_id} item={item} />
                ))}
            </div>
        </div>
    );
}
