//node talk_superagent.js

var request = require('superagent');
const querystring = require('querystring');

let key = process.env.A3RT_API_KEY_Talk;
var url = "https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk";

request
  .post(url)
  .send(querystring.stringify({apikey: key, query: "馬が走っています。"}))
  .end(function(err, res){
    console.log(res.body);
  });



