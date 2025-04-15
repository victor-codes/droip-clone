import { CRAFT_INTERACTIONS_DATA } from "@/contents/home";
import { Features } from "../ui/features";

export const CraftInteractions = () => {
  return (
    <Features
      isAlternate
      title="Craft engaging and immersive interactions"
      list={CRAFT_INTERACTIONS_DATA}
    />
  );
};
