const repositoryName = "Suchandra_UX-portfolio";

const basePath =
  process.env.NODE_ENV === "production"
    ? `/${repositoryName}`
    : "";

export function assetPath(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}