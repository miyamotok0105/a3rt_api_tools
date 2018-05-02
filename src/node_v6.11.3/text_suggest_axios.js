//node text_suggest_axios.js

const axios = require('axios');
let key = process.env.A3RT_API_KEY_Text_Suggest;

axios.get('https://api.a3rt.recruit-tech.co.jp/text_suggest/v2/predict', {
    params: {
    apikey: key,
    previous_description: "馬"
    }
  })
  .then(response => {
    console.log(response.data.suggestion)
    console.log("====================")
  })
  .catch(error => {
    console.log(error);
  });


 



