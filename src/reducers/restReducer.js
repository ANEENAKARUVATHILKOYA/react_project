import { SUCCESS,FAIL } from "../constants/restConstants"

  export const restReducer=(state={restaurentlist:[]}, action)=>{
         switch(action.type){
            
            case SUCCESS:
                return{
                    restaurentlist:action.payload
                }

            case FAIL:
                return {
                    restaurentlist:action.payload
                } 
              
            default:
                return state    
        }
    
    }