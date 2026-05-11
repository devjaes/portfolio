export type SocialIcon = "github" | "linkedin";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export const socialLinks: readonly SocialLink[] = [
  { label: "GitHub", href: "https://github.com/devjaes", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jair-mera-dev",
    icon: "linkedin",
  },
] as const;
