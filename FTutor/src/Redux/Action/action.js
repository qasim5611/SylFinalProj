import axios from 'axios';
import db from '../firebaseConfig';


////////////////////////////////
export function sendToActionFORSAVEStudent(data) {
  console.log('data from act' + data )
  return dispatch => {
      
      let url = `http://localhost:3030/savetodb`;
  
    
      alert("COngratulation! You Have Been Sinup Successfully, Click On Student to Login");

      
      axios
        .post(url,data)   // ye server k pass jay ga
        .then(res => { 
          alert('res recived')  //server se jo response ay ga
          console.log(res.data);
          
          dispatch({
              type:'AddStudentOnReducer',
              data:res.data
            })
           
        })
        .catch(err => {
          console.error(err);

        });
    };
  
  }
  
  export function sendToActionFORSAVETeacher(data) {
    console.log('data from act' + data )
    return dispatch => {
        
        let url = `http://localhost:3030/sendToActionFORSAVETeacher`;
    
      
        alert("COngratulation! You Have Been Sinup Successfully, Click On Teacher to Login");
  
        
        axios
          .post(url,data)   // ye server k pass jay ga
          .then(res => { 
            alert('res recived')  //server se jo response ay ga
            console.log(res.data);
            
            dispatch({
                type:'AddTeacherOnReducer',
                data:res.data
              })
             
          })
          .catch(err => {
            console.error(err);
  
          });
      };
    
    }
  /////////////////////////////////////////
  
  export  function sendToActionFORConfirmStudent1(data) {
    console.log("email-id is" +  data.email);
 
     return {
         type: "ConfirmStudent",
         data:  data
          
     }
 }
 export  function sendToActionFORConfirmStudent2(data) {
  console.log("email-id is" +  data.email);

   return {
       type: "ConfirmStudent",
       data:  data
        
   }
}
  export  function sendToActionFORConfirmTeacher1(data) {
    console.log("email-id is" +  data.email);
 
     return {
         type: "ConfirmTeacher",
         data:  data
          
     }
 }
 export  function sendToActionFORConfirmTeacher2(data) {
  console.log("email-id is" +  data.email);

   return {
       type: "ConfirmTeacher",
       data:  data
        
   }
}
export function sendToActionFORRetriveStudent() {
    
  console.log('data from act' );
  
  return dispatch => {
      
 let url = `http://localhost:3030/getDataFromDB`;
  
      alert( "your data is retriving");

      
      axios
        .post(url)   // ye server k pass jay ga
        .then(res => {
          alert('res recived')  //server se jo response ay ga
          console.log(res.data);
        
          dispatch({
              type:'ShowUser',
              data:res.data
            })
        
        })
        .catch(err => {
          console.error(err);
        });
    };
  
  }
  export function sendToActionFORRetriveTeacher() {
    
    console.log('data from act' );
    
    return dispatch => {
        
   let url = `http://localhost:3030/sendToActionFORRetriveTeacher`;
    
        alert( "your data is retriving");
  
        
        axios
          .post(url)   // ye server k pass jay ga
          .then(res => {
            alert('res recived')  //server se jo response ay ga
            console.log(res.data);
          
            dispatch({
                type:'ShowTeacher',
                data:res.data
              })
          
          })
          .catch(err => {
            console.error(err);
          });
      };
    
    }
  export function sendToActionFORSAVE(data) {
    
    
    console.log('data from act' + data );
    
    return dispatch => {
        
        let url = `http://localhost:3030/savetodb`;
    
        // var data = {
        //   name:'Dilawar',
        //   age: 22,
        //   phone: 1122
        // }
        alert( "your data is"  + data.name + data.age + data.phnumber);
  
        
        axios
          .post(url,data)   // ye server k pass jay ga
          .then(res => { 
            alert('res recived')  //server se jo response ay ga
            console.log(res.data);
            /////////////////
            dispatch({
                type:'AddUser',
                data:res.data
              })
              /////////////////////////
          })
          .catch(err => {
            console.error(err);

          });
      };
    
    }
//////////////////////////////////////////////////////////////////////////////////////////////

    

    export function sendFORSAVEStdInformation(data) {
    
    
      console.log('data from act' + data );
      
      return dispatch => {
          
          let url = `http://localhost:3030/sendFORSAVEStdInformation`;
      
          // var data = {
          //   name:'Dilawar',
          //   age: 22,
          //   phone: 1122
          // }
          alert( "your data is"  + data.name + data.age + data.phone);
    
          axios
            .post(url,data)   // ye server k pass jay ga
            .then(res => { 
              alert('res recived')  //server se jo response ay ga
              console.log(res.data);
              /////////////////
              dispatch({
                  type:'AddStdInfoOnReducer',
                  data:res.data
                })
                /////////////////////////
            })
            .catch(err => {
              console.error(err);
  
            });
        };
      
      }
      
      export function sendFORSAVETchInformation(data) {
    
    
        console.log('data from act' + data );
        
        return dispatch => {
            
            let url = `http://localhost:3030/sendFORSAVETchInformation`;
        
            // var data = {
            //   name:'Dilawar',
            //   age: 22,
            //   phone: 1122
            // }
            alert( "your data is"  + data.name + data.age + data.phone);
      
            axios
              .post(url,data)   // ye server k pass jay ga
              .then(res => { 
                alert('res recived')  //server se jo response ay ga
                console.log(res.data);
                /////////////////
                dispatch({
                    type:'AddTchInfoOnReducer',
                    data:res.data
                  })
                  /////////////////////////
              })
              .catch(err => {
                console.error(err);
    
              });
          };
        
        }
        
  
      export function sendToActionFORRetriveStdInfo() {
    
        console.log('data from act' );
        
        return dispatch => {
            
       let url = `http://localhost:3030/sendToActionFORRetriveStdInfo`;
        
            alert( "your data is retriving");   
            axios
              .post(url)   // ye server k pass jay ga
              .then(res => {
                alert('res recived')  //server se jo response ay ga
                
                console.log(res.data); 
              
                dispatch({
                    type:'ShowStdInfoToTeacher',
                    data:res.data
                  })          
              })
              .catch(err => {
                console.error(err);
              });
          };
        
        }
        
        export function sendToActionFORRetriveTchInfo() {
    
          console.log('data from act' );
          
          return dispatch => {
              
         let url = `http://localhost:3030/sendToActionFORRetriveTchInfo`;
          
              alert( "your data is retriving");   
              axios
                .post(url)   // ye server k pass jay ga
                .then(res => {
                  alert('res recived')  //server se jo response ay ga
                  
                  console.log(res.data); 
                
                  dispatch({
                      type:'ShowTeacherInfoToStd',
                      data:res.data
                    })          
                })
                .catch(err => {
                  console.error(err);
                });
            };
          
          }
        
        export function DeleteStdRecordFromStore(data) {
        
          console.log('id from component  ' , data );
          return dispatch => {
          // let note = {
          //   id: data
          // }    
                 
              let url = `http://localhost:3030/DeleteStdRecordFromStore`          
              axios
              .post(url,data)   // ye server k pass jay ga
              .then(res => {
                alert('res recived')  //server se jo response ay ga
                console.log("Server response",res.data);
                dispatch({
                           
                                 type:'DeleteStdFromRed',
                                 data:res.data,
                                
                                 
                               })
                })
                .catch(err => {
                  console.error(err);
                });
                
              };
          }
  
          export function DeleteTchRecordFromStore(data) {
        
            console.log('id from component  ' , data );
            return dispatch => {
            // let note = {
            //   id: data
            // }    
                   
                let url = `http://localhost:3030/DeleteTchRecordFromStore`          
                axios
                .post(url,data)   // ye server k pass jay ga
                .then(res => {
                  alert('res recived')  //server se jo response ay ga
                  console.log("Server response",res.data);
                  dispatch({
                             
                                   type:'DeleteTchFromRed',
                                   data:res.data,
                                  
                                   
                                 })
                  })
                  .catch(err => {
                    console.error(err);
                  });
                  
                };
            }
  













