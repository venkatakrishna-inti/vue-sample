let mix = require('laravel-mix');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('mix-html-builder');
const replace = require('replace-in-file');
require('html-webpack-template')
var fs = require('fs');

// https://github.com/JeffreyWay/laravel-mix/issues/1688 - Multiple Configs
// https://github.com/JeffreyWay/laravel-mix/issues/1717 - Build HTML
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

function correctFileNames()
{
	let obj = JSON.parse(fs.readFileSync('dist/admin/mix-manifest.json', 'utf8'));

	replace.sync({
        files: path.normalize('dist/admin/index.html'),
        from:  /"\/\//gu,
        to:    '"/'
	});

	for (var key in obj) {
	  if (obj.hasOwnProperty(key)) {
	    var val = obj[key];

	   if(process.env.NODE_ENV == 'development')
	   {
	   	 val = "/dist/admin"+val;
	   }

		replace.sync({
	        files: path.normalize('dist/admin/index.html'),
	        from:  key,
	        to:   val
		});
	  }
	}
}


mix.webpackConfig({
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/admin/index.html'
    })
  ],
});

mix.setPublicPath('dist/admin')
.sass('src/sass/app.scss', 'css/bootstrap.css')
.js('src/admin/index.js', 'js')
.extract();

if (mix.inProduction()) {
    mix.version();
}

mix.then(correctFileNames);
