//node text_suggest_request.js

var request = require("request");
let key = process.env.A3RT_API_KEY_Text_Suggest;

request.get({url:"https://api.a3rt.recruit-tech.co.jp/text_suggest/v2/predict",
  qs: {
    apikey: key,
    previous_description: "馬"
  }
}, function(err,httpResponse,body){
  bodyJson = JSON.parse(body);
  console.log(bodyJson);
  console.log(bodyJson.suggestion[0]);
  console.log(bodyJson.suggestion[1]);
});


