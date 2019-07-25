//import { RESET } from "../Action/action";

var initialState = {
    // counter : 0,
    // name: ' ',
    // title:' ',
    // descp:' ',
    data:[{
        title:'',
        descp:''
    }],
    
   
}
function todoReducer(state = initialState , action) {
    
    switch (action.type) {
        

        case 'INSERTION':
            console.log('data from reducer', action.data );
            
            {
               
               
                let currentData = state.data;
                currentData.push({
                    name : action.data[0],
                    descp : action.data[1],
                });
           
            return { 
                ...state,
                data:currentData
            }
        }

    

        case 'ADDCOUNTER':
            console.log('data from reducer', action.data);
            
            {
                let currentCouter = state.counter;

                return { 
                    ...state,
                    counter : currentCouter + 1,
                    name    : action.data
                }
            }
        case 'DECREASECOUNTER':
            {
                let currentCouter = state.counter;
                return { 
                    ...state,
                    counter : currentCouter - 1
                }
            }
        // case RESET:

        //     {
        //         return { 
        //             ...state,
        //             counter :  0
        //         }
        //     }
       
        default:
            return state;
    }
}

export default todoReducer;

