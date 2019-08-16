/**
 * read me: override create-react-app webpack plugins
 * Created by pengtao on 2018/11/21
 */

// 不支持ES6的import引入
const path = require('path');
const fs = require('fs');
const resolveAppPath = dir => {
  const appDirectory = fs.realpathSync(process.cwd());
  console.log(appDirectory, 'appDirectory');
  return path.resolve(appDirectory, dir);
};

module.exports = {
    webpack: function override(config, env) {
      //do stuff with the webpack config...
      // console.log(config);
      // console.log(env);
      const {
        resolve: { alias },
        module: { rules }
      } = config;
      // alias['@'] = resolveAppPath('./src');
      rules.push({
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {

        }
      });
      return config;
    },
  // The function to use to create a webpack dev server configuration when running the development
  // server with 'npm run start' or 'yarn start'.
  // Example: set the dev server to use a specific certificate in https.
  devServer: function(configFunction) {
    // Return the replacement function for create-react-app to use to generate the Webpack
    // Development Server config. "configFunction" is the function that would normally have
    // been used to generate the Webpack Development server config - you can use it to create
    // a starting configuration to then modify instead of having to create a config from scratch.
    return function(proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const config = configFunction(proxy, allowedHost);

      // Change the https certificate options to match your certificate, using the .env file to
      // set the file paths & passphrase.
      config.https = {
        key: fs.readFileSync(process.env.REACT_HTTPS_KEY, 'utf8'),
        cert: fs.readFileSync(process.env.REACT_HTTPS_CERT, 'utf8'),
        ca: fs.readFileSync(process.env.REACT_HTTPS_CA, 'utf8'),
        passphrase: process.env.REACT_HTTPS_PASS
      };

      // Return your customised Webpack Development Server config.
      return config;
    };
  },
  // The paths config to use when compiling your react app for development or production.
  paths: function(paths, env) {
    // ...add your paths config
    return paths;
  }
};