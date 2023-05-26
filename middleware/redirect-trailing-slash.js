export default function ({ route, redirect }) {
    if (route.path !== '/' && route.path.endsWith('/')) {
      const pathWithoutTrailingSlash = route.path.slice(0, -1);
      redirect(301, pathWithoutTrailingSlash);
    }
  }
  