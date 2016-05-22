import express from 'express';
import cors from 'cors';

const words = require('./words.json');
const app = express();

app.use(cors());

const randomWord = () => {
  const min = 0;
  const max = words.length - 1;
  const idx = Math.floor(Math.random() * (max - min + 1)) + min;
  return words[idx];
};

app.get('/items', function (req, res) {
  const limit = parseInt(req.query.limit, 10);
  const items = [];
  for (var i = 0; i < limit; i++) {
    items.push(randomWord());
  }
  res.json({ items });
});

app.listen(4000, function () {
  console.log('toy-server listening on port 4000!');
});
