export const toKebabCase = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

export const toSentenceCase = (str) => {
  if (!str) return "";
  const interim = toKebabCase(str).replace(/-/g, " ");
  return interim.slice(0, 1).toUpperCase() + interim.slice(1);
};
