import React, { Component } from 'react'
import {Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {sendToActionFORSAVEStudent} from './../Redux/Action/action';

import {connect} from 'react-redux'; 
import logo from './images/ic_border_color_white_18dp.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';




export class StudentSignUp extends Component {
  
  state={
    Student:{
      name:'',
      email:'',
      password:'',
      cpassword:'',
      

    },
    initial:false,


  };
  handle=(event)=>{
    var name=event.target.name;
    var value=event.target.value;
    this.setState({[name]:value});
      }
    
   
  //   check=()=>{
  //     var name =document.getElementById("name").value;
  //         var email =document.getElementById("email").value;
  //   var password =document.getElementById("password").value;
  //   if(name=== " " || email==='' || password=== '' ){
  //     alert('Please Enter All Fields');

    
  //   } 
  // }
  checkReqFields=()=>{
		var returnValue;
		var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
		var cpassword=document.getElementById("cpassword").value;
		returnValue=true;
		if(name.trim()==""){
			document.getElementById("confmPass").innerHTML="* Name is required.";
			returnValue=false;
		}
		if(email.trim()==""){
			document.getElementById("confmPass").innerHTML="* Email is required.";
			returnValue=false;
    }	
    if(password.trim()==""){
			document.getElementById("confmPass").innerHTML="* Password is required.";
			returnValue=false;
    }	
    if(password.trim()!==cpassword.trim()){
			document.getElementById("confmPass").innerHTML="* Password is not match.";
			returnValue=false;
		}								
		return returnValue;
	} 
  
    sendToActionFORSAVEStudent = () =>{
      // this.MatchBothPassword();
      var a = this.checkReqFields()
      if(a===true){
        var obj= {
          name:this.state.name,
          email:this.state.email,  
          password:this.state.cpassword
    
        }

    this.props.sendToActionFORSAVEStudent(obj);   //action waly AddRecordToStore function ko call kia,
   // this.props.AddToFirebase(obj); if we want to store data on firebase regardless od node js/MongoDb
  //this.props.history.push('/RetriveDataFromDb');
      }
       else{
         alert('Sorry');
       }
        

       }
      
        







  /////////////////////////////
  validatePassword=()=>{
    var a=document.getElementById("password").value;

  //  document.getElementById("msg").innerHTML=a;
  var specialCharacter="!~#$%^&*@_";
  var passScore=0;
  for(var i=0; i< a.length; i++){
    if(specialCharacter.indexOf(a.charAt(i)) > -1 ){
passScore +=20;
    }
  }

  if(/[a-z]/.test(a)){
    passScore +=20;
  }
  if(/[A-Z]/.test(a)){
    passScore +=20;
  }
  if(/[\d]/.test(a)){
    passScore +=20;
  }
  if( a.length >= 4){
    passScore +=20;
  }
  var strength="";
  var backgroundColor="";
  if(passScore >= 100){
    strength="strong";
    backgroundColor="green";

  }
  else if(passScore >= 80){
    strength="Medium";
    backgroundColor="purple";

  }
  else if(passScore >= 60){
    strength="Weak";
    backgroundColor="gray";

  }
  else{
    strength="very weak";
    backgroundColor="red";

  }
  document.getElementById("msg").innerHTML= strength;
  document.getElementById("password").style.backgroundColor= backgroundColor;

}
MatchBothPassword=()=>{
  var password1 = document.getElementById("password").value;
  var password2 = document.getElementById("cpassword").value;
  var leftdiv = document.getElementById("confmPass");
 
        // If password not entered 
        
      if(password1 != password2) {
          leftdiv.innerHTML="\n OOPs Password did not match: Please try again...";
          return false;
      }
      else if(password1 === ""){
        leftdiv.innerHTML="\n Fill All Fields!...";
      }
       
  
  else{
  
    leftdiv.innerHTML="\n Congrat' You Have Been Registered!...";
      
  }
    
}
  
checkEmpty=()=>{

}


  render() {
    return (
      <div>

<button onClick={this.notify}>Notify</button>


        <Row>
    <Col xs={2} sm={1} lg={4} md={4}  style={{backgroundColor:''}}>
    <div id="confmPass" style={{height:"200px", width:"300px", marginTop:"150px", marginLeft:"100px", fontFamily:"cursive", fontSize:"30px"}}></div>
    
    </Col>
    <Col xs={8} sm={10} lg={4} md={4}  style={{backgroundColor:''}}>
   {/*signin*/}
   
   <main  style={{height:"480px"}}>
      <CssBaseline   />
      
      <Paper >
        
        <Avatar style={{marginLeft:"10px", marginTop:"10px"}}>
          <LockOutlinedIcon />
          
        </Avatar>
        <Typography component="h1" variant="h5" style={{  display:"flex", color:'green'}}>
    
          Student SignUp
        </Typography>
        
        <form >
        <FormControl margin="normal" required="required" fullWidth>
            <InputLabel htmlFor="email">UserName</InputLabel>
            <Input id="name" name="name" onChange={this.handle} autoComplete="email" autoFocus required="required" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" onChange={this.handle} autoComplete="email" required="required"   />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input type="password" name="password"  id="password" onChange={this.handle} autoComplete="current-password" onChange={this.validatePassword} required="required"   />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Conferm Password</InputLabel>
            <Input name="cpassword" type="password" id="cpassword" autoComplete="current-password" required="required" onChange={this.handle}  />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
          
            fullWidth
            variant="contained"
            style={{backgroundColor:'#607d8b', color:'white'}}
            onClick={this.sendToActionFORSAVEStudent}
           
          >
            Sign UP
          </Button>
          
          
        </form>
        
      </Paper>
    </main>
    
    </Col>
    <Col  xs={2} sm={1} lg={4} md={4}  style={{backgroundColor:''}}>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/><br/>
    <br/>
    <br/><br/><br/>
    <span id="msg" style={{borderRadius:"200px", boxShadow:"6px 5px 2px purple", fontFamily:"cursive"}}></span>
    </Col>
 
  </Row>
 
      </div>
    )
  }
}
const mapStateToProps = (store) => {
  console.log('+++++++++++state++++++++++++++++', store.ReducerForDBdata.StudentData);

  return {
    // rtitle : store.title,
    // rDiscription:  store.descp,
    data: store.ReducerForDBdata.StudentData
  //data: store.ReducerForDBdata.StateForFirebase   For Firbase DB case

  }
}
export default connect(mapStateToProps, {sendToActionFORSAVEStudent }) (StudentSignUp)
