------------------------------------------
	HOW WAS THIS REACT STARTER CREATED
------------------------------------------

Ran the following bash command:

	$ npm init
	$ npm install --save-dev webpack webpack-dev-server react react-dom
	$ npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-es2015 // babel plugins
	$ mkdir app
	$ touch index.html index.js webpack.config.js app/App.js .gitignore

Now I wrote the content of each file:

	index.html - entry point
	bundle.js - the final js file (created by webpack) containing all of the app (and depedencies)
	index.js - loads the react app (renders <App/> into the root DOM element)

Added the following npm scripts to package.json:

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
	"start": "webpack-dev-server --hot", // also enables hot module reloading
	"build": "webpack" // will create 'bundle.js' in the root directory
  },