import { AppIntegration } from "@/components/sections/app-integration";
import { DesignBuild } from "@/components/sections/design-build";
import { Hero } from "@/components/sections/hero";
import { Performance } from "@/components/sections/performance";

export default function Home() {
  return (
    <>
      <Hero />
      <Performance/>
      <AppIntegration />
      <DesignBuild />
    </>
  );
}
