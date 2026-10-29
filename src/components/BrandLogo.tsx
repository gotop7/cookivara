import Image from "next/image";

type BrandLogoProps = {
  /** Overall height of the logo lockup */
  size?: "nav" | "hero";
  className?: string;
  priority?: boolean;
};

const sizes = {
  nav: { width: 48, height: 48, className: "h-12 w-12" },
  hero: {
    width: 112,
    height: 112,
    className: "h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24 md:h-28 md:w-28",
  },
} as const;

export function BrandLogo({
  size = "nav",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const dims = sizes[size];

  return (
    <Image
      src="/brand/cookivara-logo.png"
      alt="Cookivara"
      width={dims.width}
      height={dims.height}
      priority={priority}
      className={`object-contain ${dims.className} ${className}`}
    />
  );
}
