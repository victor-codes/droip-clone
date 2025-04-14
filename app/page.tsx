import { AppIntegration } from "@/components/sections/app-integration";
import { DesignBuild } from "@/components/sections/design-build";
import { Hero } from "@/components/sections/hero";
import { LowDeps } from "@/components/sections/low-deps";
import { Performance } from "@/components/sections/performance";

export default function Home() {
  return (
    <>
      <Hero />
      <LowDeps />
      <Performance />
      <AppIntegration />
      <DesignBuild />
    </>
  );
}
