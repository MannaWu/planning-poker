import http from 'http'
import express from 'express'
import path from 'path'
import chalk from 'chalk'

const app = express()
const server = http.Server(app)

const PORT = process.env.PORT || 8081
const ENV = process.env.NODE_ENV || 'dev'

app.use('/assets', express.static(
    path.resolve(__dirname, '..', 'assets')))
app.get('/*', (req, res) => res.sendFile(
    path.resolve(__dirname, '..', 'assets', 'index.html')))

server.listen(PORT)
console.log(`Server running on port ${chalk.red(PORT)}, environement: ${chalk.blue(ENV)}`)
