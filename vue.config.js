module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/i-piaceri-restaurant/'
        : '/',
    outputDir: "docs"
};