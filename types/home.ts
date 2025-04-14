export type DesignBuildItemProps = {
  title: string; // H3 text content, or null if no H3 was found
  paragraph: string; // P text content
  imageUrl: string; // Image src URL
  column: number;
};

export type LowDepsItemProps = {
  id: string;
  type: "video" | "text";
  title?: string;
  mediaUrl?: string;
  description?: string;
  icon?: React.ComponentType;
  column: number;
};
