//node text_classification_superagent.js

let key = process.env.A3RT_API_KEY_Text_Classification;

var request = require('superagent');
var url = 'https://api.a3rt.recruit-tech.co.jp/text_classification/v1/classify';

request
  .get(url)
  .query({apikey: key, model_id: "default", text: "馬が走っています。"})
  .end(function(err, res){
    console.log(res.body);
  });


