export type FeaturesListItemProps = {
  id: string;
  title: string;
  description: string;
  link?: {
    href: string;
    label: string;
  };
  imageUrl: string;
};

export type FeaturesProps = {
  title: string;
  isAlternate?: boolean;
  list: FeaturesListItemProps[];
};

export type ScaleItemProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
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

export type DesignBuildItemProps = {
  title: string;
  paragraph: string;
  imageUrl: string;
  column: number;
};
