
const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'newDB',
  password: 'sububhai123',
  port: 5432,
});

//crud operations with postgresql
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (err, results) => {
      if (err) {
        throw err;
      }
      response.status(200).json(results.rows);
    });
  };
  const createUser = (req,res) => {
    const {name,email} = req.body
    pool.query("INSERT INTO users (name, email) VALUES($1, $2) RETURNING *",[name,email],(err,results) =>{
    if (err){
        throw err;
    }
    res.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
    );
  };
  

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
 
 pool.query('DELETE FROM users WHERE id = $1', [id], (err, results) => {
   if (err) {
      throw err;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};
const updateUser = (req, res) => {
    const id = parseInt(request.params.id);
    const {name,email } = req.body;
   
    pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (err, results) => {
        if (err) {
          throw err;
        }
        res.status(200).send(`User modified with ID: ${id}`);
      }
    );
};


  module.exports={
    getUsers,
    createUser,
    deleteUSer,
    updateUser
 }