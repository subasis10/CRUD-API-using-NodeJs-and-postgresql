const express = require('express');
const bodyParser = require('body-parser');
const db =require('./queries');
const app = express();
const port = 3000;
 
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
 
app.get('/', (req, res) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});
 
app.get('/users',db.getUsers)
app.post('/users',db.createUser)
app.delete('/users/:id',db.deleteUser)
app.put('/users/:id',db.updateUser)



app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
