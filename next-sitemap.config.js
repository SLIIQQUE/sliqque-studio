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

    const workPriorities = ["/work/bizedge", "/work/lumia", "/work/mo-touch", "/work/zinid"];
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
    } else if (path.startsWith("/expertise/")) {
      priority = 0.8;
    } else if (path.startsWith("/insights/")) {
      priority = 0.7;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  exclude: ["/404", "/500", "/favicon.ico"],
};

module.exports = config;
