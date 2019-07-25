import React, { Component } from 'react';
import image1 from './images/android-icon-72x72.png';
import { Row, Col } from 'react-bootstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {connect} from 'react-redux';  
import {sendFORSAVETchInformation} from './../Redux/Action/action';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import {AddToFirebase} from './../Redux/Action/action';
// import {addCounter} from '../redux/action/action';
export class TeacherForm extends Component {
  notifyA = () => toast.error('Sorry you are not authorized!', {containerId: 'A'});
  notifyB = () => toast.warn('All Field Are Required!', {containerId: 'B'});
  state={
    Employee:{
      name:'',
      age:'',
      qul:'',
      dob:'',
      add:'',
      phone:'',

    },
    initial:false,


  };
  handle=(event)=>{
    var name=event.target.name;
    var value=event.target.value;
    this.setState({[name]:value});
      }
    
      checkReqFields=()=>{
        var returnValue;
        var name=document.getElementById("name").value;
        var age=document.getElementById("age").value;
        var phone=document.getElementById("phone").value;
        var dob=document.getElementById("dob").value;
        var qualification=document.getElementById("qul").value;
        var address=document.getElementById("add").value;
       
        returnValue=true;
        if(name.trim()==""){
          document.getElementById("show").innerHTML="* Name is required.";
          returnValue=false;
        }
        if(age.trim()==""){
          document.getElementById("show").innerHTML="* Age is required.";
          returnValue=false;
        }	
        if(phone.trim()==""){
          document.getElementById("show").innerHTML="* Phone is required.";
          returnValue=false;
        }	
        if(dob.trim()==""){
          document.getElementById("show").innerHTML="* DOB is required.";
          returnValue=false;
        }
        if(qualification.trim()==""){
          document.getElementById("show").innerHTML="Qualification  is required.";
          returnValue=false;
        }
        if(address.trim()==""){
          document.getElementById("show").innerHTML="* Address is required.";
          returnValue=false;
        }								
        return returnValue;
      } 
    
    
  
      sendFORSAVETchInformation = () =>{
        // this.MatchBothPassword();
        var a = this.checkReqFields()
        if(a===true){
          var obj= {
            name:this.state.name,
            age:this.state.age,  
            qul:this.state.qul,
            dob:this.state.dob,
            add:this.state.add,  
            phone:this.state.phone,
          
      
          }
  
      this.props.sendFORSAVETchInformation(obj);   //action waly AddRecordToStore function ko call kia,
     // this.props.AddToFirebase(obj); if we want to store data on firebase regardless od node js/MongoDb
    this.props.history.push('/TeacherDashboard');
        }
         else{
          this.notifyB();
         }
          
  
         }
        
  
  render() {
    return (
     
      <div>
            
<html style={{height:"100%"}}>
  <head>
    <title>form</title>
  </head>
  <body>
  <Row>
    {/*............................................Top Left Corner*/}
    <Col xs={12} sm={12} lg={3} md={3}  style={{backgroundColor:'gray',float:"left"}}>
    <img src={image1} style={{borderRadius:"50%", marginTop:"20px", marginLeft:"20px"}} />
    <p style={{display:"inline",marginLeft:"20px", marginTop:"50px", fontFamily:"cursive", fontSize:"20px"}}>Qasim<br/>Join Date: 10-03-2019 </p>
    
    </Col>
    {/*............................................End of Top Left Corner*/}
    <Col xs={12} sm={12} lg={9} md={9}  style={{backgroundColor:'orange',float:"left",backgroundColor:"purple",borderBottomRightRadius:"200px"}}>
    <center><p style={{paddingTop:"30px", paddingLeft:"50px", color:"white", fontFamily:"cursive", fontSize:"40px"}} >Teacher Information</p></center>
     </Col>
{/*............................................End of Top Right Corner*/}
</Row>
<Row>
  {/*............................................2nd Left Corner*/}
    <Col xs={12} sm={12} lg={3} md={3}  style={{borderRight:"1px black solid", backgroundColor:"", float:"left"}}>
    
    <p style={{fontsize:"13px"}}>&nbsp;For Tutuor Finder</p><br/>

 
<List component="nav"  >
     <ListItem button>
    <Link to="/dashboard">   <ListItemText primary="Dashboard"  /> </Link>
     </ListItem>
     <Divider />
     <ListItem button divider>
   <Link to="/Edit">    <ListItemText primary="Edit" /> </Link>
     </ListItem>
     <ListItem button>
       <ListItemText primary="Tasks" />
     </ListItem>
     <Divider light />
     <ListItem button>
       <ListItemText primary="Spam" />
     </ListItem>
   </List>
    
    </Col>
    <Col xs={12} sm={12} lg={9} md={9}  style={{backgroundColor:''}}>
    <form >
    <Row style={{height:'px', width:'px'}}> 
                            <Col xs={12} sm={6} lg={6} md={6} style={{ height:'70px' ,backgroundColor:''}}><FormControl margin="normal" required="required" fullWidth style={{marginLeft:"50px"}}>
            <InputLabel htmlFor="email">Name</InputLabel>
            <Input id="name" name="name" onChange={this.handle} required="required" autoComplete="email" autoFocus required style={{width:"300px"}} />
        </FormControl></Col>


                            <Col xs={12} sm={6} lg={6} md={6}  style={{ backgroundColor:'',height:'70px', paddingTop: "0px", fontFamily: "cursive", fontSize: "25px" }} > <FormControl margin="normal" required="required" fullWidth style={{marginLeft:"50px"}}>
            <InputLabel htmlFor="age">Age</InputLabel>
            <Input id="age" name="age" onChange={this.handle}   autoFocus required style={{width:"300px"}} />
        </FormControl></Col>
                            
    </Row>
    <Row style={{height:'px', width:'px'}}> 
                            <Col xs={12} sm={6} lg={6} md={6} style={{ height:'70px' ,backgroundColor:''}}><FormControl margin="normal" required="required" fullWidth style={{marginLeft:"50px"}}>
            <InputLabel htmlFor="qul">Qualification/Major Subjects</InputLabel>
            <Input id="qul" name="qul" onChange={this.handle} required="required" autoComplete="email" autoFocus required style={{width:"300px"}} />
        </FormControl></Col>


                            <Col xs={12} sm={6} lg={6} md={6}  style={{ backgroundColor:'',height:'70px', paddingTop: "0px", fontFamily: "cursive", fontSize: "25px" }} > <FormControl margin="normal" required="required" fullWidth style={{marginLeft:"50px"}}>
         <InputLabel htmlFor="dob"></InputLabel>
            <Input type="date" id="dob" name="dob" onChange={this.handle}   autoFocus required style={{width:"300px"}} />
        </FormControl></Col>
                            
    </Row>


    <Row style={{height:'px', width:'px'}}> 
                            <Col xs={12} sm={6} lg={6} md={6} style={{ height:'70px' ,backgroundColor:''}}><FormControl margin="normal" required="required" fullWidth style={{marginLeft:"50px"}}>
            <InputLabel htmlFor="add">Address</InputLabel>
            <Input id="add" name="add" onChange={this.handle} required="required" autoComplete="email" autoFocus required style={{width:"300px"}} />
        </FormControl></Col>


                            <Col xs={12} sm={6} lg={6} md={6}  style={{ backgroundColor:'',height:'70px', paddingTop: "0px", fontFamily: "cursive", fontSize: "25px" }} > <FormControl margin="normal" required="required" fullWidth style={{marginLeft:"50px"}}>
            <InputLabel htmlFor="phone">Phone Number</InputLabel>
            <Input id="phone" name="phone" onChange={this.handle}   autoFocus required style={{width:"300px"}} />
        </FormControl></Col>
                            
    </Row>
    <Row>
      <Col xs={12} sm={6} lg={6} md={6}>
      <Button
          
          fullWidth
          variant="contained"
          color="primary"
          style={{width:"200px", marginLeft:"70px", marginTop:"50px" , borderRadius:"50px",fontFamily:"cursive", backgroundColor:"purple"}}
         onClick={this.sendFORSAVETchInformation}
        
        >
        
          Save Record
      </Button>
      </Col>
      <Col xs={12} sm={6} lg={6} md={6}>
      <span id="show" style={{borderRadius:"200px", boxShadow:"6px 5px 2px purple", fontFamily:"cursive"}}></span>
      </Col>
    </Row>
    </form>
    </Col>
</Row>
  </body>
</html>

<div>
            <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_LEFT} />
            <ToastContainer enableMultiContainer containerId={'B'} position={toast.POSITION.TOP_RIGHT} />
            
            {/* <button onClick={this.notifyA}>Notify A !</button>
            <button onClick={this.notifyB}>Notify B !</button> 
            <button onClick={this.notify}>Notify</button>; */}
         
        </div>
      </div>
    )
  }
}

export default connect(null, {sendFORSAVETchInformation })  (TeacherForm)

