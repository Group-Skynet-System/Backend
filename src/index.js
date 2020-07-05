const express = require('express');

const app = express();

app.get('/', (request, response) => {
   return response.json({ message: 'Hello Goostack' });
});

app.listen(3333, () => {
  console.log('💻 Backend Started!!');
});