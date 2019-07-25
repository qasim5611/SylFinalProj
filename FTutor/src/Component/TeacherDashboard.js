
import React, { Component } from 'react';
import image1 from './images/android-icon-72x72.png';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import logo from './images/ic_border_color_white_18dp.png';
import logo1 from './images/ic_border_color_white_18dp.png';
import { sendToActionFORRetriveStdInfo } from './../Redux/Action/action';
import { DeleteStdRecordFromStore } from './../Redux/Action/action';
// import { UpdateRecordFromDB } from './../Redux/Action/action';
import { connect } from 'react-redux';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    iconSmall: {
      fontSize: 20,
    },
  }));
  
export class TDashBoard extends Component {
    notifyA = () => toast.error('Sorry you are not authorized!', {containerId: 'A'});
    notifyB = (a) => toast.success('Confirmation will be sent to Student '+a+' Via Msg Api', {containerId: 'B'});
  // state = {
  //   loading: true
  // }
  //Firstly initializing
  componentWillMount() {

    this.props.sendToActionFORRetriveStdInfo();
    // DateMangwaLiya();
  //  this.setState({ loading: !this.state.loading })
  }



  DeleteStdRecordFromStore = (id) => {
    //unique ko just utthay ga or duplication price ali ko skip kar dy ga
    // let newArr = this.state.arr.filter((item)=> item.Price != data );

    // this.setState({arr:newArr});
    //DeleteRecordFromStore(id);
    let data = { id: id }
    alert("your no. is " + data.id);

    this.props.DeleteStdRecordFromStore(data);

  }
 
  SendMsg=(data)=>{
var a=data;
this.notifyB(a);
  }
  
  render() {
    // let divstyle={
    //   backgroundcolor:"red"

    // }
    return (
      <div>
        {/* {this.state.loading ? <div>Loading....</div> : */}
          <html style={{ height: "100%" }}>
            <head>
              <title>TD</title>
            </head>
            <body>
              <Row>
                {/*............................................Top Left Corner*/}
                <Col xs={12} sm={12} lg={3} md={3} style={{ backgroundColor: '', height: "150px", float: "left", boxShadow: "1px 1px 3px black" }}>
                  <img src={image1} style={{ borderRadius: "50%", marginTop: "20px", marginLeft: "20px" }} />
                  <p style={{ display: "inline", marginLeft: "20px", marginTop: "50px", fontFamily: "cursive", fontSize: "20px" }}>Qasim<br />Join Date: 10-03-2019 </p>

                </Col>
                {/*............................................End of Top Left Corner*/}
                <Col xs={12} sm={12} lg={9} md={9} style={{ backgroundColor: 'orange', height: "150px", float: "left", backgroundColor: "black", borderBottomRightRadius: "200px" }}>
                  <center><p style={{ paddingTop: "30px", paddingLeft: "50px", color: "white", fontFamily: "cursive", fontSize: "40px" }} >Teacher DashBoard</p></center>
                </Col>
                {/*............................................End of Top Right Corner*/}
              </Row>

              <Row>
                {/*............................................2nd Left Corner*/}
                {/* <Col xs={12} sm={12} lg={3} md={3} style={{ height: "420px", borderRight: "1px black solid", backgroundColor: "", float: "left" }}>

                  <p style={{ fontsize: "13px" }}>&nbsp;Project To-Do</p><br />


                  <List component="nav"  >
                    <ListItem button>
                      <Link to="/newtodo">   <ListItemText primary="Back To New" /> </Link>
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
                      <ListItemText primary="Access all Data from DB" />
                    </ListItem>

                  </List>

                </Col> */}
                <Col xs={12} sm={12} lg={12} md={12} style={{ backgroundColor: '', height: "px" }}>

                  {/* <div>
              <p>title:{this.props.rtitle}</p>
              <p>Description:{this.props.rDiscription}</p>
            </div> */}
            <center>
                  <div style={{ height: "400px", width: "px", backgroundColor: "", overflow: "scroll" }}>
                    <table style={{ border: "2px black dashed", width: "px" }}>
                      <tr style={{ border: "2px black solid", width: "px" }} >
                        <th style={{ border: "2px black solid", width: "px" }}>Student-ID</th>
                        <th style={{ border: "2px black solid", width: "px" }}>Name</th>

                        <th style={{ border: "2px black solid", width: "px" }}>Age</th>
                        
                        <th style={{ border: "2px black solid", width: "px" }}>DOB</th>
                        <th style={{ border: "2px black solid", width: "px" }}>Subjects for Study</th>
                        <th style={{ border: "2px black solid", width: "px" }}>PhoneNumber</th>
                        <th style={{ border: "2px black solid", width: "px" }}>Address</th>
                        

                        <th style={{ border: "2px black solid", width: "px" }}><center>Action</center></th>
                      </tr>

                      {
                        //  return this.props.tasks.map((task) => {
                        this.props.data.map((value, index) => {
                          console.log('value', value)
                          return (
                              
                            <tr key={index} style={{ border: "2px black dashed", width: "px" }}>

                              <td style={{ paddingLeft: "px",border: "2px black dashed" }} id="name1"> {value._id} </td>
                              <td style={{ paddingLeft: "px",border: "2px black dashed" }} id="cat1"> {value.name}  </td>
                              <td style={{ paddingLeft: "px",border: "2px black dashed" }} id="dic1"> {value.age}</td>
                              <td style={{ paddingLeft: "px",border: "2px black dashed" }} id="cat1"> {value.dob}  </td>
                              <td style={{ paddingLeft: "px",border: "2px black dashed" }} id="dic1"> {value.sub}</td>
                              <td style={{ paddingLeft: "px",border: "2px black dashed" }} id="dic1"> {value.phone}</td>
                              <td style={{ paddingLeft: "px",border: "2px black dashed" }} id="dic1"> {value.add}</td>

                              <td >
                                <td style={{}}>
                                
                                <Button variant="contained" color="secondary"  onClick={() => this.DeleteStdRecordFromStore(value._id)} >
        Delete
        <DeleteIcon/>
      </Button>
      
                                </td>
                                <td>
                                {/* <Fab color="secondary" aria-label="Edit" onClick={() => this.UpdateRecordFromDB(value._id)} >
                                    <Icon><img src={logo} alt="not" /></Icon>
                                  </Fab> */}
                                <Button variant="contained" color="primary" onClick={() => this.SendMsg(value.name)}  >
        Send
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon >send</Icon>
      </Button>
                                </td>
                              </td>
                            </tr>
                          )
                        })
                      }

                    </table>
                  </div>
                  </center>
                </Col>
              </Row>
            </body>
          </html>

        }
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



const mapStateToProps = (store) => {
  console.log('+++++++++++state++++++++++++++++', store.ReducerForDBdata);

  return {
    // rtitle : store.title,
    // rDiscription:  store.descp,
  data: store.ReducerForDBdata.StdInfo
  //data: store.ReducerForDBdata.StateForFirebase   For Firbase DB case

  }
}

export default connect(mapStateToProps, { sendToActionFORRetriveStdInfo,DeleteStdRecordFromStore})(TDashBoard);