module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Jake Gadaleta","short_name":"Jake Gadaleta","start_url":"/gatsby-starter-cv","background_color":"#ffffff","theme_color":"#25303B","display":"minimal-ui","icon":"src/assets/logo.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"a37efe012984ec79ee39e1bef08d58da"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-000000000-1"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
