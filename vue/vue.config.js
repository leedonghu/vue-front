module.exports = {
  outputDir: "../src/main/resources/static",
  indexPath: "../static/index.html",
  devServer: {
  		port : 8080,
  		proxy: "http://localhost:8080"
  	},
  chainWebpack: config => {
  	const svgRule = config.module.rule("svg");
  	svgRule.uses.clear();
  	svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  	},
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../../src/main/resources/static/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../../src/main/resources/static'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    productionSourceMap: true,
    devtool: '#source-map',

    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    bundleAnalyzerReport: process.env.npm_config_report
  }
};
