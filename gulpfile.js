// Load Gulp plugins
var gulp              = require('gulp');
var gutil             = require('gulp-util');
var HtmlPlugin        = require('html-webpack-plugin');
var ModernizrPlugin   = require('modernizr-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var param             = require('jquery-param');
var path              = require('path');
var webpack           = require('webpack');
var WebpackDevServer  = require('webpack-dev-server');

var scssIncludePaths = {
  includePaths: [
    './node_modules/bourbon/app/assets/stylesheets/',
  ]
};

var scssIncludeParams = decodeURIComponent(param(scssIncludePaths));

var webpackConfig = {

  entry: {
    app: ['./entry.js'],
    styles: ['./styles/app.scss']
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },

  plugins: [
    new ModernizrPlugin({}),
    new HtmlPlugin({
      template: 'index.html',
      inject: false
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: ['public', 'node_modules']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: "style-loader!css?sourceMap!resolve-url!sass?sourceMap&outputStyle=expanded&" + scssIncludeParams },
      { test: /\.css$/, loader: "style-loader!css?sourceMap" },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: "url?name=images/[name].[ext]&limit=8192", include: path.resolve(__dirname, 'public', 'assets', 'images') },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=100000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\D+)?$/, loader: "url?limit=100000&mimetype=image/svg+xml" }
    ]
  }

};

var webpackPort = process.env.PORT || 8080;

gulp.task("webpack:dev", function(callback) {
  var devConfig = Object.create(webpackConfig);
  devConfig.entry.styles.unshift('webpack/hot/dev-server');
  devConfig.entry.app.unshift('webpack/hot/dev-server');
  devConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:' + webpackPort);
  devConfig.devtool = "sourcemap";
  devConfig.debug = true;
  devConfig.output.publicPath = "http://localhost:" + webpackPort + "/";
  devConfig.plugins = devConfig.plugins.concat(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:' + webpackPort + "/webpack-dev-server/bundle" })
  );

  // start a new webpack-dev-server
  new WebpackDevServer(webpack(devConfig), {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: {
      colors: true
    }
  }).listen(webpackPort, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:"+webpackPort+"/webpack-dev-server/index.html");
  });
});

gulp.task("webpack:build", function(callback) {
  var prodConfig = Object.create(webpackConfig);
  prodConfig.plugins = prodConfig.plugins.concat(
    // new webpack.DefinePlugin({
    //   "process.env": {
    //     "NODE_ENV": JSON.Stringify("production")
    //   }
    // }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );

  // run webpack
  webpack(prodConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('default', ['webpack:dev']);
