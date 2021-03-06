const path = require('path');
module.exports = {
  publicPath: "/",
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    resolve: {
      alias: {
        'src': path.join(__dirname, 'src/'),
        'components': path.join(__dirname, 'src/components/')
      },
      extensions: ['.js', '.vue', '.json', '.scss']
    }
  }

}