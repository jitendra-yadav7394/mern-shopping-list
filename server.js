const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/items');

const app = express();

// bodyparsher middleware

app.use(bodyParser.json());
  
// DB Config

const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected ...'))
  .catch(err => console.log(err));

// use Routes
app.use('/api/items', items)

// Serve stattice assets if in production

if(process.env.NODE_ENV === 'production') {
  // Set Statice folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on port ${port}`))