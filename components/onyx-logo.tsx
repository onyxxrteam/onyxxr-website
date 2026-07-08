import Image from "next/image";
import { cn } from "@/lib/utils";

const LogoIcon = ({ className }: { className?: string }) => (
  <svg className={cn("h-11 w-11 shrink-0", className)} viewBox="0 0 120 120" aria-hidden>
    <circle cx="60" cy="18" r="14" fill="#4F83DF" />
    <circle cx="60" cy="102" r="14" fill="#4F83DF" />
    <circle cx="18" cy="60" r="14" fill="#4F83DF" />
    <circle cx="102" cy="60" r="14" fill="#4F83DF" />
    <circle cx="60" cy="60" r="10" fill="#000" />
    <circle cx="36" cy="36" r="10" fill="#000" />
    <circle cx="84" cy="36" r="10" fill="#000" />
    <circle cx="36" cy="84" r="10" fill="#000" />
    <circle cx="84" cy="84" r="10" fill="#000" />
    <circle cx="60" cy="39" r="8" fill="#000" />
    <circle cx="60" cy="81" r="8" fill="#000" />
    <circle cx="39" cy="60" r="8" fill="#000" />
    <circle cx="81" cy="60" r="8" fill="#000" />
    <circle cx="27" cy="22" r="6" fill="#000" />
    <circle cx="93" cy="22" r="6" fill="#000" />
    <circle cx="27" cy="98" r="6" fill="#000" />
    <circle cx="93" cy="98" r="6" fill="#000" />
    <circle cx="21" cy="30" r="5" fill="#000" />
    <circle cx="99" cy="30" r="5" fill="#000" />
    <circle cx="21" cy="90" r="5" fill="#000" />
    <circle cx="99" cy="90" r="5" fill="#000" />
  </svg>
);

export function OnyxLogo({ className, showWord = true }: { className?: string; showWord?: boolean }) {
  if (!showWord) {
    return (
      <div className={cn("flex items-center", className)}>
        <LogoIcon />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/logo.png"
        alt="OnyxXR"
        width={120}
        height={68}
        priority
        className="h-9 w-auto"
      />
    </div>
  );
}
