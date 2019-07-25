//import { RESET } from "../Action/action";



var initialState = {

    StudentData: [{
        id: '',
        name: '',
        email: '',
        password: ''
    }],
    TeacherData: [{
        id: '',
        name: '',
        email: '',
        password: ''
    }],
    StdInfo: [{
        id: '',
        name: '',
        age: '',
        phone: '',
        dob: '',
        sub: '',
        add: ''
       
    }],
    TchInfo: [{
        id: '',
        name: '',
        age: '',
        phone: '',
        dob: '',
        sub: '',
        add: ''
       
    }],
    updatedobj:[{
        id: '',
        name: '',
        age: '',
        phone: ''
    }],
    LoginTF:[{
        status: '',
    }],
    LoginSF:[{
        status: '',
    }]   }
function ReducerForDBdata(state = initialState, action) {
    switch (action.type) {
     case 'ConfirmStudent': 
                        {
                            console.log("ok dispatch is running");
                            var a = action.data
                            console.log('email', a.email);
                            console.log('password', a.password);
                            console.log('state at ', state.StudentData );
                            let newArr = state.StudentData.filter((item) => item.password === a.password && item.email === a.email);
                            console.log('new Array ', newArr );
                        var a;
                       if (newArr.length === 0) {
                        a=10;   
                         } else {
                            a=20;
                          
                         }
                             console.log(a);
                             console.log('helo');
                            return {
                                ...state,
                                LoginTF: a
                
                            }
                            
                        }
        case 'ConfirmTeacher': 
                        {
                            console.log("ok dispatch is running");
                            var a = action.data
                            console.log('email', a.email);
                            console.log('password', a.password);
                            console.log('state at ', state.TeacherData );
                            let newArr = state.TeacherData.filter((item) => item.password === a.password && item.email === a.email);
                            console.log('new Array ', newArr );
                        var a;
                       if (newArr.length === 0) {
                        a=10;   
                         } else {
                            a=20;
                          
                         }
                             console.log(a);
                             console.log('helo');
                            return {
                                ...state,
                                LoginSF: a
                
                            }
                            
                        }

        case 'AddStudentOnReducer':
            var a = action.data
            console.log('Studentdata at reducer', a);
            return {

                StudentData: [...state.StudentData, a]
                
                //StateForFirebase: [...state.StateForFirebase, a]    For Firebase
            }
            
            case 'AddTchInfoOnReducer':
                var a = action.data
                console.log('Teacherdata at reducer', a);
                return {
    
                    TchInfo: [...state.TchInfo, a]
                    
                    //StateForFirebase: [...state.StateForFirebase, a]    For Firebase
                }
            case 'AddStdInfoOnReducer':
                var a = action.data
                console.log('Studentdata at reducer', a);
                return {
    
                    StdInfo: [...state.StdInfo, a]
                    
                    //StateForFirebase: [...state.StateForFirebase, a]    For Firebase
                }
                
                case 'AddTchInfoOnReducer':
                    var a = action.data
                    console.log('Studentdata at reducer', a);
                    return {
        
                        TchInfo: [...state.TchInfo, a]
                        
                        //StateForFirebase: [...state.StateForFirebase, a]    For Firebase
                    }
                case 'ShowUser':

                    {
                        var a = action.data
                        console.log('data at reducer', state.StudentData);
                        return {
                            ...state,
                            StudentData: a
                        }
                    }
                    
                    case 'ShowTeacher':

                        {
                            var a = action.data
                            console.log('data at reducer', state.TeacherData);
                            return {
                                ...state,
                                TeacherData: a
                            }
                        }
        case 'ShowStdInfoToTeacher':

            {
                var a = action.data
                console.log('data at reducer', state.StdInfo);
                return {
                    ...state,
                    StdInfo: a
                }
            }
            
            case 'ShowTeacherInfoToStd':

                {
                    var a = action.data
                    console.log('data at reducer', state.TchInfo);
                    return {
                        ...state,
                        TchInfo: a
                    }
                }

        case 'DeleteStdFromRed':


            {
                console.log("ok dispatch is running");
                var a = action.data
                console.log('data at reducer after deletion', a._id);
                let recordAgainstId = state.StdInfo.filter((item) => item._id !== a._id);

                // this.setState({DBdata:newArr});
                return {
                    StdInfo: recordAgainstId
                }
            }
            
            case 'DeleteTchFromRed':


            {
                console.log("ok dispatch is running");
                var a = action.data
                console.log('data at reducer after deletion', a._id);
                let recordAgainstId = state.TchInfo.filter((item) => item._id !== a._id);

                // this.setState({DBdata:newArr});
                return {
                    TchInfo: recordAgainstId
                }
            }
            case 'UpdateDataFromDB':

            
            {
                console.log("ok dispatch is running");
                var a = action.data
                console.log('data at reducer after deletion', a._id);
                let newArr = state.DBdata.filter((item) => item._id !== a._id);

                // this.setState({DBdata:newArr});
                return {
                    ...state,
                    DBdata: newArr
                }
            }
            //////////////////////////////////////////////////////////////////////////////////////
            case 'ShowUserAfterEdit':
            {               
                let mTasks = state.tasks;
                return {
                    ...state,
                    tasks: mTasks.map( (task) => {
                        if(task.id === action.data._id) {
                            return {
                                id: task._id,
                              name: action.data.name,
                                age: action.data.age,
                                phone: action.data.phone
                                ,
                             
                            }
                        } else {
                            return task;
                        }
                    } )
                }
            }


            case 'Updatefilter':

//jis jaga ya form pe ham ne record ko update karana hy , waha pee porana record id k against wala rakhna
 
            {
                console.log("ok dispatch is running");
                var a = action.data
                console.log('data at ', a);
                console.log('state at ', state.DBdata );
                let newArr = state.DBdata.filter((item) => item._id === a);
console.log('NEW ARRAY TO EDIT', newArr);
                //this.setState({updatedobj:newArr});
                return {
                    
                    updatedobj: newArr
                    
                   // updatedobj: [...state.updatedobj, newArr]
                }
                
            }

        default:
            return state;





    }
}

export default ReducerForDBdata;

