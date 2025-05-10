import Image from "next/image";

interface VldLogoProps {
  width: number;
  height: number;
  className?: string;
}

export default function VldLogo({ width, height, className = "" }: VldLogoProps) {
  return (
    <div className={`vld-logo ${className}`}>
      <Image
        src="/images/VLD_logo.png" // PNG yang anda upload
        alt="VLD Logo"
        width={width}
        height={height}
        priority
      />
    </div>
  );
}
