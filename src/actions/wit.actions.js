import Axios from 'axios';

axios.get('https://api.wit.ai/message' )
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });  