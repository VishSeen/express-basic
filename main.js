const express = require('express');
const app = express();
const path = require('path');
const port = 4000;


app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  console.log(req.url);
  res.send("Home Page");
});


/**
 * Serving an HTML file to the client
 * Get the path "/form" and then rendering the HTML provided
 */
app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, "html/form.html"));
});

app.post('/result', (req, res) => {
  if (req.body.name === 'Test') {
    res.send("Result page");
  } else {
    res.send("Sorry not a valide name")
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});