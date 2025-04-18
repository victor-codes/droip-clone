import {
  AppTileIcon1,
  AppTileIcon10,
  AppTileIcon11,
  AppTileIcon12,
  AppTileIcon13,
  AppTileIcon14,
  AppTileIcon15,
  AppTileIcon16,
  AppTileIcon17,
  AppTileIcon18,
  AppTileIcon19,
  AppTileIcon2,
  AppTileIcon20,
  AppTileIcon21,
  AppTileIcon22,
  AppTileIcon3,
  AppTileIcon4,
  AppTileIcon5,
  AppTileIcon6,
  AppTileIcon7,
  AppTileIcon8,
  AppTileIcon9,
} from "@/components/svgs/app-tiles";
import { LDCostEffIcon } from "@/components/svgs/low-deps/cost-eff-icon";
import { LDGridIcon } from "@/components/svgs/low-deps/grid-icon";
import { LDSecureIcon } from "@/components/svgs/low-deps/secure-icon";
import { LDWorkflowIcon } from "@/components/svgs/low-deps/workflow-icon";
import { getUUID } from "@/lib";
import {
  DesignBuildItemProps,
  FeaturesListItemProps,
  LowDepsItemProps,
} from "@/types/home";

export const BEYOND_ORDINARY_DATA: FeaturesListItemProps[] = [
  {
    id: getUUID(),
    title: "Advanced typography",
    description:
      "Take full control over your text with precision typography tools. Adjust fonts, spacing, and styles to add more character to your design.",
    link: {
      href: "#",
      label: "View Details",
    },
    imageUrl:
      "https://droip.com/wp-content/uploads/2025/03/advanced-typography.webp",
  },
  {
    id: getUUID(),

    title: "CSS grids and layouts",
    description:
      "Build complex layouts with ease using CSS Grids. Create multi-directional structures, manage spacing, and achieve perfect alignment without limitations.",
    link: {
      href: "#",
      label: "View Details",
    },
    imageUrl:
      "https://droip.com/wp-content/uploads/2025/03/CSS-Grids-Layouts.webp",
  },
  {
    id: getUUID(),
    title: "Adaptive design",
    description:
      "Ensure flawless responsiveness across all devices. Design with adaptive elements that adjust seamlessly to different screen sizes and resolutions.",

    imageUrl:
      "https://droip.com/wp-content/uploads/2025/03/auto-responsive-1.webp",
  },
  {
    id: getUUID(),
    title: "Designed for efficiency",
    description:
      "Streamline your workflow with intuitive tools that simplify layout structuring. Save time while maintaining complete design accuracy and flexibility.",

    imageUrl:
      "https://droip.com/wp-content/uploads/2025/03/Designed-for-Efficiency.webp",
  },
];

export const CRAFT_INTERACTIONS_DATA: FeaturesListItemProps[] = [
  {
    id: getUUID(),
    title: "Advanced interaction timeline",
    description:
      "Design smooth, multi-step animations with a timeline-based editor for complete control.",
    imageUrl:
      "https://droip.com/wp-content/uploads/2025/03/Advanced-Interaction-timeline.webp",
  },
  {
    id: getUUID(),

    title: "Custom timing editor",
    description:
      "Fine-tune every interaction to deliver flawless performance by adjusting delays, durations, easing functions, and more.",
    imageUrl:
      "https://droip.com/wp-content/uploads/2025/03/Custom-Timing-Editor.webp",
  },
  {
    id: getUUID(),
    title: "Advanced triggers",
    description:
      "Trigger animations based on scrolling, hovering, page load, and more for a dynamic experience.",
    imageUrl:
      "https://droip.com/wp-content/uploads/2025/03/Advanced-Triggers.webp",
  },
  {
    id: getUUID(),
    title: "Achieve limitless precision",
    description:
      "Create flawless, interactive designs visually with unmatched accuracy and finesse.",
    imageUrl:
      "https://droip.com/wp-content/uploads/2025/03/Achieve-Limitless-Precision.webp",
  },
];

export const LOW_DEPS_DATA: LowDepsItemProps[] = [
  {
    id: "control",
    type: "text",
    icon: LDGridIcon,
    title: "More control, less reliance",
    description:
      "Get complete control over your website's performance and aesthetics without extra plugins.",
    column: 1,
  },
  {
    id: "video",
    type: "video",
    mediaUrl: "https://droip.com/wp-content/uploads/2025/03/PanzerV3.mp4#t=0,0",
    column: 2,
  },
  {
    id: "cost",
    type: "text",
    icon: LDCostEffIcon,
    title: "Cost-effective",
    description:
      "Reduce ongoing costs with built-in tools that let you scale seamlessly without extra expenses.",
    column: 3,
  },
  {
    id: "workflow",
    type: "text",
    icon: LDWorkflowIcon,
    title: "Simplified workflow",
    description:
      "With everything built in, your design process is streamlined, efficient, and hassle-free.",
    column: 0,
  },
  {
    id: "secure",
    type: "text",
    icon: LDSecureIcon,
    title: "Streamlined & secure",
    description:
      "Fewer external plugins mean fewer vulnerabilities, keeping your site secure and lightweight.",
    column: 0,
  },
];

export const APP_INTEGRATION_DATA: (React.ComponentType | string)[] = [
  AppTileIcon1,
  AppTileIcon2,
  AppTileIcon3,
  AppTileIcon4,
  AppTileIcon5,
  AppTileIcon6,
  AppTileIcon7,
  AppTileIcon8,
  AppTileIcon9,
  AppTileIcon10,
  AppTileIcon11,
  AppTileIcon12,
  AppTileIcon13,
  AppTileIcon14,
  AppTileIcon15,
  AppTileIcon16,
  "https://droip.com/wp-content/uploads/2025/04/image-56386.webp",
  AppTileIcon17,
  AppTileIcon18,
  AppTileIcon19,
  AppTileIcon20,
  AppTileIcon21,
  AppTileIcon22,
  "https://droip.com/wp-content/uploads/2025/04/Re-captcha.webp",
];

export const DESIGN_BUILD_DATA: DesignBuildItemProps[] = [
  {
    title: "Seamless <br/> migration", // H3 found
    paragraph:
      "Migrate your existing design seamlessly into Droip with just a click of a button!",
    imageUrl: "https://droip.com/wp-content/uploads/2025/03/design1.webp",
    column: 4,
  },
  {
    title: "Form builder", // H3 found
    paragraph:
      "Build forms for any purpose and effortlessly manage form data natively.",
    imageUrl: "https://droip.com/wp-content/uploads/2025/03/design-1.webp",
    column: 2,
  },
  {
    title: "CSS preview", // H3 found
    paragraph: "See real-time CSS changes and fine-tune styles as you need.",
    imageUrl: "https://droip.com/wp-content/uploads/2025/03/design8.webp",
    column: 2,
  },
  {
    title: "Unlimited breakpoints", // H3 not found, used H4
    paragraph:
      "Achieve pixel-perfect responsiveness across all devices with unlimited breakpoints.",
    imageUrl: "https://droip.com/wp-content/uploads/2025/03/design1-1.webp",
    column: 1,
  },
  {
    title: "Figma to droip", // H3 not found, used H4
    paragraph:
      "Seamlessly import Figma designs into Droip and bring your vision to life in no time.",
    imageUrl: "https://droip.com/wp-content/uploads/2025/03/design2.webp",
    column: 1,
  },
  {
    title: "Code element", // H3 not found, used H4
    paragraph:
      "Add custom HTML, CSS, and JavaScript to an element for extended functionality.",
    imageUrl: "https://droip.com/wp-content/uploads/2025/03/design4.webp",
    column: 1,
  },
  {
    title: "Pop-up builder", // H3 not found, used H4
    paragraph:
      "Design engaging pop-ups that captivate visitors and boost conversions.",
    imageUrl: "https://droip.com/wp-content/uploads/2025/03/design5.webp",
    column: 1,
  },
  {
    title: "Autosave", // H3 not found, used H4
    paragraph:
      "Never lose progress—your work is automatically saved as you build.",
    imageUrl: "https://droip.com/wp-content/uploads/2025/03/design7.webp",
    column: 1,
  },
  {
    title: "Global style manager", // H3 not found, used H4
    paragraph: "Maintain consistent branding with centralized style controls.",
    imageUrl: "https://droip.com/wp-content/uploads/2025/03/design6.webp",
    column: 1,
  },
  {
    title: "Droip AI", // H3 not found, used H4
    paragraph: "Harness AI to accelerate your workflow and creative process.",
    imageUrl:
      "https://droip.com/wp-content/uploads/2025/03/create-with-ai.webp",
    column: 3,
  },
];
