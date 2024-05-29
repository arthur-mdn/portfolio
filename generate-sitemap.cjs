const {SitemapStream, streamToPromise} = require('sitemap');
const {readFileSync, createWriteStream} = require('fs');
const {Readable} = require('stream');

// Routes de base
const baseRoutes = [
    {url: '/', changefreq: 'daily', priority: 1},
    {url: '/projets', changefreq: 'daily', priority: 0.9},
    {url: '/blog', changefreq: 'daily', priority: 0.9},
    {url: '/services', changefreq: 'monthly', priority: 0.3},
    {url: '/competences', changefreq: 'monthly', priority: 0.1},
    {url: '/contact', changefreq: 'monthly', priority: 0.5},
    {url: '/rgpd', changefreq: 'monthly', priority: 0.1},
    {url: '/mentions-legales', changefreq: 'monthly', priority: 0.1}
];

// Lire et parser le fichier articles.json
const articlesData = JSON.parse(readFileSync('data/articles.json'));

// Ajouter les routes des articles
const articleRoutes = articlesData.map(article => ({
    url: `/blog/${article.slug}`,
    changefreq: 'weekly',
    priority: 0.8
}));


// Lire et parser le fichier projects.json
const projectsData = JSON.parse(readFileSync('data/projects.json'));

// Ajouter les routes des projets
const projectRoutes = projectsData.map(project => ({
    url: `/projet/${project.slug}`,
    changefreq: 'monthly',
    priority: 0.9
}));

// Combiner toutes les routes
const routes = [...baseRoutes, ...articleRoutes, ...projectRoutes];

// Générer le sitemap
const stream = new SitemapStream({hostname: 'https://mondon.pro'});
streamToPromise(Readable.from(routes).pipe(stream)).then((data) => {
    createWriteStream('public/sitemap.xml').write(data.toString());
});
