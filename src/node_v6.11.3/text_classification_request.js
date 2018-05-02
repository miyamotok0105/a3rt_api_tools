//node text_classification_request.js

var request = require("request");
let key = process.env.A3RT_API_KEY_Text_Classification;

request.get({url:"https://api.a3rt.recruit-tech.co.jp/text_classification/v1/classify",
  qs: {
    apikey: key,
    model_id: "default",
    text: "馬が走っています。"
  }
}, function(err,httpResponse,body){
  bodyJson = JSON.parse(body);
  console.log(bodyJson);
  // console.log(bodyJson.classes[0].label);
  // console.log(bodyJson.classes[0].probability);
});




