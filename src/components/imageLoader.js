const importAll = (r) => r.keys().map(r);
const images = importAll(require.context("../images", false, /\.(png|jpe?g|svg)$/));

export { images };
