import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      // プレースホルダー画像（開発・デモ用）
      { protocol: "https", hostname: "placehold.co" },
      // Fanza / DMM 画像CDN
      { protocol: "https", hostname: "pics.dmm.co.jp" },
      { protocol: "https", hostname: "*.dmm.co.jp" },
      { protocol: "https", hostname: "*.dmm.com" },
    ],
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
