import type { Metadata } from "next";
import { getItemsByActress } from "@/lib/fanza";
import WorkCard from "@/components/article/WorkCard";

export const revalidate = 3600;

interface Props { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    return { title: `女優 ${id} の出演作品一覧` };
}

export default async function ActressDetailPage({ params }: Props) {
    const { id } = await params;
    const items = await getItemsByActress(id, 20).catch(() => []);

    return (
        <div className="container" style={{ paddingTop: "24px", paddingBottom: "32px" }}>
            <h1 className="section-title" style={{ fontSize: "1.2rem" }}>
                出演作品一覧
            </h1>
            {items.length === 0 ? (
                <p style={{ color: "var(--color-text-muted)" }}>作品が見つかりませんでした。</p>
            ) : (
                <div className="work-grid">
                    {items.map((item) => <WorkCard key={item.content_id} item={item} />)}
                </div>
            )}
        </div>
    );
}
