import { MetadataRoute } from "next";
import { getNewhalfNewArrivals } from "@/lib/fanza";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const items = await getNewhalfNewArrivals(100).catch(() => []);

    const staticPages: MetadataRoute.Sitemap = [
        { url: siteUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
        { url: `${siteUrl}/review`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
        { url: `${siteUrl}/actress`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: `${siteUrl}/genre`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: `${siteUrl}/column`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${siteUrl}/column/what-is-newhalf`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
        { url: `${siteUrl}/column/first-visit-checklist`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
        { url: `${siteUrl}/column/editorial-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
        { url: `${siteUrl}/legal`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
        { url: `${siteUrl}/legal/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
        { url: `${siteUrl}/legal/disclaimer`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ];

    const reviewPages: MetadataRoute.Sitemap = items.map((item) => ({
        url: `${siteUrl}/review/${item.content_id}`,
        lastModified: new Date(item.date),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [...staticPages, ...reviewPages];
}
