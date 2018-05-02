//node text_classification_axios.js

let key = process.env.A3RT_API_KEY_Text_Classification;

const axios = require('axios');
 
axios.get('https://api.a3rt.recruit-tech.co.jp/text_classification/v1/classify', {
    params: {
    apikey: key,
    model_id: "default",
    text: "馬が走っています。"
    }
  })
  .then(response => {
    console.log(response.data.classes)
    console.log("====================")
    console.log(response.data.classes[0])
    console.log(response.data.classes[0].probability)
    console.log(response.data.classes[0].label)

  })
  .catch(error => {
    console.log(error);
  });


