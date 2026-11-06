import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
};

const sizes = {
  sm: 28,
  md: 36,
  lg: 56,
};

export function BrandMark({
  size = "md",
  showWordmark = true,
  className = "",
}: BrandMarkProps) {
  const px = sizes[size];
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 text-[var(--ink)] ${className}`}
      aria-label={siteConfig.name}
    >
      <Image
        src={siteConfig.logoPath}
        alt=""
        width={px}
        height={px}
        className="rounded-lg"
        priority={size !== "sm"}
      />
      {showWordmark ? (
        <span className="font-brand text-xl font-semibold tracking-tight sm:text-2xl">
          {siteConfig.name}
        </span>
      ) : null}
    </Link>
  );
}
