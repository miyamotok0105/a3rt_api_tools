//node talk_request.js

var request = require("request");
let key = process.env.A3RT_API_KEY_Talk;

request.post({url:"https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk",
  form: {
    apikey: key,
    query: "馬が走っています。"
  }
}, function(err,httpResponse,body){
  checkCharset(body)
  bodyJson = JSON.parse(body);
  console.log(bodyJson.results[0].perplexity);
  console.log(bodyJson.results[0].reply);
});

function checkCharset(char) {
  var jschardet = require('jschardet');
  var notUtf8String = char;
  var detectResult = jschardet.detect(notUtf8String);
  console.log(detectResult);
 };


