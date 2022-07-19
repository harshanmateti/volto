import imagesMiddleware from '@plone/volto/express-middleware/images';
import filesMiddleware from '@plone/volto/express-middleware/files';
import robotstxtMiddleware from '@plone/volto/express-middleware/robotstxt';
import sitemapMiddleware from '@plone/volto/express-middleware/sitemap';
import devProxyMiddleware from '@plone/volto/express-middleware/devproxy';
import portraitMiddleware from '@plone/volto/express-middleware/portraits';

const settings = {
  expressMiddleware: [
    devProxyMiddleware(),
    filesMiddleware(),
    imagesMiddleware(),
    portraitMiddleware(),
    robotstxtMiddleware(),
    sitemapMiddleware(),
  ],
  criticalCssPath: 'public/critical.css',
  readCriticalCss: null, // so it will be defaultReadCriticalCss
  extractScripts: { errorPages: false },
};

export default settings;
