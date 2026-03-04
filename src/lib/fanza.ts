import { FanzaApiResponse, FanzaItem } from "@/types";

const BASE_URL = "https://api.dmm.com/affiliate/v3";

const API_ID = process.env.FANZA_API_ID!;
const AFFILIATE_ID = process.env.FANZA_AFFILIATE_ID!;

// ニューハーフのFloor ID
const NEWHALF_FLOOR_ID = "videoa"; // ビデオオンデマンド
const NEWHALF_GENRE_ID = "5"; // ニューハーフ ジャンルID（調整が必要な場合あり）

interface SearchOptions {
    hits?: number; // 取得件数 (max 100)
    offset?: number; // offset
    sort?: "date" | "rank" | "review" | "price" | "-price";
    keyword?: string;
    floorId?: string;
}

async function fanzaFetch<T>(endpoint: string, params: Record<string, string>): Promise<T> {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    url.searchParams.set("api_id", API_ID);
    url.searchParams.set("affiliate_id", AFFILIATE_ID);
    url.searchParams.set("site", "FANZA");
    url.searchParams.set("service", "digital");
    url.searchParams.set("output", "json");

    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });

    const response = await fetch(url.toString(), {
        next: { revalidate: 3600 }, // 1時間キャッシュ
    });

    if (!response.ok) {
        throw new Error(`FANZA API error: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
}

/** ニューハーフの新着作品を取得 */
export async function getNewhalfNewArrivals(hits = 20, offset = 1): Promise<FanzaItem[]> {
    const data = await fanzaFetch<FanzaApiResponse>("ItemList", {
        floor: NEWHALF_FLOOR_ID,
        hits: String(hits),
        offset: String(offset),
        sort: "date",
        // ニューハーフジャンルの絞り込み
        // NOTE: ジャンルIDはFANZAのAPIドキュメントを参照して確認
        keyword: "ニューハーフ",
    });

    return data.result.items ?? [];
}

/** ニューハーフのランキング作品を取得 */
export async function getNewhalfRanking(hits = 20, offset = 1): Promise<FanzaItem[]> {
    const data = await fanzaFetch<FanzaApiResponse>("ItemList", {
        floor: NEWHALF_FLOOR_ID,
        hits: String(hits),
        offset: String(offset),
        sort: "rank",
        keyword: "ニューハーフ",
    });

    return data.result.items ?? [];
}

/** キーワードで作品を検索 */
export async function searchItems(keyword: string, hits = 20, offset = 1): Promise<FanzaItem[]> {
    const data = await fanzaFetch<FanzaApiResponse>("ItemList", {
        floor: NEWHALF_FLOOR_ID,
        hits: String(hits),
        offset: String(offset),
        sort: "rank",
        keyword,
    });

    return data.result.items ?? [];
}

/** 女優IDで作品を取得 */
export async function getItemsByActress(actressId: string, hits = 20): Promise<FanzaItem[]> {
    const data = await fanzaFetch<FanzaApiResponse>("ItemList", {
        floor: NEWHALF_FLOOR_ID,
        hits: String(hits),
        offset: "1",
        sort: "date",
        actress: actressId,
    });

    return data.result.items ?? [];
}

/** content_idで単品の作品情報を取得 */
export async function getItemById(contentId: string): Promise<FanzaItem | null> {
    const data = await fanzaFetch<FanzaApiResponse>("ItemList", {
        floor: NEWHALF_FLOOR_ID,
        hits: "1",
        offset: "1",
        sort: "date",
        cid: contentId,
    });

    return data.result.items?.[0] ?? null;
}

/** ニューハーフ女優一覧を取得 */
export async function getNewhalfActresses(hits = 50, offset = 1) {
    const url = new URL(`${BASE_URL}/ActressSearch`);
    url.searchParams.set("api_id", API_ID);
    url.searchParams.set("affiliate_id", AFFILIATE_ID);
    url.searchParams.set("output", "json");
    url.searchParams.set("hits", String(hits));
    url.searchParams.set("offset", String(offset));
    url.searchParams.set("keyword", "ニューハーフ");

    const response = await fetch(url.toString(), {
        next: { revalidate: 86400 }, // 24時間キャッシュ
    });

    if (!response.ok) return [];

    const data = await response.json();
    return data.result?.actress ?? [];
}
