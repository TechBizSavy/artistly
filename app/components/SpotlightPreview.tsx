import React from "react";
import { Spotlight } from "@/app/ui/Spotlight";
import { PointerHighlight } from "../ui/pointer-highlight";

export function SpotlightPreview() {
  return (
    <div className="relative flex h-[40rem]  pt-20 md:pt-10 w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center">
    

      <Spotlight
        className="-top-20 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">

        <h1 className="bg-opacity-50 pb-3 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Connect with
<br /> Amazing Performers
        </h1>
        <div className="flex justify-center">
        <PointerHighlight>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          Discover talented artists for your events. From singers and dancers to speakers and DJs,&apos;find the perfect performer to make your event unforgettable.
          copy.
        </p>
        </PointerHighlight>
      </div>
      </div>
    </div>
  );
}
