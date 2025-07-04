"use client";
import { ThreeDMarquee } from "@/app/ui/ThreeDMarquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "/i1.jpg",
    "/i2.jpg",
    "/i6.jpg",
    "/i3.jpg",
    "/i4.jpg",
    "/i6.jpg",
    "/i7.jpg",
    "/i8.jpg",
    "/i9.jpg",
    "/i3.jpg",
    "/i10.jpg",
    "/i11.jpg",
    "/i10.jpg",
    "/i13.jpg",
    "/i1.jpg",
    "/i2.jpg",
    "/i10.jpg",
    "/i3.jpg",
    "/i4.jpg",
    "/i5.jpg",
    "/i6.jpg",
    "/i5.jpg",
    "/i14.jpg",
    "/i15.jpg",
    "/i16.jpg",
    "/i17.jpg",
    "/i18.jpg",
    "/i14.jpg",
    "/img12.jpg",
    "/i8.jpg",
    "/i9.jpg",
    "/i10.jpg",
    "/i14.jpg",
    "/i10.jpg",
    "/i11.jpg",
    "/i14.jpg",
    "/i10.jpg",
    "/i13.jpg",
    "/i16.jpg",
    "/i14.jpg",
    "/i15.jpg",
    "/i10.jpg",
    "/i16.jpg",
    "/i17.jpg",
  ];
  
  return (
    <div className="relative mx-auto my-15 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-lg">
      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}