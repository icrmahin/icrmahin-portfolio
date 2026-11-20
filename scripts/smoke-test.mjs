import { spawn } from "node:child_process";
import process from "node:process";

const port = Number(process.env.SMOKE_PORT ?? 3187);
const host = "127.0.0.1";
const origin = \`http://\${host}:\${port}\`;

const server = spawn(
  "pnpm",
  ["exec", "next", "start", "--hostname", host, "--port", String(port)],
  {
    env: {
      ...process.env,
      NEXT_PUBLIC_SITE_URL: origin,
    },
    stdio: "ignore",
  },
);

async function waitForServer() {
  const deadline = Date.now() + 30_000;

  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(\`Next.js server exited with code \${server.exitCode}\`);
    }

    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 350));
  }

  throw new Error("Next.js server did not become ready within 30 seconds.");
}

async function assertRoute(path, expectedStatus, expectedText) {
  const response = await fetch(new URL(path, origin));
  const body = await response.text();

  if (response.status !== expectedStatus) {
    throw new Error(
      \`\${path}: expected HTTP \${expectedStatus}, received \${response.status}\`,
    );
  }

  if (expectedText && !body.includes(expectedText)) {
    throw new Error(\`\${path}: response did not include "\${expectedText}"\`);
  }

  process.stdout.write(\`✓ \${response.status} \${path}\\n\`);
}

try {
  await waitForServer();

  await assertRoute("/", 200, "Make the useful thing");
  await assertRoute("/about", 200, "Curious by nature");
  await assertRoute("/work/hibbullah", 200, "Two connected experiences");
  await assertRoute("/work/hibbullah", 200, "Engineering decisions");
  await assertRoute("/work/hibbullah", 200, "Supabase and PostgreSQL 17");
  await assertRoute("/work/digitalpathways", 404);
  await assertRoute("/robots.txt", 200, "sitemap.xml");
  await assertRoute("/sitemap.xml", 200, "/work/hibbullah");
  await assertRoute("/icons/icon.svg", 200, "<svg");

  process.stdout.write("\\nProduction route smoke tests passed.\\n");
} finally {
  server.kill("SIGTERM");
}
