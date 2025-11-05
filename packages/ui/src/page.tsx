import type { HTMLAttributes } from "react";

const baseClassName = "relative h-screen w-full overflow-hidden";

export type PageProps = HTMLAttributes<HTMLDivElement>;

export const Page = ({ className, ...props }: PageProps) => (
  <div
    className={className ? `${baseClassName} ${className}` : baseClassName}
    {...props}
  />
);

export default Page;
