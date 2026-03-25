/** @type {import('next').NextConfig} */
const isCi = process.env.GITHUB_ACTIONS === "true"
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] || ""
const isUserSiteRepository = repositoryName.endsWith(".github.io")
const basePath = isCi && repositoryName && !isUserSiteRepository ? `/${repositoryName}` : ""

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
