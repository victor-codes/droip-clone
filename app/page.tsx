import { AppIntegration } from "@/components/sections/app-integration";
import { BeyondOrdinary } from "@/components/sections/beyond-ordinary";
import { CraftInteractions } from "@/components/sections/craft-interactions";
import { DesignBuild } from "@/components/sections/design-build";
import { Hero } from "@/components/sections/hero";
import { LowDeps } from "@/components/sections/low-deps";
import { Performance } from "@/components/sections/performance";

export default function Home() {
  return (
    <>
      <Hero />
      <BeyondOrdinary />
      <CraftInteractions />
      <LowDeps />
      <Performance />
      <AppIntegration />
      <DesignBuild />
    </>
  );
}
