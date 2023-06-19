const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use('/api/hidden-sourcemap', express.static(path.join(__dirname, '../static/hidden-sourcemap'), {
    setHeaders(res) {
      const url = res.req.originalUrl;
      if (url.endsWith('.js')) {
        res.setHeader('SourceMap', url + '.map');
      }
    }
  }))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
