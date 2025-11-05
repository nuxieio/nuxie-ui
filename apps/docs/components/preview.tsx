import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import * as examples from "@nuxie/examples";
import type { ComponentType } from "react";

type ExampleRegistry = typeof examples;

type PreviewProps = {
  path: string;
  className?: string;
};

export const Preview = async ({ path, className }: PreviewProps) => {
  const Example = (examples as ExampleRegistry)[path] as
    | ComponentType
    | undefined;

  if (!Example) {
    throw new Error(`Example not found for path: ${path}`);
  }

  const examplePath = join(
    process.cwd(),
    "..",
    "..",
    "packages",
    "examples",
    "src",
    `${path}.tsx`
  );

  const code = await readFile(examplePath, "utf-8");

  return (
    <Tabs items={["Preview", "Code"]}>
      <Tab className={className}>
        <div className="rounded-lg border bg-card p-6">
          <Example />
        </div>
      </Tab>
      <Tab>
        <pre className="overflow-x-auto rounded-lg border bg-muted p-6 text-sm">
          {code}
        </pre>
      </Tab>
    </Tabs>
  );
};
