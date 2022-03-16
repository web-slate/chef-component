# CSS Webpack Guidelines

If you create the component with CSS enabled. You will need to install `style-loader` and `css-loader`


``` 
npm install --save-dev style-loader css-loader
```

Then add the plugin to your webpack config. 

```
{
  test: /\.css$/i,
  use: ["style-loader", "css-loader"],
}
```
For Example: 

#### webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

```
