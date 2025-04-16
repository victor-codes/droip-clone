import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type SectionLinkProps = {
  linkTo: string;
  children: ReactNode;
};

export const SectionLink = ({ children, linkTo }: SectionLinkProps) => {
  return (
    <Link
      href={linkTo}
      className="flex items-center gap-x-2 font-semibold -tracking-[0.08px] text-royal leading-[1.75]"
    >
      <span>{children}</span>
      <ArrowRight size={18} strokeWidth={2.5} />
    </Link>
  );
};
