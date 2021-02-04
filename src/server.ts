import express from 'express';

const app = express();

app.listen(3333, () => {
  console.log("Sever started on port 3333")
})