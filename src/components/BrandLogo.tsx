import Image from "next/image";

type BrandLogoProps = {
  /** Overall height of the logo lockup */
  size?: "nav" | "hero";
  className?: string;
  priority?: boolean;
};

const sizes = {
  nav: { box: 48, width: 48, height: 48 },
  hero: { box: 112, width: 112, height: 112 },
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
