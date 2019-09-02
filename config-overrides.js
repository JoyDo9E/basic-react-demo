/**
 * read me: override create-react-app webpack plugins
 * Created by pengtao on 2018/11/21
 */

// 不支持ES6的import引入
const path = require('path');
const paths = require('react-scripts/config/paths');
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require("customize-cra");

const addCustomizeCongigurations = () => config => {

  const {
    module: { rules },
    output
  } = config;

  // 修改打包路径
  paths.appBuild = path.resolve(paths.appBuild, '..', 'dist');
  output.path = __dirname + '/dist';
  // 报错时映射到对应的代码段
  config.devtool = process.env.SPA_ENV === 'dev' ? 'source-map' : false;
  // 引入svg-sprite-loader
  rules.push({
    test: /\.svg$/,
    loader: 'svg-sprite-loader',
    include: path.resolve(__dirname, './src/assets/img/svg-sprite-icons') // 使用svg-sprite-loader制作svg雪碧图的路径，可使用组件式直接导入图片使用
  });

  // console.log(config);
  return config;
};

module.exports = override(
  fixBabelImports("babel-plugin-import", {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    // ident: 'less',
    // javascriptEnabled: true,
    // modifyVars: { "@primary-color": "#1DA57A" },
    strictMath: true,
    noIeCompat: true,
    localIdentName: "[local]--[hash:base64:5]"
  }),
  addWebpackAlias({
      '@': path.resolve(__dirname, "src")
  }),
  addCustomizeCongigurations()
);