import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface LogoProps {
  variant?: "clean" | "gritty";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: { width: 120, height: 36 },
  md: { width: 160, height: 48 },
  lg: { width: 200, height: 60 },
  xl: { width: 240, height: 72 },
};

export default function Logo({ variant = "clean", size = "md", className }: LogoProps) {
  const dimensions = sizeMap[size];
  const [imageError, setImageError] = useState(false);
  
  const getTextSize = () => {
    switch (size) {
      case 'sm': return 'text-2xl md:text-3xl';
      case 'md': return 'text-3xl md:text-4xl';
      case 'lg': return 'text-4xl md:text-5xl';
      case 'xl': return 'text-5xl md:text-6xl';
      default: return 'text-3xl md:text-4xl';
    }
  };
  
  return (
    <div className={cn("relative", className)}>
      {variant === "clean" ? (
        <div className="flex items-center justify-center">
          {/* Clean text logo */}
          <div className={cn(
            "font-black text-orange-500 tracking-wider",
            getTextSize()
          )}>
            DREADBIKE
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          {!imageError ? (
            <Image
              src="/images/dreadbike-gritty-logo.png"
              alt="DreadBike Gritty Logo"
              width={dimensions.width}
              height={dimensions.height}
              priority
              className="h-auto w-auto"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={cn(
              "font-black text-orange-500 tracking-wider",
              getTextSize()
            )}>
              DREADBIKE
            </div>
          )}
        </div>
      )}
    </div>
  );
}
