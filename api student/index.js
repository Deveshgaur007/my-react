const express = require('express');
const User = require('./user');
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

// app.get('/',(req,res)=>{
//     res.send("helo")
// })

app.post('/submit',async(req,res)=>{
    let user = new User(req.body);
    let result = await user.save()
    res.send(result)
})

app.get('/',async(req,res)=>{
    let students = await User.findAll();
    if(students.length>0){
        res.send(students)
    }else{
        res.send({result:"No data "})
    }
})

// app.delete('/student/:id', async(req,res)=>{
//     const result = await User.DeleteOne({id:req.params.id})
//     res.send(result)
// })

app.delete('/student/:id', async(req,res)=>{
    const {id} = req.params;
    const result = await User.findByPk(id);
    await result.destroy(); 
    res.send(result)
    
})

app.get('/students/:id', async(req,res)=>{
    // const {id} = req.params;
    const result = await User.findByPk(req.params.id); 
    res.send(result)
})

// app.get('/student/:id', async(req,res)=>{
//     // const {id} = req.params;
//     const result = await User.findOne({
//         where:{
//             id:req.params.id
//         }
//     }); 
//     res.send(result)
//     console.log(result)
// })

// app.get('/students/:id', async (req, res) => {
//     try {
//       const user = await User.findOne({
//                 where:{
//                     id:req.params.id
//                 }
//             }); 
//       res.json(user);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     }
//   });
  



app.listen(1000);