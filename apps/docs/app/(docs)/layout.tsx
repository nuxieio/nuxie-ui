import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";

const DocsRouteLayout = ({ children }: { children: React.ReactNode }) => (
  <DocsLayout tree={source.pageTree}>{children}</DocsLayout>
);

export default DocsRouteLayout;
