export type NavItemProps = {
  label: string;
  href?: string;
  subMenu?: {
    label: string;
    description: string;
    href: string;
    icon: React.ComponentType | string;
  }[];
};

export type NavData = {
  menus: NavItemProps[];
  actions: {
    label: string;
    href: string;
    icon?: React.ComponentType;
    isPrimary?: boolean;
  }[];
};
