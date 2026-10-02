const { execSync } = require("child_process");

/** Last commit date touching a route's source, so lastmod reflects real changes instead of build time. */
const lastModified = (path) => {
  const dir = path === "/" ? "src/app/page.tsx src/components/sections" : `src/app${path.replace(/\/$/, "")}`;
  try {
    const out = execSync(`git log -1 --format=%cI -- ${dir} ${path.split("/").filter(Boolean).length > 1 ? "" : "src/data"}`, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
    return out || new Date().toISOString();
  } catch {
    return new Date().toISOString();
  }
};

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://sliiqque.space",
  trailingSlash: true,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    const staticPriorities = {
      "/": 1.0,
      "/work": 0.9,
      "/services": 0.9,
      "/studio": 0.8,
      "/expertise": 0.8,
      "/insights": 0.8,
      "/contact": 0.7,
      "/privacy": 0.3,
      "/terms": 0.3,
    };

    const workPriorities = ["/work/bizedge", "/work/real-estate", "/work/lumia", "/work/mo-touch", "/work/zinid"];
    const expertisePriorities = ["/expertise/saas", "/expertise/design-systems", "/expertise/frontend-architecture"];
    const insightSlugs = [
      "ai-native-boutique-studios", "analytics-dashboard-nextjs", "cra-to-nextjs-migration",
      "design-system-guide", "framer-motion-guide", "frontend-ux-conversion",
      "hidden-cost-web-dev-nigeria", "nextauth-authentication", "react-performance",
      "react-server-components", "role-based-access-control",
    ];

    let priority = 0.6;
    if (staticPriorities[path] !== undefined) {
      priority = staticPriorities[path];
    } else if (workPriorities.includes(path)) {
      priority = 0.9;
    } else if (path.startsWith("/services/")) {
      priority = 0.8;
    } else if (path.startsWith("/expertise/")) {
      priority = 0.8;
    } else if (path.startsWith("/insights/")) {
      priority = 0.7;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: lastModified(path),
    };
  },
  exclude: ["/404", "/500", "/favicon.ico", "/api/*", "/llms.txt", "/llms-full.txt"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      // AI search and answer engines: explicitly welcome, so the studio can be cited.
      ...[
        "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-Web", "anthropic-ai",
        "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot",
        "CCBot", "Amazonbot", "cohere-ai", "MistralAI-User", "YouBot", "DuckAssistBot",
      ].map((userAgent) => ({ userAgent, allow: "/", disallow: ["/api/"] })),
    ],
    additionalSitemaps: [],
  },
};

module.exports = config;
