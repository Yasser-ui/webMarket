import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'
import bidding from './controllers/bidding.controller'

// connection URL
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/webMarket', { useNewUrlParser: true, /*useCreateIndex: true,*/ useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
    console.log("Mongo connected")
})
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUrl}`)
})

const server = app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})

bidding(server)