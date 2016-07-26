const app = require('express')();
const http = require('http').Server(app);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

http.listen(4000, () => {
  console.log('listening on *:4000');
});
