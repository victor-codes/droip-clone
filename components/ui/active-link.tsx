"use client";
import { cx } from "@/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type ActiveLinkProps = { children: ReactNode; href: string; className: string };

export const ActiveLink = ({
  children,
  href,
  className,
  ...props
}: ActiveLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cx(className, {
        "text-black font-medium": isActive,
      })}
      {...props}
    >
      {children}
    </Link>
  );
};
