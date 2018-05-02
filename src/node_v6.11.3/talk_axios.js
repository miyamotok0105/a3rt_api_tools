//node talk_axios.js

const querystring = require('querystring');
const axios = require('axios');
let key = process.env.A3RT_API_KEY_Talk;
console.log(key);

const data = {
  apikey: key,
  query: "馬が走っています。"
};
console.log(data);

var headers = {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded'
};

//json型じゃなくてquerystring.stringify使ってクエリストリングに直さないとダメだよ。
axios.post('https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk', querystring.stringify(data), headers)
.then(response => {
    console.log('body:', response.data);  // Yohei Munesada
})
.catch(error => {
  console.log(error);
  // console.log("error");
});







