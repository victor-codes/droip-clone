import { AccessibilityIcon } from "@/components/svgs/nav-menu/a11y-icon";
import { BlogIcon } from "@/components/svgs/nav-menu/blog-icon";
import { ContactIcon } from "@/components/svgs/nav-menu/contact-icon";
import { ContentManagerIcon } from "@/components/svgs/nav-menu/content-icon";
import { DocsIcon } from "@/components/svgs/nav-menu/doc-icon";
import { EditorIcon } from "@/components/svgs/nav-menu/editor-icon";
import { FeatureRequestIcon } from "@/components/svgs/nav-menu/feature-req-icon";
import { FigmaToDroipIcon } from "@/components/svgs/nav-menu/figma-droip-icon";
import { FormBuilderIcon } from "@/components/svgs/nav-menu/form-builder-icon";
import { InteractionIcon } from "@/components/svgs/nav-menu/interaction-icon";
import { LayoutIcon } from "@/components/svgs/nav-menu/layout-icon";
import { MediaManagerIcon } from "@/components/svgs/nav-menu/media-manager-icon";
import { PopupBuilderIcon } from "@/components/svgs/nav-menu/pop-up-icon";
import { ReleaseIcon } from "@/components/svgs/nav-menu/release-icon";
import { SeoIcon } from "@/components/svgs/nav-menu/seo-icon";
import { SupportIcon } from "@/components/svgs/nav-menu/support-icon";
import { TypographyIcon } from "@/components/svgs/nav-menu/typo-icon";
import { NavData } from "@/types/nav";

export const NAV_MENU_COPY: NavData = {
  menus: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Product",
      subMenu: [
        {
          label: "Editor",
          description: "Effective Visual Builder",
          icon: EditorIcon,
          href: "#",
        },
        {
          label: "Interaction & Animation",
          description: "Design interactive websites",
          icon: InteractionIcon,
          href: "#",
        },
        {
          label: "Grids & Layouts",
          description: "Structure more easily",
          icon: LayoutIcon,
          href: "#",
        },

        {
          label: "Media Manager",
          description: "Manage & edit site assets",
          icon: MediaManagerIcon,
          href: "#",
        },
        {
          label: "Typography",
          description: "Customize your branding",
          icon: TypographyIcon,
          href: "#",
        },
        {
          label: "SEO",
          description: "Optimize your SEO workflow",
          icon: SeoIcon,
          href: "#",
        },
        {
          label: "Form Builder",
          description: "Design any web forms",
          icon: FormBuilderIcon,
          href: "#",
        },
        {
          label: "Accessibility",
          description: "Accessible to everyone",
          icon: AccessibilityIcon,
          href: "#",
        },
        {
          label: "Pop-up Builder",
          description: "Build pop-ups visually",
          icon: PopupBuilderIcon,
          href: "#",
        },

        {
          label: "Figma to Droip",
          description: "Turn static design into live websites",
          icon: FigmaToDroipIcon,
          href: "#",
        },
        {
          label: "Content Manager",
          description: "Centralized dynamic content management",
          icon: ContentManagerIcon,
          href: "#",
        },
      ],
    },
    {
      label: "Resources",
      subMenu: [
        {
          label: "Droip Blogs",
          description: "Explore what's happening",
          icon: BlogIcon,
          href: "#",
        },
        {
          label: "Documentation",
          description: "Learn from documentation",
          icon: DocsIcon,
          href: "#",
        },
        {
          label: "Release Notes",
          description: "Check what's new",
          icon: ReleaseIcon,
          href: "#",
        },
      ],
    },
    {
      label: "Support",
      subMenu: [
        {
          label: "Get Support",
          description: "Fix your issues with our experts",
          icon: SupportIcon,
          href: "#",
        },
        {
          label: "Feature Request",
          description: "Let us know what’s missing",
          icon: FeatureRequestIcon,
          href: "#",
        },
        {
          label: "Contact",
          description: "Contact for query",
          icon: ContactIcon,
          href: "#",
        },
      ],
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
  ],
  actions: [
    {
      label: "Login",
      href: "/signin",
    },
    {
      label: "Get Started",
      href: "/pricing",
      isPrimary: true,
    },
  ],
};
