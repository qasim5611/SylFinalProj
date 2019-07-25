import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import tutor from './images/Untitled-4.png';
import stud from './images/Untitled-1.png';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';


class FrontPage extends Component {
  render() {
    
    return (
      <div>
        
        <br/>
         <Row style={{marginLeft:'0px'}}>
                {/*............................................Top Left Corner*/}
                <Col xs={0} sm={0} lg={1} md={1} style={{ backgroundColor: '', height: "0px", float: "left", boxShadow: "1px 1px 3px black" }}>
                  {/* <img src={image1} style={{ borderRadius: "50%", marginTop: "20px", marginLeft: "20px" }} /> */}
                  <p style={{ display: "inline", marginLeft: "20px", marginTop: "50px", fontFamily: "cursive", fontSize: "20px" }}> </p>
                 </Col>

                <Col xs={12} sm={12} lg={5} md={5} style={{ backgroundColor: 'orange', height: "300px", float: "left", backgroundColor: "#212121",borderBottomRightRadius: "150px",borderBottomLeftRadius: "5px",borderTopLeftRadius: "5px",borderTopRightRadius: "5px",   }}>
                       <Row style={{height:'px', width:'px'}}> 
                            <Col xs={2} sm={2} lg={2} md={2} style={{ height:'70px' ,backgroundColor:''}}></Col>
                            <Col xs={3} sm={3} lg={3} md={3}  style={{ backgroundColor:'',height:'70px', paddingTop: "0px", paddingLeft: "50px", color: "green", fontFamily: "cursive", fontSize: "25px" }} ><img src={tutor} style={{height:'100px', width:'150px' }} /></Col>
                            <Col xs={5} sm={5} lg={5} md={5} style={{height:'70px',color:'white', marginTop:'35px'}}>HIRE TUTOR</Col>
                            <Col xs={2} sm={2} lg={2} md={2} style={{height:'70px',backgroundColor:''}}></Col>
                        </Row>
                        <Row  style={{height:'px', width:'px'}}>
                         <Col  xs={12} sm={12} lg={12} md={12} style={{width:'560px',color:'white', backgroundColor:''}}><center>YOUR STEP TOWARD A BRIGHTER FUTURE. We are here to boost your career by hiring experts</center>
                         </Col>
                        </Row>
                        <Row style={{marginTop:'40px'}}>
                         <Col xs={5} sm={5} lg={5} md={5}  style={{backgroundColor:''}}></Col>
                         <Col  xs={4} sm={4} lg={4} md={4} style={{width:'560px',color:'white', backgroundColor:''}}>
                         <Link to="/StudentSignIn" style={{textDecoration:'none'}}>          <Fab variant="extended" aria-label="Delete"  style={{color:'green', textDecoration:'none'}} >
        <NavigationIcon/>
      Extended
      </Fab> </Link></Col>
                        
                        <Col xs={4} sm={3} lg={3} md={3} style={{backgroundColor:''}}></Col>
                         </Row>
                 </Col>

                <Col xs={0} sm={0} lg={0} md={0} style={{ backgroundColor: '', height: "0px", float: "left", boxShadow: "1px 1px 3px black" }}>
                  {/* <img src={image1} style={{ borderRadius: "50%", marginTop: "20px", marginLeft: "20px" }} /> */}
                  <p style={{ display: "inline", marginLeft: "20px", marginTop: "50px", fontFamily: "cursive", fontSize: "20px" }}> </p>

                </Col>

                {/*............................................End of Top Left Corner*/}
                {/* <Col xs={12} sm={12} lg={5} md={5} style={{ backgroundColor: 'orange', height: "300px", float: "left", backgroundColor: "#212121", border:'2px #4fc3f7 solid',borderBottomRightRadius: "150px",borderBottomLeftRadius: "5px",borderTopLeftRadius: "5px",borderTopRightRadius: "5px",  }}>
                  <p style={{ paddingTop: "20px", paddingLeft: "50px", color: "blue", fontFamily: "cursive", fontSize: "25px" }} ><img src={stud} style={{height:'150px', width:'150px' }} />FIND STUDENTS</p><p style={{color:'white'}}>WE WILL HELP YOU TO TARGET YOUR ERA</p>
                </Col> */}
                <Col xs={12} sm={12} lg={5} md={5} style={{ backgroundColor: 'orange', height: "300px", float: "left", backgroundColor: "#212121",borderBottomRightRadius: "150px",borderBottomLeftRadius: "5px",borderTopLeftRadius: "5px",borderTopRightRadius: "5px",   }}>
                       <Row style={{height:'px', width:'px'}}> 
                            <Col xs={2} sm={2} lg={2} md={2} style={{ height:'70px' ,backgroundColor:''}}></Col>
                            <Col xs={3} sm={3} lg={3} md={3}  style={{ backgroundColor:'',height:'70px', paddingTop: "0px", paddingLeft: "50px", color: "green", fontFamily: "cursive", fontSize: "25px" }} ><img src={stud} style={{height:'100px', width:'150px' }} /></Col>
                            <Col xs={5} sm={5} lg={5} md={5} style={{height:'70px',color:'white', marginTop:'35px'}}>FIND STUDENTS</Col>
                            <Col xs={2} sm={2} lg={2} md={2} style={{height:'70px',backgroundColor:''}}></Col>
                        </Row>
                        <Row  style={{height:'px', width:'px'}}>
                         <Col  xs={12} sm={12} lg={12} md={12} style={{width:'560px',color:'white', backgroundColor:''}}><center>YOUR STEP TOWARD A BRIGHTER STUDENTS. We are here to fulfill your need by target your skill Area.</center>
                         </Col>
                         </Row>
                         <Row style={{marginTop:'40px'}}>
                         <Col xs={5} sm={5} lg={5} md={5}  style={{backgroundColor:''}}></Col>
                         <Col  xs={4} sm={4} lg={4} md={4} style={{width:'560px',color:'white', backgroundColor:''}}>
                         <Link to="/TeacherSignIn" style={{textDecoration:'none'}}>        <Fab variant="extended" aria-label="Delete" style={{color:'blue', textDecoration:'none'}} >
        <NavigationIcon/>
      Extended
      </Fab></Link> </Col>
                        
                        <Col xs={4} sm={3} lg={3} md={3} style={{backgroundColor:''}}></Col>
                         </Row>
                         
                        
                 </Col>






                <Col xs={0} sm={0} lg={1} md={1} style={{ backgroundColor: '', height: "0px", float: "left", boxShadow: "1px 1px 3px black" }}>
                  {/* <img src={image1} style={{ borderRadius: "50%", marginTop: "20px", marginLeft: "20px" }} /> */}
                  <p style={{ display: "inline", marginLeft: "20px", marginTop: "50px", fontFamily: "cursive", fontSize: "20px" }}> </p>

                </Col>
                {/*............................................End of Top Right Corner*/}
        </Row>
       

        
 




        
       
    

 
    
  






      </div>

      
    )
  }
}

export default FrontPage
