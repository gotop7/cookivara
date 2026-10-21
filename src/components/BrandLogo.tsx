import Image from "next/image";

type BrandLogoProps = {
  /** Overall height of the logo lockup */
  size?: "nav" | "hero";
  className?: string;
  priority?: boolean;
};

const sizes = {
  nav: { box: 36, width: 36, height: 36 },
  hero: { box: 88, width: 88, height: 88 },
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
      className={`object-contain ${className}`}
      style={{ width: dims.box, height: dims.box }}
    />
  );
}
