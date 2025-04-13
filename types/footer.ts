interface FooterLinkItem {
  // type: "text" | "icon";
  name?: string;
  href: string;
  icon?: React.ComponentType;
}

export interface FooterColumnProps {
  title: string;
  links: FooterLinkItem[];
}


export type SocialsProps = {
  isMobile?: boolean;
};  