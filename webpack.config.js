const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry:  path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    // mode: 'development',
	  module: {
	    rules: [
	      {
	        test: /\.vue$/,
	        loader: 'vue-loader'
	      },
	      // this will apply to both plain .js files
	      // AND <script> blocks in vue files
	      {
	        test: /\.js$/,
	        loader: 'babel-loader'
	      },
	      // this will apply to both plain .css files
	      // AND <style> blocks in vue files
	      {
	        test: /\.css$/,
	        use: [
	          'vue-style-loader',
	          'css-loader'
	        ]
	      },
	      // this will apply to both plain .scss files
	      // AND <style lang="scss"> blocks in vue files
	      {
	        test: /\.scss$/,
	        use: [
	          'vue-style-loader',
	          'css-loader',
	          {
	            loader: 'sass-loader',
	            options: {
	              data: '$color: red;'
	            }
	          }
	        ]
	      }
	    ]
	  },
		plugins: [
	    // make sure to include the plugin for the magic
	    new VueLoaderPlugin()
	  ]
}