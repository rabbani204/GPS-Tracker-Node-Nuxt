const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const routes = require('./routes')
var bodyParser = require('body-parser');

var db = require('./db/db');
if( db ){
  console.log('db connected')
}

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use('/api', routes);
  
  app.use(nuxt.render)

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
