import type { NextConfig } from "next";
import { existsSync } from "fs";
import path from "path";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPagesRepo = repoName.endsWith(".github.io");
// A custom domain (public/CNAME) always serves from the domain's root, so no basePath applies.
const hasCustomDomain = existsSync(path.join(__dirname, "public", "CNAME"));
const basePath = repoName && !isUserOrOrgPagesRepo && !hasCustomDomain ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
};

export default nextConfig;
