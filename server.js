let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
const { Pool, Client } = require('pg')
let cors = require('cors');

const PORT = 3000;
const connectionString = 'postgres://lntjpzrb:WqEJbb3UKzjRlZ9SfCFO7GQ4itHsYl9j@baasu.db.elephantsql.com:5432/lntjpzrb';

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

let pool = new Pool {
  user: "postgres",
  database: "ringoyip0901",
  password: 0901,
  host: 'localhost',
  port: 3001, 
  max: 10
}


//this is when the user starts entering information on the CLIENT card
app.post("/submit", function(req, res) {
  var c_id = req.body.c_id; 
  var c_request = req.body.c_request;
  var c_path = req.body.c_path; 
  var c_component = req.body.c_component;
  var c_purpose = req.body.c_purpose;
  var c_moreInfo = req.body.c_moreInfo;

  var s_id = req.body.s_id; 
  var s_request = req.body.s_request;
  var s_path = req.body.s_path; 
  var s_url = req.body.s_url;
  var s_purpose = req.body.s_purpose;
  var s_moreInfo = req.body.s_moreInfo;

  let values = [id, request, c_path, c_component, c_purpose, c_moreInfo,s_path, s_url, s_purpose, s_moreInfo];

  pool.connect((err, db, done) => {
      if (err) {
        return res.status(400).send(err);
      }
      else {
        db.query('INSERT INTO CARDS (id, request, c_path, c_component, c_purpose, c_moreInfo, s_path, s_url, s_purpose, s_moreInfo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);', [...c_values],(err,response) => {
          done();
          console.log(err, response);
          if (err) {
            return response.status(400).send(err);
          }
          else {
            response.status(201).send({message: "data inserted"})
          }
        })
      }
  });
}


//under componentDidMount
app.get('/receive', function(request, response) {
  pool.connection(function(err, db, done) {
    if (err) {
      return response. status(400).send(err);
    }
    else {
      db.query('SELECT * from CARDS', function(err, table) {
        done();
        if(err) {
          console.log("error: ", err);
          return response.status(400).send(err);
        }
        else {
          return response.status(200).send(table.rows);
        }
      })
    }
  })
})




// // pool.query('CREATE TABLE ClIENT (ID numeric, Request varchar, Path varchar, Component varchar, Goal varchar, Additional varchar);', (err, res) => {
// //   console.log(err, res)
// //   pool.end()
// // })

// let test = ["test","test","test","test","test","test"]

// pool.query('INSERT INTO ClIENT (ID, Request, Path, Component, Goal, Additional) VALUES ($1, $2, $3, $4, $5, $6);', [...test], (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

// const client = new Client({
//   connectionString: connectionString,
// })

// client.connect()

// client.query('CREATE TABLE ClIENT (ID numeric, Request varchar, Path varchar, Component varchar, Goal varchar, Additional varchar);', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

// client.query('INSERT INTO ClIENT (ID, Request, Path, Component, Goal, Additional) VALUES ($1, $2, $3, $4, $5, $6);', [...test], (err, res) => {
//   console.log(err, res)
//   client.end()
// })

// client.query('SELECT * FROM PERSONS', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

// client.query('CREATE TABLE PERSONS2 (LITTLEpuPPie varchar);', (err, res) => {
//   console.log(err, res)
//   client.end()
// })


// client.query('CREATE TABLE PERSONS3 (littleKitten varchar);', (err, res) => {
//   console.log(err, res)
//   client.end()
// })


// client.query('INSERT INTO PERSONS3 (littleKitten) VALUES ($1)',["Cat"], (err, res) => {
//   console.log(err, res)
//   client.end()
// })


// client.query('INSERT INTO PERSONS3 (littleKitten) VALUES ($1)',["cow"], (err, res) => {
//   console.log(err, res)
//   client.end()
// })

// client.query('SELECT * FROM PERSONS3', (err, res) => {
//   console.log(err, res)
//   client.end()
// })


// app.delete('/api/remove/:id', function(request, response) {
//   var id = request.params.id;
//   pool.connect(function(err, db, done) {
//     if(err) {
//       return response.status(400).send(err);
//     }
//     else {
//       db.query('DELETE FROM recipes WHERE id = $1', [Number(id)], function(err, result) {
//         done();
//         if(err) {
//           return response.status(400).send(err);
//         }
//         else {
//           return response.status(200).send({message: 'success in deleting record'});
//         }
//       })
//     }
//   })
// })


// app.post('/api/new-recipe', function(request, response) {
//   var recipe_name = request.body.recipe_name;
//   // var continent_name = request.body.continent_name;
//   var ingredients_name = request.body.ingredients_name;
//   var description_name = request.body.description_name;
//   var id = request.body.id;
//   let values = [recipe_name, ingredients_name, description_name, id];
//   // let values = [recipe_name, continent_name, id];
//   pool.connect((err, db, done) => {
//   if(err) {
//     return response.status(400).send(err);
//   } else {
//     // db.query('INSERT INTO recipes (recipe_name, continent_name, id) VALUES($1, $2, $3)', [...values], (err, table) => {
//     db.query('INSERT INTO recipes (recipe_name, ingredients_name, description_name, id) VALUES($1, $2, $3, $4)', [...values], (err, table) => {
//       done();
//       if(err) {
//         return response.status(400).send(err);
//       } else {
//         console.log('DATA INSERTED');
//         response.status(201).send({message: 'Data inserted!'});
//       }
//     })
//   }
// })
// })

app.listen(PORT, () => console.log('Listening on port ' + PORT));