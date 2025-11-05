import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  transpilePackages: [
    "@nuxie/ui",
    "@nuxie/examples",
    "@nuxie/shadcn-ui",
  ],
};

export default withMDX(nextConfig);
