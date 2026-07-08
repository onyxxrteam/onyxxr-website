import Image from "next/image";
import { cn } from "@/lib/utils";

export function OnyxLogo({ className, showWord = true }: { className?: string; showWord?: boolean }) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/logo.png"
        alt="OnyxXR"
        width={showWord ? 120 : 280}
        height={showWord ? 68 : 158}
        priority
        className={showWord ? "h-9 w-auto" : "h-36 w-auto"}
      />
    </div>
  );
}
