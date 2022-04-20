const express = require('express');
const res = require('express/lib/response');
const cors = require('cors');
const { request } = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

  app.get('/', (req,res) =>{
      res.send('oh no! node is ruing .')
  });

const users =[
    {id:1 ,name: 'sajeeb' , email: "sajeeb@gmail.com" , phone:'07109222222'},
    {id:2 ,name: 'hasan' , email: "hasan@gmail.com" , phone:'07109222222'},
    {id:3 ,name: 'nil' , email: "nil@gmail.com" , phone:'07109222222'},
    {id:4 ,name: 'hablu' , email: "hablu@gmail.com" , phone:'07109222222'},
    {id:5 ,name: 'javascript' , email: "javascript@gmail.com" , phone:'07109222222'},
];

  app.get('/users', (req,res)=>{
    //filter by query parameter
    if(req.query.name){
      const search = req.query.name.toLowerCase();
      const matched = users.filter(user=> user.name.toLowerCase().includes(search));
      res.send(matched)
    }
      else{
        res.send(users);
      }
  })

  app.get('/user/:id', (req,res)=>{
      console.log(req.params);
      const id = req.params.id;
      const user =  users.find(u=> u.id==id);
      res.send(user);
  })


  app.post('/user', (req,res) =>{
    console.log("request", req.body);
    const user= req.body;
    user.id= users.length+1;
    users.push(user);
    res.send(user);
  })


  app.listen(port, () => {
    console.log('listening to port', port);
  });
