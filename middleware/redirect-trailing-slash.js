/*export default function ({ route, redirect }) {
  const hasTrailingSlash = /\/$/.test(route.fullPath);
  if (hasTrailingSlash && route.fullPath !== '/') {
    const redirectPath = route.fullPath.replace(/\/$/, '');
    redirect(301, redirectPath);
  }
}*/