import Image from "next/image";
import Link from "next/link";
import type { FanzaItem } from "@/types";

interface WorkCardProps {
    item: FanzaItem;
    rank?: number;
}

export default function WorkCard({ item, rank }: WorkCardProps) {
    const actress = item.iteminfo?.actress?.[0];
    const genres = item.iteminfo?.genre?.slice(0, 2) ?? [];

    return (
        <Link href={`/review/${item.content_id}`} className="card" style={{ display: "block" }}>
            {/* Thumbnail */}
            <div style={{ position: "relative", aspectRatio: "2/3", overflow: "hidden", background: "var(--color-bg-elevated)" }}>
                <Image
                    src={item.imageURL.large}
                    alt={item.title}
                    fill
                    sizes="(max-width: 480px) 50vw, 200px"
                    style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
                    className="card-img"
                />
                {/* Rank badge */}
                {rank !== undefined && (
                    <span
                        style={{
                            position: "absolute",
                            top: "8px",
                            left: "8px",
                            background: rank <= 3 ? "var(--color-gold)" : "var(--color-bg-elevated)",
                            color: rank <= 3 ? "#0d0d0f" : "var(--color-text-secondary)",
                            fontWeight: 800,
                            fontSize: "0.8rem",
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {rank}
                    </span>
                )}
                {/* NEW badge for items within 7 days */}
                {isNew(item.date) && (
                    <span
                        className="badge badge-accent"
                        style={{ position: "absolute", top: "8px", right: "8px", fontSize: "0.65rem" }}
                    >
                        NEW
                    </span>
                )}
            </div>

            {/* Info */}
            <div style={{ padding: "10px 10px 12px" }}>
                {/* Genres */}
                {genres.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "6px" }}>
                        {genres.map((g) => (
                            <span key={g.id} className="badge badge-muted" style={{ fontSize: "0.62rem" }}>
                                {g.name}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <p
                    style={{
                        fontSize: "0.82rem",
                        fontWeight: 500,
                        lineHeight: 1.4,
                        color: "var(--color-text-primary)",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        marginBottom: "6px",
                    }}
                >
                    {item.title}
                </p>

                {/* Actress */}
                {actress && (
                    <p style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>
                        {actress.name}
                    </p>
                )}
            </div>
        </Link>
    );
}

function isNew(dateStr: string): boolean {
    const d = new Date(dateStr);
    return (Date.now() - d.getTime()) < 7 * 24 * 60 * 60 * 1000;
}
