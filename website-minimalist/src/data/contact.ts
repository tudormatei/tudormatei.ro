import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import type { IconType } from "react-icons";
import { IoMdMail } from "react-icons/io";
import { LuPaperclip } from "react-icons/lu";
import { assets } from "../assets/assets";

export type ContactItem = {
  label: string;
  href: string;
  ariaLabel: string;
  Icon: IconType;
  target?: string;
  rel?: string;
};

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    href: "mailto:tudormatei010@gmail.com",
    ariaLabel: "Email",
    Icon: IoMdMail,
  },
  {
    label: "Phone",
    href: "tel:+40754225563",
    ariaLabel: "Phone",
    Icon: FaPhone,
  },
  {
    label: "CV",
    href: assets.cv,
    ariaLabel: "CV",
    Icon: LuPaperclip,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "GitHub",
    href: "https://github.com/tudormatei",
    ariaLabel: "GitHub",
    Icon: FaGithub,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tudormatei/",
    ariaLabel: "LinkedIn",
    Icon: FaLinkedin,
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
