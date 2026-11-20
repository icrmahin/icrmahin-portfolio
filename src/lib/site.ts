export const site = {
  name: "A. Mahin",
  shortName: "Mahin",
  role: "Independent Product Builder",
  email: "icrmahin@gmail.com",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/icrmahin",
  x: "https://x.com/icrmahin",
  description:
    "I design and build digital products, moving from product thinking and interface design to working software.",
} as const;

export function getSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const deploymentDomain = process.env.VERCEL_URL?.trim();
  // Netlify exposes the site's primary URL (custom domain if set) as URL.
  const netlifyUrl = process.env.URL?.trim();

  if (configuredUrl) {
    try {
      return new URL(configuredUrl).origin;
    } catch {
      // Fall through to host-provided domains.
    }
  }

  if (netlifyUrl) {
    try {
      return new URL(netlifyUrl).origin;
    } catch {
      // Fall through to Vercel's deployment-provided domains.
    }
  }

  if (productionDomain) return "https://" + productionDomain;
  if (deploymentDomain) return "https://" + deploymentDomain;

  return "http://localhost:3000";
}

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/#work" },
  { label: "Playground", href: "/#playground" },
] as const;
