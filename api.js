const express = require ('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/', async(req,resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    resp.send(data)
});

app.post('/',async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.insert(req.body)

    resp.send(result)
})

app.put('/', async(req,resp)=>{
    let data = await dbConnect();
    let result = data.updateOne(
      { name:"nokia 1200"},
      {$set:{price:1200}}
    )
    resp.send({result:"update"})
})

app.listen(4700)