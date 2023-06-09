export default function (req, res, next) {
    const hasTrailingSlash = req.url.endsWith('/');
  
    if (hasTrailingSlash && req.url !== '/') {
      const withoutTrailingSlash = req.url.slice(0, -1);
      res.writeHead(301, {
        Location: withoutTrailingSlash
      });
      res.end();
    } else {
      next();
    }
  }