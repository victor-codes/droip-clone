import { LinkedinIcon } from "@/components/svgs/footers/linkedin-icon";
import { MetaIcon } from "@/components/svgs/footers/meta-icon";
import { XIcon } from "@/components/svgs/footers/x-icon";
import { YoutubeIcon } from "@/components/svgs/footers/youtube-Icon";
import { FooterColumnProps } from "@/types/footer";

export const footerData: FooterColumnProps[] = [
  {
    title: "Social",
    links: [
      // Note: Radix doesn't have Facebook/YouTube icons. Using placeholders.
      // Consider using SVGs or another library like react-icons for these.
      { icon: MetaIcon, href: "#" }, // Placeholder needed
      { icon: XIcon, href: "#" }, // Uses Radix TwitterLogoIcon
      { icon: LinkedinIcon, href: "#" }, // Uses Radix LinkedInLogoIcon
      { icon: YoutubeIcon, href: "#" }, // Placeholder needed
    ],
  },
  {
    title: "Product",
    links: [
      { name: "Grid & Layouts", href: "#" },
      { name: "Typography", href: "#" },
      { name: "Media Manager", href: "#" },
      { name: "Form Builder", href: "#" },
      { name: "Pop-Up Builder", href: "#" },
      { name: "Interaction & Animations", href: "#" },
      { name: "Accessibility", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Affiliates", href: "#" },
      { name: "Terms & Privacy", href: "#" },
      { name: "Cookie", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Release Notes", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Pricing", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
];
