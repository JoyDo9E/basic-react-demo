/**
 * read me: override create-react-app webpack plugins
 * Created by pengtao on 2018/11/21
 */

// 不支持ES6的import引入
const path = require('path');
const fs = require('fs');
const resolveAppPath = dir => {
  const appDirectory = fs.realpathSync(process.cwd());
  return path.resolve(appDirectory, dir);
};

module.exports = {
    webpack: function override(config, env) {
      //do stuff with the webpack config...
      const {
        resolve: { alias },
        module: { rules },
        output
      } = config;

      // 配置相关参数以及配置项
      alias['@'] = resolveAppPath('./src'); // todo：路径赋值参数设置？
      output.publicPath = '/pub'; // todo build后的文件夹名称以及路径？
      config.devtool = process.env.SPA_ENV === 'dev' ? 'source-map' : false; // todo 报错时映射到对应的代码段

      // 配置相关plugins以及全局变量


      // 配置相关loaders
      rules.push({
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.resolve(__dirname, './src/assets/img/svg-sprite-icons') // 使用svg-sprite-loader制作svg雪碧图的路径，可使用组件式直接导入图片使用
      });

      console.log(JSON.stringify(config));

      return config;
    },
  // // The function to use to create a webpack dev server configuration when running the development
  // // server with 'npm run start' or 'yarn start'.
  // // Example: set the dev server to use a specific certificate in https.
  // devServer: function(configFunction) {
  //   // Return the replacement function for create-react-app to use to generate the Webpack
  //   // Development Server config. "configFunction" is the function that would normally have
  //   // been used to generate the Webpack Development server config - you can use it to create
  //   // a starting configuration to then modify instead of having to create a config from scratch.
  //   return function(proxy, allowedHost) {
  //     // Create the default config by calling configFunction with the proxy/allowedHost parameters
  //     const config = configFunction(proxy, allowedHost);
  //     console.log(config, 'devServerConfig');
  //     // Change the https certificate options to match your certificate, using the .env file to
  //     // set the file paths & passphrase.
  //     config.https = {
  //       key: fs.readFileSync(process.env.REACT_HTTPS_KEY, 'utf8'),
  //       cert: fs.readFileSync(process.env.REACT_HTTPS_CERT, 'utf8'),
  //       ca: fs.readFileSync(process.env.REACT_HTTPS_CA, 'utf8'),
  //       passphrase: process.env.REACT_HTTPS_PASS
  //     };
  //
  //     // Return your customised Webpack Development Server config.
  //     return config;
  //   };
  // },
  // // The paths config to use when compiling your react app for development or production.
  // paths: function(paths, env) {
  //   // ...add your paths config
  //   return paths;
  // }
};