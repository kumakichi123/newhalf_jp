export interface FanzaItem {
    content_id: string;
    title: string;
    URL: string;
    affiliateURL: string;
    imageURL: {
        list: string;
        large: string;
    };
    sampleImageURL?: {
        sample_s: { image: string[] };
    };
    iteminfo: {
        actress?: { id: string; name: string }[];
        genre?: { id: string; name: string }[];
        maker?: { id: string; name: string }[];
        label?: { id: string; name: string }[];
    };
    volume?: string; // 再生時間（分）
    date: string; // 発売日
    review?: { count: number; average: string };
    prices: { price: string };
}

export interface FanzaApiResponse {
    result: {
        status: number;
        items: FanzaItem[];
        total_count: string;
        first_position: number;
        count: number;
    };
}

export interface Actress {
    id: string;
    name: string;
    imageURL?: string;
    description?: string;
    works?: FanzaItem[];
}

export interface ReviewArticle {
    id: string;
    contentId: string;
    title: string;
    metaDescription: string;
    body: string; // markdown
    publishedAt: string;
    updatedAt: string;
    actress: { id: string; name: string }[];
    genre: { id: string; name: string }[];
    affiliateURL: string;
    imageURL: string;
    sampleImages: string[];
    rating?: number; // 1-5
}
