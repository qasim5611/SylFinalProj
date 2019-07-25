
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
//
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://qasim:qasim5611@cluster0-f0hna.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true},function (err) {
 
if(err){
    console.log('err',err)
}
else{
    console.log('successfully connected');
       
}
    
});


const Schema = mongoose.Schema;


const Student = new Schema({
    name: String,
    email: String,
    password: String,
    date: { type: Date, default: Date.now },
    
  });
  const Teacher = new Schema({
    name: String,
    email: String,
    password: String,
    date: { type: Date, default: Date.now },
    
  });
  const StudentInfo = new Schema({
    name: String,
    age: String,
    phone: String,
    dob: String,
    sub: String,
    add: String,
    date: { type: Date, default: Date.now },    
  });
  const TeacherInfo = new Schema({
    name: String,
    age: String,
    phone: String,
    dob: String,
    qul: String,
    add: String,
    date: { type: Date, default: Date.now },    
  });
const conmenetTable = mongoose.model('Student',Student);

const studentTable = mongoose.model('StudentInfo',StudentInfo);
const commentTable = mongoose.model('Teacher',Teacher);
const teacherTable = mongoose.model('TeacherInfo',TeacherInfo);
// app.get('/',function (req,res) {

//     console.log('request from /');
    
//      var data = {
//          name:'usama',
//          age:'21'
//      }
//     res.json(data);
// });


app.post('/savetodb',function (req,res) {

    console.log('request recive');

    let saveNewRow = new conmenetTable();

    saveNewRow.name = req.body.name;
    saveNewRow.email = req.body.email;
    saveNewRow.password = req.body.password;
  
    saveNewRow.save((err,save)=>{
        
       if(err){
           res.json('error occored')
       }

       else{
       res.json(save);  //


       }
      
    });

  
    ////////////////////////////////////////////////
    
    
});
app.post('/sendToActionFORSAVETeacher',function (req,res) {

  console.log('request recive');

  let saveNewRow = new commentTable();

  saveNewRow.name = req.body.name;
  saveNewRow.email = req.body.email;
  saveNewRow.password = req.body.password;

  saveNewRow.save((err,save)=>{
      
     if(err){
         res.json('error occored')
     }

     else{
     res.json(save);  //


     }
    
  });


  ////////////////////////////////////////////////
  
  
});
app.post('/getDataFromDB',function (req,res) {

   // .findOne()
    // .find()
  
    conmenetTable
      .find()
     // .where("name")
      // .in(['namme','Asif','Naveed'])
      // .and([{age:21},{name:'Naveed'}])
      // .and([{age:21},{name:'Asif'}])
      //.equals("qasim")
    //   .where("age")
    //   .lt(50)
    //   .gte(12)
    //   .limit(2)
    //   .sort({ age: -1 })
    //   .select("name age")
      .exec(function(err, data) {
        if (err) {
          console.log(err);
  
          res.json("error");
        }
        res.json(data);
        // athletes contains an ordered list of 5 athletes who play Tennis
      });
    
    
    
});
app.post('/sendToActionFORRetriveTeacher',function (req,res) {

  // .findOne()
   // .find()
 
   commentTable
     .find()
    // .where("name")
     // .in(['namme','Asif','Naveed'])
     // .and([{age:21},{name:'Naveed'}])
     // .and([{age:21},{name:'Asif'}])
     //.equals("qasim")
   //   .where("age")
   //   .lt(50)
   //   .gte(12)
   //   .limit(2)
   //   .sort({ age: -1 })
   //   .select("name age")
     .exec(function(err, data) {
       if (err) {
         console.log(err);
 
         res.json("error");
       }
       res.json(data);
       // athletes contains an ordered list of 5 athletes who play Tennis
     });
   
   
   
});

app.post('/sendFORSAVEStdInformation',function (req,res) {

  console.log('request recive',req.body.name);

  let saveNewRow = new studentTable();

  saveNewRow.name = req.body.name;
  saveNewRow.age = req.body.age;
  saveNewRow.sub = req.body.sub;
  saveNewRow.dob = req.body.dob;
  saveNewRow.add = req.body.add;
  saveNewRow.phone = req.body.phone;
  
 
  saveNewRow.save((err,save)=>{
      
     if(err){
         res.json('error occored')
     }

     else{
     res.json(save);  //


     }
    
  });
  
 

  ////////////////////////////////////////////////
  
  
});


app.post('/sendFORSAVETchInformation',function (req,res) {

  console.log('request recive',req.body.name);

  let saveNewRow = new teacherTable();

  saveNewRow.name = req.body.name;
  saveNewRow.age = req.body.age;
  saveNewRow.qul = req.body.qul;
  saveNewRow.dob = req.body.dob;
  saveNewRow.add = req.body.add;
  saveNewRow.phone = req.body.phone;
  
 
  saveNewRow.save((err,save)=>{
      
     if(err){
         res.json('error occored')
     }

     else{
     res.json(save);  //


     }
    
  });
  
 

  ////////////////////////////////////////////////
  
  
});
app.post('/sendToActionFORRetriveStdInfo',function (req,res) {

  // .findOne()
   // .find()
 
   studentTable
     .find()
    // .where("name")
     // .in(['namme','Asif','Naveed'])
     // .and([{age:21},{name:'Naveed'}])
     // .and([{age:21},{name:'Asif'}])
     //.equals("qasim")
   //   .where("age")
   //   .lt(50)
   //   .gte(12)
   //   .limit(2)
   //   .sort({ age: -1 })
   //   .select("name age")
     .exec(function(err, data) {
       if (err) {
         console.log(err);
 
         res.json("error");
       }
       res.json(data);
       // athletes contains an ordered list of 5 athletes who play Tennis
     });
   
   
   
});

app.post('/sendToActionFORRetriveTchInfo',function (req,res) {

  // .findOne()
   // .find()
 
   teacherTable
     .find()
    // .where("name")
     // .in(['namme','Asif','Naveed'])
     // .and([{age:21},{name:'Naveed'}])
     // .and([{age:21},{name:'Asif'}])
     //.equals("qasim")
   //   .where("age")
   //   .lt(50)
   //   .gte(12)
   //   .limit(2)
   //   .sort({ age: -1 })
   //   .select("name age")
     .exec(function(err, data) {
       if (err) {
         console.log(err);
 
         res.json("error");
       }
       res.json(data);
       // athletes contains an ordered list of 5 athletes who play Tennis
     });
   
   
   
});


app.post("/DeleteStdRecordFromStore", function(req, res) {

  console.log('server area' , req);
  studentTable
     .findOneAndDelete()
     .where("_id")
     .equals(req.body.id)
     .exec(function(err, data) {
       if (err) {
         console.log(err);
 
         res.json("error");
       }
       else{
       res.json(data);
       console.log( "deleted data" ,    data);
       
       }
       // athletes contains an ordered list of 5 athletes who play Tennis
     });
 });

 app.post("/DeleteTchRecordFromStore", function(req, res) {

  console.log('server area' , req);
  teacherTable
     .findOneAndDelete()
     .where("_id")
     .equals(req.body.id)
     .exec(function(err, data) {
       if (err) {
         console.log(err);
 
         res.json("error");
       }
       else{
       res.json(data);
       console.log( "deleted data" ,    data);
       
       }
       // athletes contains an ordered list of 5 athletes who play Tennis
     });
 });
 



























  app.post("/UpdateDataFromDB", function(req, res) {

    console.log('server area' , req);
    conmenetTable
       .findOneAndDelete()
       .where("_id")
       .equals(req.body.id)
       .exec(function(err, data) {
         if (err) {
           console.log(err);
   
           res.json("error");
         }
         else{
         res.json(data);
         console.log( "deleted data" ,    data);
         
         }
         // athletes contains an ordered list of 5 athletes who play Tennis
       });
   });
   app.post("/EdityourInfo", function(req, res) {

     console.log('server area to check' , req.body.id);

// conmenetTable.findByIdAndUpdate("req.body.id",{name:req.body.name,age: req.body.age, phone: req.body.phnumber},{new:true},(err,data)=>{

// })

    conmenetTable
    .findOneAndUpdate()
       .where("_id")
       .equals(req.body.id)
       .set({ 
         name: req.body.name,
         age: req.body.age,
         phone: req.body.phnumber
      

         
      })
       .exec(function(err, data) {
         if (err) {
           console.log(err);
   
           res.json("error");
         }
         else{
         res.json(data);
         console.log( "Edited  data" ,    data);
         
         }
         // athletes contains an ordered list of 5 athletes who play Tennis
       });
   });





app.post('/test',function (req,res) {

     console.log('test');
    
    res.json('test');
});

// app.use(express.static('./public'));

// const PORT = process.env.PORT || 5000

app.listen(3030, function () {
    console.log('express server running on port 3030 ');
});