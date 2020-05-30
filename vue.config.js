module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/docs/i-piaceri-restaurant/'
        : '/',
    outputDir: "docs"
};