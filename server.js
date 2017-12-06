let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
// const { Pool, Client } = require('pg')
let cors = require('cors');

const PORT = 3000;
// const connectionString = 'postgres://lntjpzrb:WqEJbb3UKzjRlZ9SfCFO7GQ4itHsYl9j@baasu.db.elephantsql.com:5432/lntjpzrb';
let pool = new pg.Pool ({
  user: "postgres",
  database: "ringoyip0901",
  password: '0901',
  host: 'localhost',
  port: 3001, 
  max: 10,
});

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// const pool = new Pool({
//   // user: 'lntjpzrb',
//   // database: 'lntjpzrb',  
//   // password: 'WqEJbb3UKzjRlZ9SfCFO7GQ4itHsYl9j',
//   // // host: 'localhost',
//   // port: 5432,  
//   // max: 10
//   connectionString: connectionString,
//   // user: 'lntjpzrb',
//   // database: 'lntjpzrb',
//   // password: 'WqEJbb3UKzjRlZ9SfCFO7GQ4itHsYl9j'
// });



//this is when the user starts entering information on the CLIENT card
app.post("/api/submit", function(req, res) {
  console.log('line 50', req.body)
  console.log("line 51",req.body.id)
  var id = req.body.id; 
  var request = req.body.request;
  var c_path = req.body.c_path; 
  var c_component = req.body.c_component;
  var c_purpose = req.body.c_purpose;
  var c_moreInfo = req.body.c_moreInfo;

  // var s_id = req.body.s_id; 
  // var s_request = req.body.s_request;
  var s_path = req.body.s_path; 
  var s_url = req.body.s_url;
  var s_purpose = req.body.s_purpose;
  var s_moreInfo = req.body.s_moreInfo;

  let values = [id, request, c_path, c_component, c_purpose, c_moreInfo, s_path, s_url, s_purpose, s_moreInfo];

  pool.connect((err, db, done) => {
      if (err) {
        console.log("error at line 70")
        return res.status(400).send(err);
      }
      else {
        db.query('INSERT INTO cards (id, request, "c_path", "c_component", "c_purpose", "c_moreInfo", "s_path", "s_url", "s_purpose", "s_moreInfo") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', [...values],(err,table) => {
          done();
          // console.log(err, res);
          if (err) {
            console.log('error at line 78')
            // console.log(err)
            return res.status(400).send(err);
          }
          else {
            res.status(201).send({message: "data inserted"})
            // db.end();
          }
        })
      }
  });
});


//under componentDidMount
app.get('/api/receive', function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response. status(400).send(err);
    }
    else {
      db.query('SELECT * from cards', function(err, table) {
        done();
        if(err) {
          console.log("error: ", err);
          return response.status(400).send(err);
        }
        else {
          console.log(table.rows)
          return response.status(200).send(table.rows);
        }
      })
    }
  })
})


//delete request
app.delete('/api/remove/:id', function(request, response) {
  const id = request.params.id;
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } 
    else {
      db.query('DELETE FROM cards WHERE id = $1', [Number(id)], function(err, result) {
        done();
        if(err) {
          return response.status(400).send(err);
        } 
        else {
          return response.status(200).send({message: 'Success in deleting record'})
        }
      })
    }
  })
})


app.listen(PORT, () => console.log('Listening on port ' + PORT));

