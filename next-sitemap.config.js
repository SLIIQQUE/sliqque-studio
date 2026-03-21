/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://sliiqque.space",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/work": 0.9,
      "/work/bizedge": 0.9,
      "/services": 0.9,
      "/expertise": 0.8,
      "/expertise/defi": 0.8,
      "/expertise/nft": 0.8,
      "/expertise/saas": 0.8,
      "/studio": 0.8,
      "/insights": 0.8,
      "/insights/defi-dashboard-nextjs": 0.7,
      "/insights/metamask-react": 0.7,
      "/insights/rsc-web3": 0.7,
      "/insights/token-gating": 0.7,
      "/insights/web3-ux-patterns": 0.7,
      "/insights/viem-migration": 0.7,
      "/contact": 0.7,
      "/privacy": 0.5,
      "/terms": 0.5,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || 0.6,
      lastmod: new Date().toISOString(),
    };
  },
  exclude: ["/404", "/500"],
};

module.exports = config;
