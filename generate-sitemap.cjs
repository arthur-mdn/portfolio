const { SitemapStream, streamToPromise } = require("sitemap");
const { readFileSync, createWriteStream } = require("fs");
const { Readable } = require("stream");

const baseRoutes = [
  { url: "/", changefreq: "weekly", priority: 1 },
  { url: "/projets", changefreq: "weekly", priority: 0.9 },
  { url: "/services", changefreq: "monthly", priority: 0.85 },
  { url: "/services/creation-site-internet", changefreq: "monthly", priority: 0.8 },
  {
    url: "/services/application-web-sur-mesure",
    changefreq: "monthly",
    priority: 0.8,
  },
  { url: "/services/refonte-site-web", changefreq: "monthly", priority: 0.8 },
  {
    url: "/services/deploiement-maintenance",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/services/applications-natives-ios-macos",
    changefreq: "monthly",
    priority: 0.8,
  },
  { url: "/a-propos", changefreq: "monthly", priority: 0.7 },
  { url: "/blog", changefreq: "weekly", priority: 0.8 },
  { url: "/competences", changefreq: "monthly", priority: 0.4 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
  { url: "/rgpd", changefreq: "yearly", priority: 0.1 },
  { url: "/mentions-legales", changefreq: "yearly", priority: 0.1 },
];

const articlesData = JSON.parse(readFileSync("data/articles.json"));
const articleRoutes = articlesData.map((article) => ({
  url: `/blog/${article.slug}`,
  changefreq: "weekly",
  priority: 0.7,
}));

const projectsData = JSON.parse(readFileSync("data/projects.json"));
const projectRoutes = projectsData.map((project) => ({
  url: `/projet/${project.slug}`,
  changefreq: "monthly",
  priority: 0.85,
}));

const routes = [...baseRoutes, ...articleRoutes, ...projectRoutes];

const stream = new SitemapStream({ hostname: "https://mondon.pro" });
streamToPromise(Readable.from(routes).pipe(stream)).then((data) => {
  createWriteStream("public/sitemap.xml").write(data.toString());
});
