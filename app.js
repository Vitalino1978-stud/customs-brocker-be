const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config()
const { PORT = 5000 } = process.env;
require('./bin/mongo-db-connection')


const app = express()

// const contactsRouter = require('./routes/api/contacts')
// const usersRouter = require('./routes/api/users')

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())


app.use((req, res) => {
    res.status(404).json({ message: 'Not found' })
  })
  
  app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message })
  })
  
  
  app.listen(PORT, () => {
      console.log('Server is running...')
  });
//   require('./db/db-connect')
//   module.exports = app