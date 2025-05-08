// components/LogoAnimation.tsx
import Image from 'next/image'

interface LogoAnimationProps {
  isActive?: boolean;
  logoSrc: string;
  altText?: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

export default function LogoAnimation({
  isActive = false,
  logoSrc,
  altText = "Logo Aplikasi",
  width = 150,
  height = 150,
  className = "",
  onClick,
}: LogoAnimationProps) {
  if (!logoSrc) {
    console.warn("LogoAnimation: Prop 'logoSrc' tidak disediakan.");
    return null;
  }

  return (
    <div
      className={`logo-container ${className}`}
      onClick={onClick}
      style={{ position: "relative", display: "inline-block", cursor: onClick ? "pointer" : "default" }}
    >
      <div className="logo-glow" />
      <div className={`logo-image ${isActive ? "pulse" : ""}`}>
        <Image
          src={logoSrc}
          alt={altText}
          width={width}
          height={height}
          priority
        />
      </div>
    </div>
  );
}
