import fs from 'fs'
import http from 'http'
import express from 'express'
import socketIO from 'socket.io'
import path from 'path'
import chalk from 'chalk'
import { createBackendStore } from './backendStore'

const app = express()
const server = http.Server(app)
const webSocket = socketIO(server)

const ENV = process.env.NODE_ENV || 'dev'
const PORT = /*process.env.PORT ||*/ 8080
const WEBPACK_HOST = ENV == 'dev' ? (process.env.C9_HOSTNAME || process.env.IP || 'localhost') : ''
const WEBPACK_PORT = ENV === 'dev' ? 8081 : PORT

const indexHtml = new Promise((resolve, reject) => fs.readFile(
    path.resolve(__dirname, '..', 'assets', 'index.html'), 
    (err, data) => err ? reject(err) : 
        resolve(data.toString().split('{HOSTNAME}').join(`//${WEBPACK_HOST}:${WEBPACK_PORT}`))
))

const store = createBackendStore()

app.use('/assets', express.static(
    path.resolve(__dirname, '..', 'assets')))
    
app.get('/', (req, res) => indexHtml.then(data => {
    res.set('Content-Type', 'text/html')
    res.send(data)
}))

webSocket.on('connection', socket => {
    socket.on('action', action => store.dispatch(action))
})

server.listen(PORT)
console.log(`Server running on port ${chalk.red(PORT)}, environement: ${chalk.blue(ENV)}`)
