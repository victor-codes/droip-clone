import { AppIntegration } from "@/components/sections/app-integration";
import { DesignBuild } from "@/components/sections/design-build";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <AppIntegration />
      <DesignBuild />
    </>
  );
}
