const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.get('/', (request, response) =>  response.sendFile(`${__dirname}/index.html`));

app.post('/', (request, response) => {
  const postBody = request.body;
  response.write(postBody);
});
port =  process.env.PORT || 80
app.listen((port), () => response.write('Application running on port 3000'));
