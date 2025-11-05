import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig = {
  typedRoutes: true,
  transpilePackages: [
    "@nuxie/ui",
    "@nuxie/examples",
    "@nuxie/shadcn-ui",
  ],
};

export default withMDX(nextConfig);
