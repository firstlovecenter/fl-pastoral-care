const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app: any) {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: `${process.env.PROXY}`,
      changeOrigin: true,
    })
  )
  app.listen(3000)
}
