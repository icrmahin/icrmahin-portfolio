export type ProjectStatus = "Selected work" | "In progress";

export type ProjectSurface = {
  title: string;
  audience: string;
  description: string;
  capabilities: readonly string[];
};

export type ProjectStep = {
  title: string;
  description: string;
};

export type ProjectDecision = {
  title: string;
  context: string;
  implementation: string;
};

export type ProjectArchitectureNode = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  year: string;
  role: string;
  platform: string;
  stack: readonly string[];
  cover: "hibbullah" | "digitalpathways";
  published: boolean;
  brief: string;
  constraints: readonly string[];
  surfaces: readonly ProjectSurface[];
  journey: readonly ProjectStep[];
  architecture: readonly ProjectArchitectureNode[];
  decisions: readonly ProjectDecision[];
  delivered: readonly string[];
  currentState: string;
};

export const projects: Project[] = [
  {
    slug: "hibbullah",
    title: "Hibbullah",
    category: "Pharmacy commerce and operations",
    status: "Selected work",
    summary:
      "An Android-first pharmacy product that connects a customer storefront with the operational tools behind the shop.",
    year: "2026",
    role: "Product design, interface engineering, and backend integration",
    platform: "Android-first app with responsive web support",
    stack: [
      "Expo",
      "React Native",
      "Expo Router",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Cloudinary",
    ],
    cover: "hibbullah",
    published: true,
    brief:
      "The brief was bigger than putting a medicine catalogue on a phone. The shop needed a straightforward way for customers to discover products and place orders, while staff needed a reliable place to maintain the catalogue, stock, orders, customers, and returns. Those two experiences had to operate on the same business data without exposing the shop's internal controls to customers.",
    constraints: [
      "A single-vendor pharmacy, not a multi-merchant marketplace.",
      "Cash on delivery, with a flat ৳80 delivery fee and Dhaka-only delivery in the documented product scope.",
      "Stock is tracked by physical batches and expiry dates, not only by a product-level quantity.",
      "Customer-owned information and admin operations require different access rules.",
      "Android is the primary experience; the same Expo codebase also supports responsive phone, tablet, and web layouts.",
    ],
    surfaces: [
      {
        title: "Customer storefront",
        audience: "For people buying from the pharmacy",
        description:
          "A focused shopping experience for finding the right product, checking its availability, and following an order after checkout.",
        capabilities: [
          "Browse categories and collections; search by product name and company.",
          "Open product details with pricing, discount, availability, expiry, and images.",
          "Manage favourites and a stock-aware cart.",
          "Choose a saved delivery address, add an order note, and place a cash-on-delivery order.",
          "Follow order status, receive in-app updates, and request a return for an individual order line.",
        ],
      },
      {
        title: "Shop operations",
        audience: "For the people running the pharmacy",
        description:
          "A separate operational workspace over the same catalogue and order records, designed around the tasks that keep a shop running.",
        capabilities: [
          "Maintain products, categories, company names, images, and product visibility.",
          "Manage inventory batches, low-stock thresholds, expiry, and reasoned stock adjustments.",
          "Review orders and move them through the fulfilment lifecycle.",
          "Review customers and return requests; approve, reject, or process returns.",
          "Manage home-screen advertisements and inspect sales, inventory, and audit reports.",
        ],
      },
    ],
    journey: [
      {
        title: "Discover",
        description:
          "Customers browse categories and collections or use ranked server-side search. Product lists are paginated instead of loading the entire catalogue into the device.",
      },
      {
        title: "Prepare the order",
        description:
          "Product details make price and availability visible before the customer adds items to the cart and chooses a saved delivery address.",
      },
      {
        title: "Place the order",
        description:
          "Checkout sends the order to a PostgreSQL function. The backend records the order and its item-price snapshots, applies the delivery rule, and allocates stock from inventory batches.",
      },
      {
        title: "Fulfil and track",
        description:
          "Shop staff move the order from pending through confirmation, processing, and out-for-delivery. Customers see the status timeline and notifications.",
      },
      {
        title: "Handle exceptions",
        description:
          "Returns are requested per order line. Admin decisions determine whether returned stock is restored and how the associated profit is adjusted.",
      },
    ],
    architecture: [
      {
        title: "Expo application",
        description:
          "React Native, Expo Router, and TypeScript provide the customer and admin experiences in one codebase.",
      },
      {
        title: "Typed application services",
        description:
          "Screens compose shared components and hooks. Services own Supabase queries, RPC calls, mapping, and error handling.",
      },
      {
        title: "Supabase and PostgreSQL 17",
        description:
          "Auth, row-level security, relational data, server-side functions, realtime updates, and Edge Functions hold the product's business rules.",
      },
      {
        title: "Cloudinary media",
        description:
          "Product and avatar image bytes are stored separately. Private asset deletion is delegated to an Edge Function that holds the secret.",
      },
    ],
    decisions: [
      {
        title: "Keep business rules on the server",
        context:
          "Order creation, stock movement, search ranking, and reporting affect shared business data. Repeating those rules in different clients would make them easy to diverge.",
        implementation:
          "The app uses PostgreSQL functions for critical operations and server-side aggregates for dashboard and report data. The client requests a result instead of recalculating the shop's numbers.",
      },
      {
        title: "Treat stock as batches, not a single number",
        context:
          "A pharmacy needs to know which physical stock is available and when it expires. A single product quantity cannot answer that.",
        implementation:
          "Inventory is stored as product batches with expiry and status. Order allocation uses FIFO-style batch deduction, while adjustments retain a reason and actor.",
      },
      {
        title: "Preserve the price that was actually ordered",
        context:
          "A product's live price can change after a customer places an order. Historical orders must still reflect what the customer agreed to pay.",
        implementation:
          "Order lines store price snapshots. Invoices and statements use those snapshots rather than recalculating past transactions from current product prices.",
      },
      {
        title: "Separate media from privileged operations",
        context:
          "The app needs product and avatar images, but a mobile client should not hold a Cloudinary secret that can delete assets.",
        implementation:
          "Image uploads use scoped unsigned presets. Destructive asset operations go through a Supabase Edge Function that validates the caller and owns the private API secret.",
      },
    ],
    delivered: [
      "Customer storefront, catalogue, search, cart, checkout, order history, and return requests.",
      "Admin dashboard, catalogue management, batch inventory, order handling, customers, returns, advertisements, and reports.",
      "Role-aware data access using Supabase Auth and row-level security.",
      "Order status history, realtime in-app notifications, and device push-notification plumbing.",
      "Client-side PDF invoice and customer statement generation using Expo Print and Sharing.",
    ],
    currentState:
      "The repository documents an applied and verified hosted schema and a buildable, shippable app. This case study describes the implemented product and engineering scope; it does not claim unverified customer, revenue, or conversion results.",
  },
  {
    slug: "digitalpathways",
    title: "DigitalPathways",
    category: "Product development",
    status: "In progress",
    summary:
      "A product project that is still taking shape. I will publish the work when its scope and the decisions behind it are ready to explain.",
    year: "2026",
    role: "Product development",
    platform: "In development",
    stack: ["Product thinking", "Interface design", "Engineering"],
    cover: "digitalpathways",
    published: false,
    brief: "",
    constraints: [],
    surfaces: [],
    journey: [],
    architecture: [],
    decisions: [],
    delivered: [],
    currentState: "Details will be published when the project is ready to show.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
