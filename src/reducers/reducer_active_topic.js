// state argment is not the APLLICATION state, only state this reducer is responsible for 
export default function(state = null , action){
  switch(action.type){
    case 'TOPIC_SELECTED':
      return action.payload;
  }

  return state;
} 
