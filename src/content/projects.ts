export type ProjectStatus = "Selected work" | "In progress";

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  year: string;
  stack: readonly string[];
  role: string;
  cover: "hibbullah" | "digitalpathways";
  overview: string;
  challenge: string;
  approach: readonly { title: string; description: string }[];
  outcomes: readonly string[];
  published: boolean;
};

export const projects: Project[] = [
  {
    slug: "hibbullah",
    number: "01",
    title: "Hibbullah",
    category: "Commerce · Operations",
    status: "Selected work",
    summary:
      "A pharmacy commerce and inventory product, designed around the needs of both customers and shop operators.",
    year: "2026",
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "PostgreSQL"],
    role: "Product design · Frontend engineering · Backend integration",
    cover: "hibbullah",
    overview:
      "Hibbullah is an Android-first pharmacy application that connects a customer shopping experience with the operational tools a shop needs to manage its catalogue, orders, and stock.",
    challenge:
      "The product has two distinct users with very different jobs. Customers need a straightforward way to discover products and place orders. Shop staff need reliable tools for product data, order handling, and inventory operations. Both experiences depend on the same underlying business data.",
    approach: [
      {
        title: "Separate the workflows",
        description:
          "Keep customer-facing shopping and shop-management tasks distinct while maintaining one coherent product and order system.",
      },
      {
        title: "Keep business rules close to the data",
        description:
          "Use PostgreSQL functions and server-side operations for critical order and inventory workflows instead of relying on client-side arithmetic.",
      },
      {
        title: "Design for day-to-day use",
        description:
          "Prioritise readable status, direct navigation, clear product information, and practical reporting tools for an Android-first workflow.",
      },
    ],
    outcomes: [
      "Customer shopping and shop-management experiences",
      "Order lifecycle and status timeline",
      "Product catalogue and inventory workflows",
      "Supabase-backed data and PostgreSQL business logic",
      "Operational PDF documents and reporting workflows",
    ],
    published: true,
  },
  {
    slug: "digitalpathways",
    number: "02",
    title: "DigitalPathways",
    category: "Product · In development",
    status: "In progress",
    summary:
      "An evolving product project. The public case study will be published when the work and its direction are ready to share.",
    year: "2026",
    stack: ["Product thinking", "Interface design", "Engineering"],
    role: "Product development",
    cover: "digitalpathways",
    overview:
      "DigitalPathways is currently in development. This entry is intentionally brief while the product is still taking shape.",
    challenge:
      "The product scope and its public-facing story are still evolving. Publishing a detailed case study before the work is ready would create a misleading picture of the project.",
    approach: [
      {
        title: "Work in progress",
        description:
          "The project is being developed before a full public case study is released.",
      },
    ],
    outcomes: ["Case study and product details will be added after publication."],
    published: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
