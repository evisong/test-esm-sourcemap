const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use('/hidden-sourcemap', express.static(path.join(__dirname, '../', 'hidden-sourcemap'), {
    setHeaders(res) {
      const url = res.req.originalUrl;
      if (url.endsWith('.js')) {
        res.setHeader('SourceMap', url + '.map');
      }
    }
  }))
  .use(express.static(path.join(__dirname, '../', 'static')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
