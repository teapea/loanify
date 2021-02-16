var express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
app.use(bodyParser.json());
app.use(cors())




const mysql = require('mysql');

const PORT = process.env.PORT || 3001;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tope$1261989',
  database: 'loanifydb'
});

connection.connect((err) => {
 
if (err) 
  {
  console.log("Error :"+err);
  }
  else
  {
  console.log('Connected!');
  }
});


// const author = { idtest_table: 5, test_col: 'Adekayero Tope' };
// connection.query('INSERT INTO test_table SET ?', author, (err, res) => {
//   if(err) throw err;

//   console.log('Last insert ID:', res.insertId);
// });



//   connection.query(
//     'UPDATE authors SET city = ? Where ID = ?',
//     ['Leipzig', 3],
//     (err, result) => {
//       if (err) throw err;
  
//       console.log(`Changed ${result.changedRows} row(s)`);
//     }
//   );

app.post('/api/getUser', (req, res) => {
  
    let data = [req.body.username,req.body.password];

    console.log(data)

    connection.query('SELECT * FROM users where user_id= ? and password = ?',data, (err,rows) => {
    if (err) 
    {
    console.log("Error :"+err);
    }
    else
    {
        res.send(rows[0]);
    
   
    }
  });
    

   
});



app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });




app.listen(3000, () => {
 console.log("Server running on port 3000");
});

